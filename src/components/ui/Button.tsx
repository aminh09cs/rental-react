import { ReactElement } from "react";

type Props = {
  label: string;
  prevIcon?: ReactElement<any, any>;
  afterIcon?: ReactElement<any, any>;
};

export const Button = ({ label, prevIcon, afterIcon }: Props) => {
  return (
    <button className="rounded-2xl border-2  border-[#777E9080] text-[#23262F] bg-[#ffffff] hover:text-[#ffffff] hover:bg-[#23262F] hover:border-[#23262F] transition-all duration-300 ease-in-out font-bold px-4 py-3">
      <div>
        {prevIcon}
        <p>{label}</p>
        {afterIcon}
      </div>
    </button>
  );
};
