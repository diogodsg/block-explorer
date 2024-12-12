import React, { useState } from "react";
import { BlockDetails } from "./BlockDetails";
import { SearchBar } from "./SearchBar";
import { IoIosClose } from "react-icons/io";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";

export const CANDIDATES: any = {
  "91001": {
    image:
      "https://investinhistory.ca/wp-content/uploads/2023/12/shutterstock_2216603153-1.jpg",
    name: "Diógenes Nascimento",
  },
  "91002": {
    image:
      "https://filosofia.arcos.org.br/content/images/2021/07/Plato-raphael-1.jpg",
    name: "Platão Morrimento",
  },
  "36500": {
    image: "https://cdn.pensador.com/img/authors/so/cr/socrates-l.jpg",
    name: "Socrátes Paquetá",
  },
  "36600": {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Aristoteles.jpg",
    name: "Aristóteles Bauermann",
  },
  "42123": {
    image:
      "https://www.in2greece.com/english/historymyth/mythology/wp-content/uploads/2024/05/agamemnon-258x300.jpg",
    name: "Agamemnon Pereira",
  },
  "42321": {
    image:
      "https://theancienthome.com/cdn/shop/products/001-achilles-as-a-leader-fresco-FRME3901082.jpg?v=1665388534",
    name: "Aquiles da Silva",
  },
  "42333": {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Nikolaus_Kopernikus_MOT.jpg",
    name: "Nicolau Copernico",
  },
  "91": {
    image:
      "https://static.wixstatic.com/media/36aaf3_86b29260e08e4950b001ae11b1f6462e~mv2.jpg/v1/fill/w_480,h_480,al_c,lg_1,q_80,enc_auto/36aaf3_86b29260e08e4950b001ae11b1f6462e~mv2.jpg",
    name: "Saci Júnior",
  },
  "36": {
    image: "https://static.significados.com.br/foto/medusa-og.jpg",
    name: "Medusa Cafusa",
  },

  "42": {
    image:
      "https://media.istockphoto.com/id/182914318/pt/foto/perseu-e-medusa.jpg?s=2048x2048&w=is&k=20&c=h9EaECe956XkbJtLc_Gu6yUSAaeZD3sb2lMfH0Iz9iQ=",
    name: "Perseu Luceu",
  },
};

export const PARTIES: any = {
  0: {
    name: "PSTC",
    color: "#1c7ed6",
    photo: "https://cdn-icons-png.flaticon.com/512/2118/2118592.png",
  },
  2: {
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
  nulo: {
    name: "NULO",
    color: "#868e96",
    photo: "https://cdn-icons-png.flaticon.com/512/5115/5115830.png",
  },
  branco: {
    name: "BRANCO",
    color: "#868e96",
    photo: "https://cdn-icons-png.flaticon.com/512/5115/5115830.png",
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
            <th className="w-1 ">N°</th>

            <th>Bloco</th>
            <th>Votos</th>
            <th>Seção</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {filteredBlocks
            .sort((a, b) => b.index - a.index)
            .map((block) => (
              <tr key={block.id}>
                <td className="w-1">{block.index}</td>
                <td className="pl-0">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://icons.veryicon.com/png/o/education-technology/cultural-tourism-big-data/block-27.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <BlockDetails
                      id={block.id}
                      timestamp={block.timestamp}
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
                    Zona: <b>{block.payload.zone.replace("_", " ")}</b>
                  </div>
                  <div>
                    Seção: <b>{block.payload.section}</b>
                  </div>
                </td>
                <td>
                  <div>
                    {block.payload.city.replace("_", " ")} -{" "}
                    {block.payload.state}
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
                    {selectedBlock.payload.section} -{" "}
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

export const CandidateCard: React.FC<CandidateCardProps> = ({
  position,
  number,
  hash,
}) => {
  let party = PARTIES[Math.floor(+number[0] / 4)];
  if (number === "nulo") party = PARTIES.nulo;
  if (number === "branco") party = PARTIES.branco;
  const candidate = CANDIDATES[number];
  return (
    <div className="flex gap-4 w-[320px] py-2 mb-2 h-[80px]">
      <div className="avatar flex items-center justify-center">
        <div className="w-14 h-14 rounded-full">
          <img
            src={
              candidate?.image ||
              party?.photo ||
              "https://cdn-icons-png.flaticon.com/512/9159/9159760.png"
            }
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div>
            <span className="">{candidate?.name || "Candidato"}</span>
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

        <div className="flex justify-between items-end">
          <div className="text-xl font-bold">{position}</div>
        </div>
        <div className="flex">
          <div className="w-[200px] overflow-clip text-ellipsis">{hash}</div>
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(hash);
              toast("Assinatura copiada");
            }}
          >
            <FaRegCopy />
          </button>
        </div>
      </div>
    </div>
  );
};
