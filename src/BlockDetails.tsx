import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import PerfectScrollbar from "react-perfect-scrollbar";

export const BlockDetails = () => {
  const handleClick = () => {
    //@ts-ignore
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div>
      <div onClick={handleClick} className="hover:cursor-pointer">
        <div className="font-bold">ca978112ca1bbdcafac231b39a23dc4da786ef</div>
        <div className="text-sm opacity-50">Criado em 2024/10/10 19h46</div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-[800px]">
          <div className="flex justify-between mb-3">
            <div className="flex gap-4">
              <span className="font-bold text-lg">Detalhes do bloco</span>
              <span className=" text-lg">|</span>
              <span className=" text-lg">15 votos</span>
            </div>
            <form method="dialog">
              <button className="flex justify-end">
                <IoIosClose className="text-xl" />
              </button>
            </form>
          </div>
          <hr className="mt-1" />
          {/* <div className="text-md">
            <div>Indice: 0</div>
            <div className="overflow-x-hidden flex">
              Hash:
              0e1e1c5f22569e1246ce855dd554e1399ce1f394ffc25f59d364caef99836e17
            </div>
            <div>Zona: 177</div>
            <div>Seção: UTFPR</div>

            <div></div>
            <div></div>

            <div></div>
          </div> */}
          {/* <hr className="mt-1" /> */}
          <div className="my-4 mb-0 h-[400px] overflow-scroll overflow-x-hidden overflow-y-hidden rounded ">
            <PerfectScrollbar className="grid grid-cols-2 w-full ">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26,
              ].map((_, i) => (
                <CandidateCard
                  position={i % 2 == 0 ? "Prefeito" : "Vereador"}
                />
              ))}
            </PerfectScrollbar>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

interface CandidateCardProps {
  position: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ position }) => {
  return (
    <div className="flex gap-4 w-[320px] py-2 mb-2">
      <div className="avatar flex items-center justify-center">
        <div className="w-14 h-14 rounded-full">
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQEOwUBMaGnudQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517073204848?e=2147483647&v=beta&t=CKniDnZK1k3WbH40zVxFOfsuqTr3PyqA6eqioPr909A" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div>
            <span className="text-gray-600">Fabro da Silva Sauro </span>
            <span> • </span>
            <span className="font-bold text-gray-600">36</span>{" "}
          </div>
          <div className="badge badge-secondary badge font-bold bg-red-600 text-white">
            BET
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="text-gray-600  text-xl font-bold">{position}</div>
        </div>
        <div className="flex">
          <div className="w-[200px] overflow-clip text-ellipsis">
            0e1e1c5f22569e1246ce855dd554e1399ce1f394ffc25f59d364caef99836e17
          </div>
          <button>
            <FaRegCopy />
          </button>
        </div>
      </div>
    </div>
  );
};
