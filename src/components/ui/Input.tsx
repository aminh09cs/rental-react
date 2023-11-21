import React, { ReactElement } from "react";

interface InputProps {
  id: string;
  onChange: (e: any) => void;
  value: string;
  label: string;
  type: string;
  error?: string;
  afterIcon?: ReactElement<any, any>;
}

export const Input = ({
  id,
  onChange,
  value,
  label,
  type,
  error,
  afterIcon,
}: InputProps) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        id={id}
        type={type}
        className={`
          border-[2px] 
          border-[#e6e8ec] 
          rounded-2xl 
          p-4
          w-full
          text-[14px]
          text-[#6f7479]
          focus:outline-none
          peer
        `}
        placeholder=""
      />
      <label
        htmlFor={id}
        className="
          absolute
          text-zinc-400
          duration-150
          transition
          -translate-y-3
          scale-75
          top-4
          left-4
          origin-left
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
      >
        {label}
      </label>

      {error && <p className="text-red-500 text-xs mt-1 pl-4">{error}</p>}
    </div>
  );
};
