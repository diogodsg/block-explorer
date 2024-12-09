import { useEffect, useState } from "react";
import { BlockchainService } from "../api/block";
import { Blocks } from "./Blocks";
import { Aggregated } from "./Aggregated";
import { DownloadApp } from "../download-app/DownloadApp";
import { UploadBlock } from "../upload-block/UploadBlock";
import { VerifyVote } from "../verify-vote/VerifyVote";

export const BlockExplorer = () => {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [agg, setAgg] = useState<any[]>([]);
  const [_, setCurrentTheme] = useState<string>("cupcake");

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    setCurrentTheme(currentTheme as string);
    const newTheme = currentTheme === "cupcake" ? "dark" : "cupcake";
    htmlElement.setAttribute("data-theme", newTheme);
  }
  const fetchBlocks = async () => {
    const res = await BlockchainService.getBlocks();
    setBlocks(res.blocks);
    setAgg(res.aggregated);
  };

  useEffect(() => {
    fetchBlocks();
  }, []);
  return (
    <div className=" flex justify-center mb-16 ">
      <div className="w-[860px]">
        <div className="m-8 mt-2 flex items-center justify-between">
          <h1 className="text-[48px]">
            <b>
              BLOCKCH<span className="text-emerald-700">URNA</span>
            </b>{" "}
            <span className="text-3xl mx-4">Block Explorer</span>
          </h1>
          <div className="flex justify-end mt-4 items-center gap-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onClick={toggleTheme}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>

        <div role="tablist" className="tabs tabs-bordered w-full">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab w-[500px]"
            aria-label="Votos"
            defaultChecked
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
          />
          <div role="tabpanel" className="tab-content p-6 ">
            <div>
              <h1 className="mx-8 text-3xl font-bold my-4">Blocos</h1>
              <Blocks blocks={blocks} />
            </div>
          </div>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Download"
          />
          <div role="tabpanel" className="tab-content p-6 ">
            <DownloadApp />
          </div>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Upload"
          />
          <div role="tabpanel" className="tab-content p-6 ">
            <UploadBlock />
          </div>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Verify"
          />
          <div role="tabpanel" className="tab-content p-6 ">
            <VerifyVote />
          </div>
        </div>
      </div>
    </div>
  );
};
