import { useLayoutEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { gsap } from "gsap";

type Props = {
  className?: string;
  prevIcon?: string;
  afterIcon?: string;
  label?: string;
  labelColor?: string;
  children?: React.ReactNode;
};

export const Dropdown = ({
  className,
  children,
  label,
  labelColor,
  prevIcon,
  afterIcon,
}: Props) => {
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
      className={`${className} relative text-[${labelColor}] hover:!text-[#23262F] transition-hover duration-300 ease-in-out cursor-pointer`}
      onClick={handle}
      ref={show}
    >
      <div className="flex items-center gap-x-2">
        {prevIcon && <FontAwesomeIcon icon={`${prevIcon}` as IconProp} />}
        <div className="font-bold">{label}</div>
        {afterIcon && (
          <FontAwesomeIcon
            icon={`${afterIcon}` as IconProp}
            className={`${
              isShow ? "rotate-180" : "rotate-0"
            } transition-rotate duration-300 ease-in-out `}
          />
        )}
      </div>

      <div
        className="absolute top-[calc(100%+20px)] left-0 shadow-normal p-4 rounded-2xl transition duration-300 ease-in-out opacity-0"
        ref={dropdown}
      >
        {children}
      </div>
    </div>
  );
};
