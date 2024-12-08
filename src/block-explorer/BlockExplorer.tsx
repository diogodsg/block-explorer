import { useEffect, useState } from "react";
import { BlockchainService } from "../api/block";
import { Blocks } from "./Blocks";
import { Aggregated } from "./Aggregated";

export const BlockExplorer = () => {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [agg, setAgg] = useState<any[]>([]);
  console.log(agg);
  const fetchBlocks = async () => {
    const res = await BlockchainService.getBlocks();
    setBlocks(res.blocks);
    setAgg(res.aggregated);
  };

  useEffect(() => {
    fetchBlocks();
  }, []);
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

        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Votos"
          />
          <div role="tabpanel" className="tab-content p-6">
            <Aggregated cities={agg} />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Blocos"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-6 ">
            <div>
              <h1 className="mx-8 text-3xl font-bold my-4 text-slate-200">
                Blocos
              </h1>
              <Blocks blocks={blocks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
