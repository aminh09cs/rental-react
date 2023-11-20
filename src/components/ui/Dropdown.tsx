import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {
  type: "notification" | "normal" | "quantity";
  label?: string;
  labelColor?: string;
  children?: React.ReactNode;
};

export const Dropdown = ({ type, children, label, labelColor }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const dropdown = useRef(null);

  useOnClickOutside(dropdown, () => setIsShow(false));
  return (
    <div
      className={`relative text-[${labelColor}] hover:!text-[#23262F] transition-hover duration-300 ease-in-out cursor-pointer`}
      onClick={() => setIsShow(isShow ? false : true)}
      ref={dropdown}
    >
      {type === "normal" && (
        <div className="flex items-center gap-x-2">
          <div className="font-bold">{label}</div>
          <FontAwesomeIcon
            icon="chevron-down"
            className={`${
              isShow ? "rotate-180" : "rotate-0"
            } transition-rotate duration-300 ease-in-out `}
          />
        </div>
      )}
      {isShow && (
        <div className="absolute top-[30px] left-0 shadow-normal p-4 rounded-2xl">
          {children}
        </div>
      )}
    </div>
  );
};
