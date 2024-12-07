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
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Download"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-6 ">
            <div>
              <h1 className="text-3xl font-bold my-4 text-slate-200">
                Se torne um nó
              </h1>
              <span className="mb-8">
                Junte-se a nós em uma rede de blockchain para transformar a
                votação! Como um nó, você garantirá segurança, transparência e
                integridade, tornando o processo eleitoral mais justo e
                descentralizado. Faça parte dessa revolução pela confiança no
                voto!
              </span>
              <div className="flex flex-col mt-8">
                <a
                  className="link"
                  href="https://drive.google.com/uc?export=download&id=1J-Sk-ylAl7PeJMpslqbsGWr2H0YDuvOG"
                >
                  Aplicativo Windows
                </a>
                <a
                  className="link"
                  href="https://drive.google.com/uc?export=download&id=1QbvCM8gj2MKMgMA8MtQJce1912XAOzsp"
                >
                  Aplicativo Linux
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
