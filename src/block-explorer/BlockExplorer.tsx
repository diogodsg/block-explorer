import { Blocks } from "./Blocks";

export const BlockExplorer = () => {
  return (
    <div className=" flex justify-center mb-16">
      <div className="w-[860px]">
        <div className="m-8">
          <h1 className="text-[48px]">
            <b>
              BLOCKCH<span className="text-emerald-700">URNA</span>
            </b>{" "}
            <span className="text-3xl mx-4">Block Explorer</span>
          </h1>
        </div>
        <h1 className="mx-8 text-3xl font-bold">Prefeito</h1>
        <div className="grid grid-cols-2">
          <PositionCard />
          <PositionCard />
          <PositionCard />
          <PositionCard />
        </div>
        <h1 className="mx-8 text-3xl font-bold my-4">Blocos</h1>

        <Blocks />
      </div>
    </div>
  );
};

const CandidateCard = () => {
  return (
    <div className="flex gap-4  py-2">
      <div className="avatar flex items-center justify-center">
        <div className="w-14 h-14 rounded-full">
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQEOwUBMaGnudQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517073204848?e=2147483647&v=beta&t=CKniDnZK1k3WbH40zVxFOfsuqTr3PyqA6eqioPr909A" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <div>
            <span className="text-gray-600">Fabro da Silva Sauro </span>
            <span> • </span>
            <span className="font-bold text-gray-600">36</span>{" "}
          </div>
          <div className="badge badge-secondary badge font-bold bg-red-600 text-white">
            BET
          </div>
        </div>
        <progress
          className="progress progress-error w-[280px] h-1"
          value="60"
          max="100"
        ></progress>
        <div className="flex justify-between items-end mt-1">
          <div className="text-gray-600  text-xl font-bold">59,35%</div>
          <div className="text-gray-600  text-sm">3.393.110 votos</div>
        </div>
      </div>
    </div>
  );
};

const PositionCard = () => {
  return (
    <div className="flex items-center justify-center p-4 ">
      <div className="card border border-s-slate-1000 text-neutral-content w-full">
        <div className=" p-4 ">
          <div className="mb-2 flex justify-between">
            <div>
              <span className="text-gray-600">SP </span>
              <span> • </span>
              <span className="font-bold text-gray-600">São Paulo</span>
            </div>
            <div>
              <span className=" text-gray-600">100,00%</span>
            </div>
          </div>
          <hr />
          <CandidateCard />
          <CandidateCard />
        </div>
      </div>
    </div>
  );
};
