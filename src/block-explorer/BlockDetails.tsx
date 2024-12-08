import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";

interface BlockDetailsProp {
  id: string;
  timestamp: number;
  setSelectedBlock: (blockId: string) => void;
}

export const BlockDetails: React.FC<BlockDetailsProp> = ({
  id,
  timestamp,
  setSelectedBlock,
}) => {
  const handleClick = () => {
    //@ts-ignore
    document.getElementById("my_modal_2").showModal();
    setSelectedBlock(id);
  };

  return (
    <div>
      <div className="hover:cursor-pointer  flex flex-col">
        <div className="flex ">
          <div
            onClick={handleClick}
            className="font-bold overflow-clip w-[250px] text-ellipsis "
          >
            {id}{" "}
          </div>
          <button
            className="ml-4"
            onClick={async () => {
              await navigator.clipboard.writeText(id);
              toast("Assinatura copiada");
            }}
          >
            <FaRegCopy />
          </button>
        </div>
        <div className="text-sm opacity-50" onClick={handleClick}>
          {formatTimestamp(timestamp * 1000)}
        </div>
      </div>
    </div>
  );
};

function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `Criado em ${day}/${month}/${year} às ${hours}h${minutes}`;
}
