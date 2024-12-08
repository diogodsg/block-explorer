import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { IoAddCircleOutline } from "react-icons/io5";

interface UploadFileProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export const UploadFile: React.FC<UploadFileProps> = ({ file, setFile }) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    disabled: file ? true : false,
  });
  return (
    <div>
      <div
        {...getRootProps({ className: file ? "dropzone disabled" : "" })}
        className="border-dotted border-2 border-slate-500 rounded-lg flex items-center justify-center p-8 hover:cursor-pointer"
      >
        <input {...getInputProps()} />
        {file ? (
          <p>{file.name}</p>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <IoAddCircleOutline className="text-[36px]" />
            <p>Arraste o arquivo ou clique para escolher</p>
          </div>
        )}
      </div>
    </div>
  );
};
