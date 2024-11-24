import React from "react";
import { FaRegCopy } from "react-icons/fa";

interface BlockDetailsProp {
  id: string;
  setSelectedBlock: (blockId: string) => void;
}

export const BlockDetails: React.FC<BlockDetailsProp> = ({
  id,
  setSelectedBlock,
}) => {
  const handleClick = () => {
    //@ts-ignore
    document.getElementById("my_modal_2").showModal();
    setSelectedBlock(id);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="hover:cursor-pointer  flex flex-col"
      >
        <div className="flex ">
          <div className="font-bold overflow-clip w-[250px] text-ellipsis ">
            {id}{" "}
          </div>
          <button>
            <FaRegCopy />
          </button>
        </div>
        <div className="text-sm opacity-50">{formatTimestamp(0 * 1000)}</div>
      </div>
    </div>
  );
};

function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp);

  // Get the individual date and time components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Format the string
  return `Criado em ${day}/${month}/${year} às ${hours}h${minutes}`;
}

// Example usage
const timestamp = Date.now(); // Replace with your timestamp
console.log(formatTimestamp(timestamp));
