import React from "react";

interface SelectProps {
  options: string[];
  label: string;
  value: string;
  setValue: (val: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  setValue,
}) => {
  return (
    <label className="form-control w-full max-w-xs">
      <select
        className="select select-bordered select-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option selected>{label}</option>
        {options.map((o) => (
          <option>{o}</option>
        ))}
      </select>
    </label>
  );
};
