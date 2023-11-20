import { useLayoutEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
type Props = {
  type: "notification" | "normal" | "quantity";
  label?: string;
  labelColor?: string;
  children?: React.ReactNode;
};

export const Dropdown = ({ type, children, label, labelColor }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const show = useRef(null);
  const dropdown = useRef(null);

  const handle = () => {
    setIsShow(isShow ? false : true);
  };
  useOnClickOutside(show, () => setIsShow(false));
  useLayoutEffect(() => {
    if (isShow) {
      gsap.to(dropdown.current, {
        opacity: 1,
        y: 0,
        duration: 0.15,
      });
    } else {
      gsap.to(dropdown.current, { opacity: 0, y: 15, duration: 0.15 });
    }
  }, [isShow]);
  return (
    <div
      className={`relative text-[${labelColor}] hover:!text-[#23262F] transition-hover duration-300 ease-in-out cursor-pointer`}
      onClick={handle}
      ref={show}
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

      <div
        className="absolute top-[30px] left-0 shadow-normal p-4 rounded-2xl transition duration-300 ease-in-out opacity-0"
        ref={dropdown}
      >
        {children}
      </div>
    </div>
  );
};
