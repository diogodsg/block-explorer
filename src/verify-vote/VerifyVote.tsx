import React, { useState } from "react";
import { toast } from "react-toastify";
import { CandidateCard } from "../block-explorer/Blocks";

interface VerifyVoteFormProps {
  handleCheckVote: () => void;
}

const VerifyVoteForm: React.FC<VerifyVoteFormProps> = ({ handleCheckVote }) => {
  const [userId, setUserId] = useState<string>("");
  const [userPin, setUserPin] = useState<string>("");
  const [tsePin, setTsePin] = useState<string>("");

  const handleClick = () => {
    handleCheckVote();
    toast.error("Combinação de chaves incorreta");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card border bord-s-slate-1000 w-[600px] text-slate-500 p-4 px-8 mt-[-60px]">
        <h3 className="font-bold text-lg text-slate-700">Verificar Voto</h3>
        <div className="flex flex-col gap-2 my-4">
          <SecretInput
            label="ID do votante"
            placeholder="Digite seu ID"
            value={userId}
            setValue={setUserId}
          />
          <SecretInput
            label="PIN do votante"
            placeholder="Digite o PIN do votante"
            value={userPin}
            setValue={setUserPin}
          />
          <SecretInput
            label="PIN do TSE"
            placeholder="Digite o PIN do TSE"
            value={tsePin}
            setValue={setTsePin}
          />
        </div>
        <div className="flex mt-4 justify-end">
          <button
            className="btn btn-sm btn-success btn-outline"
            onClick={handleClick}
          >
            Verificar Voto
          </button>
        </div>
      </div>
    </div>
  );
};

enum Screens {
  Form,
  SeeVote,
}

export const VerifyVote = () => {
  const [activeScreen, setActiveScreen] = useState<Screens>(Screens.Form);

  const handleCheckVote = () => {
    setActiveScreen(Screens.SeeVote);
  };
  if (activeScreen === Screens.Form)
    return <VerifyVoteForm handleCheckVote={handleCheckVote} />;
  return <SeeVoteScreen handleReturn={() => setActiveScreen(Screens.Form)} />;
};

interface SecretInputProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (val: string) => void;
}

const SecretInput: React.FC<SecretInputProps> = ({
  label,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div>
      <div className="label">
        <span className="label-text font-bold">{label}</span>
      </div>
      <label className="input input-bordered flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="grow"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

interface SeeVoteProps {
  handleReturn: () => void;
}
const SeeVoteScreen: React.FC<SeeVoteProps> = ({ handleReturn }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card border bord-s-slate-1000 w-[600px] text-slate-500 p-4 px-8 mt-[-60px]">
        <div className="flex gap-4">
          <span onClick={handleReturn}>voltar</span>
          <h3 className="font-bold text-lg text-slate-700">Verificar Voto</h3>
        </div>
        <div className="flex flex-col items-center justify-center my-6 gap-4">
          <CandidateCard position="Vereador" number="12345" hash="afawfaf" />
          <CandidateCard position="Vereador" number="12345" hash="afawfaf" />
        </div>
      </div>
    </div>
  );
};
