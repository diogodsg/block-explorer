import { useState } from "react";
import { UploadFile } from "./UploadFile";
import { MdFileUpload } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { BlockchainService } from "../api/block";
import { toast } from "react-toastify";

export const UploadBlock = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadSectionData = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const res = await BlockchainService.uploadSectionData(file);
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Erro ao subir bloco");
    }
    setFile(null);
    setLoading(false);
  };

  return (
    <div className="card border bord-s-slate-300 w-[600px]  p-4">
      <h3 className="font-bold text-lg ">Subir Arquivo de Seção</h3>
      <hr className="my-2" />
      <UploadFile file={file} setFile={setFile} />
      {file && (
        <div className="mt-4 font-bold ">
          Arquivo de Seção
          <div className="card border bord-s-slate-500  p-4 mt-2">
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
      <button
        className="btn  btn-sm mt-4 w-full"
        disabled={!Boolean(file) || loading}
        onClick={uploadSectionData}
      >
        <MdFileUpload /> Subir Arquivo
      </button>
    </div>
  );
};
