import React, { useState } from "react";
import { PARTIES, CANDIDATES } from "./Blocks";
import { Select } from "./Select";
import { groupData } from "./group";

interface AggregatedProps {
  cities: any[];
}
export const Aggregated: React.FC<AggregatedProps> = ({ cities }) => {
  const [state, setState] = useState<string>("Selecione o Estado");
  const [city, setCity] = useState<string>("Selecione a Cidade");
  const [section, setSection] = useState<string>("Selecione a Seção");

  if (!cities) return <div>Nenhum dado disponível</div>;

  const handleSetState = (state: string) => {
    setState(state);
    setCity("Selecione a Cidade");
    setSection("Selecione a Seção");
  };

  const handleSetCity = (city: string) => {
    setCity(city);
    setSection("Selecione a Seção");
  };

  const hasSelectedState = !state.startsWith("Selecione");
  const hasSelectedCity = !city.startsWith("Selecione");
  const hasSelectedSection = !section.startsWith("Selecione");

  const uniqueStates = [...new Set(cities.map((c) => c.state))];
  const uniqueCities = [
    ...new Set(
      cities
        .filter((c) => {
          if (hasSelectedState) return c.state === state;
          return true;
        })
        .map((c) => c.city)
    ),
  ];
  const uniqueSection = [
    ...new Set(
      cities
        .filter((c) => {
          if (hasSelectedCity) return c.city === city;
          return true;
        })
        .map((c) => c.section)
    ),
  ];

  const summedCites = cities
    ?.filter((c) => {
      if (hasSelectedState && c.state != state) return false;
      if (hasSelectedCity && c.city != city) return false;
      if (hasSelectedSection && c.section != section) return false;
      return true;
    })
    .map((city) => {
      const sum = city.votes.reduce(
        (acc: any, curr: any) => acc + curr.votes,
        0
      );
      return { ...city, sum };
    });
  const grouped = groupData(summedCites);
  return (
    <div>
      <div className="grid grid-cols-3 mb-6 gap-4">
        <Select
          options={uniqueStates}
          label="Selecione o Estado"
          value={state}
          setValue={handleSetState}
        />
        {hasSelectedState && (
          <Select
            options={uniqueCities}
            label="Selecione a Cidade"
            value={city}
            setValue={handleSetCity}
          />
        )}
        {hasSelectedState && hasSelectedCity && (
          <Select
            options={uniqueSection}
            label="Selecione a Seção"
            value={section}
            setValue={setSection}
          />
        )}
      </div>
      {!grouped.length && <div>Sem dados disponíveis</div>}
      {grouped?.length > 0 && (
        <h1 className="mx-8 text-3xl font-bold ">Prefeito</h1>
      )}
      <div className="grid grid-cols-2">
        {grouped &&
          grouped
            .sort((a: any, b: any) => b.sum - a.sum)
            .map((c: any) => (
              <PositionCard
                city={c.city}
                state={c.state}
                votes={c.votes}
                digits={2}
              />
            ))}
      </div>
      {grouped?.length > 0 && (
        <h1 className="mx-8 text-3xl font-bold ">Vereador</h1>
      )}
      <div className="grid grid-cols-2">
        {grouped &&
          grouped
            .sort((a: any, b: any) => b.sum - a.sum)
            .map((c: any) => (
              <PositionCard
                city={c.city}
                state={c.state}
                votes={c.votes}
                digits={5}
              />
            ))}
      </div>
    </div>
  );
};

interface CandidateCardProps {
  number: string;
  votes: number;
  totalVotes: number;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  number,
  votes,
  totalVotes,
}) => {
  const party = PARTIES[Math.floor(+number[0] / 4)];
  const candidate = CANDIDATES[number];

  const percentage = (+votes / +totalVotes) * 100;

  return (
    <div className="flex gap-4  py-2">
      <div className="avatar flex items-center justify-center">
        <div className="w-14 h-14 rounded-full">
          <img src={candidate?.image || party?.photo} />
        </div>
      </div>
      <div className="flex flex-col w-full mr-2">
        <div className="flex justify-between mb-2">
          <div>
            <span className="">{candidate?.name || "Candidato"} </span>
            <span> • </span>
            <span className="font-bold ">{number}</span>{" "}
          </div>
          <div
            className={`badge font-bold text-white`}
            style={{ backgroundColor: party.color }}
          >
            {party.name}
          </div>
        </div>
        <Progress percentage={percentage} color={party.color} />
        <div className="flex justify-between items-end mt-1">
          <div className="text-xl font-bold">{percentage.toFixed(2)}%</div>
          <div className="text-sm">{votes} votos</div>
        </div>
      </div>
    </div>
  );
};

interface ProgressProps {
  percentage: number;
  color: string;
}

const Progress: React.FC<ProgressProps> = ({ percentage, color }) => {
  return (
    <div className="w-full bg-white h-1 rounded">
      <div
        className="bg-red-300 h-1 rounded"
        style={{ width: percentage.toFixed(0) + "%", backgroundColor: color }}
      ></div>
    </div>
  );
};
interface PostionCardProps {
  city: string;
  state: string;
  votes: any[];
  digits: number;
}

const PositionCard: React.FC<PostionCardProps> = ({
  city,
  state,
  votes,
  digits,
}) => {
  const filteredVotes = votes.filter(
    (v) =>
      v.candidate.length == digits ||
      v.candidate === "nulo" ||
      v.candidate === "branco"
  );
  const validVotes = votes.filter((v) => v.candidate.length == digits);

  const validVoteSum = validVotes.reduce((acc, curr) => acc + curr.votes, 0);

  const totalVoteSum = filteredVotes.reduce((acc, curr) => acc + curr.votes, 0);
  const nullVoteSum = filteredVotes
    .filter((v) => v.candidate === "nulo")
    .reduce((acc, curr) => acc + curr.votes, 0);
  const whiteVoteSum = filteredVotes
    .filter((v) => v.candidate === "branco")
    .reduce((acc, curr) => acc + curr.votes, 0);
  return (
    <div className="flex items-center justify-center p-4 ">
      <div className="card w-full ">
        <div className=" p-4 ">
          <div className="mb-2 flex justify-between">
            <div>
              <span className="">{state.replace("_", " ")} </span>
              <span> • </span>
              <span className="font-bold ">{city.replace("_", " ")}</span>
            </div>
          </div>
          <hr />
          {validVotes
            .sort((a, b) => b.votes - a.votes)
            .map((v) => (
              <CandidateCard
                votes={v.votes}
                number={v.candidate}
                totalVotes={validVoteSum}
              />
            ))}
          <hr className="my-2" />
          <div className="grid grid-cols-2 gap-4">
            <VoteResume
              label={"Total de votos"}
              votes={totalVoteSum}
              percentage={100}
            />
            <VoteResume
              label={"Válidos"}
              votes={validVoteSum}
              percentage={(validVoteSum / totalVoteSum) * 100}
            />
            <VoteResume
              label={"Brancos"}
              votes={whiteVoteSum}
              percentage={(whiteVoteSum / totalVoteSum) * 100}
            />
            <VoteResume
              label={"Nulos"}
              votes={nullVoteSum}
              percentage={(nullVoteSum / totalVoteSum) * 100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface VoteResumeProps {
  label: string;
  votes: string;
  percentage: number;
}

const VoteResume: React.FC<VoteResumeProps> = ({
  label,
  votes,
  percentage,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div>{label}</div>
      <div className="font-bold text-lg">{votes}</div>
      <div>{percentage.toFixed(2)} %</div>
    </div>
  );
};
