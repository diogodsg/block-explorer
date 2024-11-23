import { useState } from "react";
import { UploadFile } from "./UploadFile";
import { MdFileUpload } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export const UploadBlock = () => {
  const [file, setFile] = useState<File | null>(null);
  console.log(file);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card border bord-s-slate-1000 w-[600px] text-slate-500 p-4 mt-[-60px]">
        <h3 className="font-bold text-lg text-slate-700">
          Subir Arquivo de Seção
        </h3>
        <hr className="my-2" />
        <UploadFile file={file} setFile={setFile} />
        {file && (
          <div className="mt-4 font-bold text-slate-700">
            Arquivo de Seção
            <div className="card border bord-s-slate-1000  p-4 mt-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <FaFileArchive className="text-[30px]" />
                  </div>
                  <div>
                    <div>{file.name}</div>
                    <div className="font-normal">{file.size} bytes</div>
                  </div>
                </div>
                <div className="flex items-center justify-center mr-4">
                  <button onClick={() => setFile(null)}>
                    <FaRegTrashAlt className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <button className="btn  btn-sm mt-4 w-full" disabled={!Boolean(file)}>
          <MdFileUpload /> Subir Arquivo
        </button>
      </div>
    </div>
  );
};
