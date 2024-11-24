import React, { useState } from "react";
import { BlockDetails } from "./BlockDetails";
import { SearchBar } from "./SearchBar";
import { IoIosClose } from "react-icons/io";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaRegCopy } from "react-icons/fa";

export const PARTIES: any = {
  0: {
    name: "BET",
    color: "#f03e3e",
    photo: "https://cdn-icons-png.flaticon.com/512/9159/9159760.png",
  },
  1: {
    name: "VASCO",
    color: "#7048e8",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1H5WN3MT_yy57bjY7mok1Rd30KG2gbqV5g583mvbZKhtqRsHQRh6lfhZqXLqqYvV9f4&usqp=CAU",
  },
  2: {
    name: "PSTC",
    color: "#1c7ed6",
    photo: "https://cdn-icons-png.flaticon.com/512/2118/2118592.png",
  },
};

interface BlocksProps {
  blocks: any[];
}

export const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  const [selectedBlock, setSelectedBlock] = useState<any>();
  const [search, setSearch] = useState<string>("");

  const lowerSearch = search.toLowerCase();
  const filteredBlocks = search
    ? blocks.filter(
        (b) =>
          b.id?.toLowerCase().includes(lowerSearch) ||
          b.payload.zone.toLowerCase().includes(lowerSearch) ||
          b.payload.city.toLowerCase().includes(lowerSearch)
      )
    : blocks;

  return (
    <div className="overflow-x-auto mx-8">
      <div className="m-4">
        <SearchBar value={search} setValue={setSearch} />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Bloco</th>
            <th>Votos</th>
            <th>Sessão</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {filteredBlocks.map((block) => (
            <tr key={block.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/foundation-icon-4/block-9.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <BlockDetails
                    id={block.id}
                    setSelectedBlock={(id) =>
                      setSelectedBlock(blocks.find((b) => b.id == id))
                    }
                  />
                </div>
              </td>
              <td>
                <div>
                  <b>{block.payload.votes.length}</b> votos{" "}
                </div>
              </td>
              <td>
                <div>
                  Zona: <b>{block.payload.zone}</b>
                </div>
                <div>
                  Seção: <b>{block.payload.session}</b>
                </div>
              </td>
              <td>
                <div>
                  {block.payload.city} - {block.payload.state}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box w-11/12 max-w-[800px]">
            <div className="flex justify-between mb-3">
              {selectedBlock && (
                <div className="flex gap-4">
                  <span className="font-bold text-lg">
                    {selectedBlock.payload.session} -{" "}
                    {selectedBlock.payload.zone}
                  </span>
                  <span className=" text-lg">|</span>
                  <span className="text-lg">
                    {selectedBlock.payload.city} - {selectedBlock.payload.state}
                  </span>

                  <span className=" text-lg">|</span>

                  <span className=" text-lg">
                    {selectedBlock.payload.votes.length} votos
                  </span>
                </div>
              )}
              <form method="dialog">
                <button className="flex justify-end">
                  <IoIosClose className="text-xl" />
                </button>
              </form>
            </div>
            <hr className="mt-1" />

            <div className="my-4 mb-0 h-[400px] overflow-scroll overflow-x-hidden overflow-y-hidden rounded ">
              <PerfectScrollbar className="grid grid-cols-2 w-full ">
                {selectedBlock &&
                  selectedBlock.payload.votes.map((vote: any) => (
                    <CandidateCard
                      position={vote.position}
                      hash={vote.hash}
                      number={vote.candidate}
                    />
                  ))}
              </PerfectScrollbar>
            </div>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </table>
    </div>
  );
};

interface CandidateCardProps {
  position: string;
  number: string;
  hash: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  position,
  number,
  hash,
}) => {
  const party = PARTIES[Math.floor(+number[0] / 4)];

  return (
    <div className="flex gap-4 w-[320px] py-2 mb-2">
      <div className="avatar flex items-center justify-center">
        <div className="w-14 h-14 rounded-full">
          <img src={party.photo} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div>
            <span className="text-gray-600">Candidato</span>
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

        <div className="flex justify-between items-end">
          <div className="text-gray-600  text-xl font-bold">{position}</div>
        </div>
        <div className="flex">
          <div className="w-[200px] overflow-clip text-ellipsis">{hash}</div>
          <button>
            <FaRegCopy />
          </button>
        </div>
      </div>
    </div>
  );
};