import React from "react";
import { PARTIES } from "./Blocks";

interface AggregatedProps {
  cities: any[];
}
export const Aggregated: React.FC<AggregatedProps> = ({ cities }) => {
  const summedCites = cities?.map((city) => {
    const sum = city.votes.reduce((acc: any, curr: any) => acc + curr.votes, 0);
    return { ...city, sum };
  });
  return (
    <div>
      <h1 className="mx-8 text-3xl font-bold">Prefeito</h1>
      <div className="grid grid-cols-2">
        {summedCites &&
          summedCites
            .sort((a, b) => b.sum - a.sum)
            .map((c) => (
              <PositionCard
                city={c.city}
                state={c.state}
                votes={c.votes}
                digits={3}
              />
            ))}
      </div>
      <h1 className="mx-8 text-3xl font-bold">Vereador</h1>
      <div className="grid grid-cols-2">
        {summedCites &&
          summedCites
            .sort((a, b) => b.sum - a.sum)
            .map((c) => (
              <PositionCard
                city={c.city}
                state={c.state}
                votes={c.votes}
                digits={6}
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
  const percentage = (+votes / +totalVotes) * 100;

  return (
    <div className="flex gap-4  py-2">
      <div className="avatar flex items-center justify-center">
        <div className="w-14 h-14 rounded-full">
          <img src={party.photo} />
        </div>
      </div>
      <div className="flex flex-col w-full mr-2">
        <div className="flex justify-between mb-2">
          <div>
            <span className="text-gray-600">Candidato </span>
            <span> • </span>
            <span className="font-bold text-gray-600">{number}</span>{" "}
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
          <div className="text-gray-600  text-xl font-bold">
            {percentage.toFixed(2)}%
          </div>
          <div className="text-gray-600  text-sm">{votes} votos</div>
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
  const filteredVotes = votes.filter((v) => v.candidate.length == digits);
  const voteSum = filteredVotes.reduce((acc, curr) => acc + curr.votes, 0);
  return (
    <div className="flex items-center justify-center p-4 ">
      <div className="card border border-s-slate-100 text-neutral-content w-full">
        <div className=" p-4 ">
          <div className="mb-2 flex justify-between">
            <div>
              <span className="text-gray-600">{state.replace("_", " ")} </span>
              <span> • </span>
              <span className="font-bold text-gray-600">
                {city.replace("_", " ")}
              </span>
            </div>
          </div>
          <hr />
          {filteredVotes
            .sort((a, b) => b.votes - a.votes)
            .map((v) => (
              <CandidateCard
                votes={v.votes}
                number={v.candidate}
                totalVotes={voteSum}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
