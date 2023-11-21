import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnClickOutside } from "usehooks-ts";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const modal = useRef(null);
  useOnClickOutside(modal, () => onClose());
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed flex justify-center items-center top-0 left-0 p-5 w-screen h-screen bg-[#1718184d]">
        <div
          className="relative w-[600px] bg-[#FCFCFD] rounded-[16px]"
          ref={modal}
        >
          <div className="px-[60px] py-[72px]">{children}</div>
          <FontAwesomeIcon
            icon="xmark"
            className="w-4 h-4 p-2 rounded-[50%] text-[#777E90] bg-[#ffffff] absolute top-[-16px] right-[-16px] shadow-normal hover:shadow-normal-cover cursor-pointer"
            onClick={() => onClose()}
          />
        </div>
      </div>
    </>
  );
};
