import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModal } from "../hooks/useModal";
import { SignIn } from "../components/modals/SignIn";
import {
  useLocation,
  useNavigate,
  Location,
  NavigateFunction,
} from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Button } from "./ui/Button";
import { Dropdown } from "./ui/Dropdown";

export const TopBar = () => {
  interface EssentialLink {
    label: string;
    path: string;
    icon: ReactElement<any, any>;
  }
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const essentialLinks: EssentialLink[] = [
    {
      label: "Stay",
      path: "/",
      icon: <FontAwesomeIcon icon="envelope" className="w-5" />,
    },
    {
      label: "Flight",
      path: "/flight",
      icon: <FontAwesomeIcon icon="plane-departure" className="w-5" />,
    },
    {
      label: "Thing",
      path: "/thing",
      icon: <FontAwesomeIcon icon="house-chimney" className="w-5" />,
    },
    {
      label: "Car",
      path: "/car",
      icon: <FontAwesomeIcon icon="car" className="w-5" />,
    },
  ];
  //add sign in
  const isOpen = useModal((state) => state.isOpen);
  const onOpen = useModal((state) => state.onOpen);
  const onClose = useModal((state) => state.onClose);

  return (
    <div>
      <div className="flex justify-between items-center w-full px-8 py-6 lg:px-20 transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-x-10">
          <div className="flex gap-x-2">
            <img src={logo} alt="logo" />
            <p className="text-2xl font-bold ">fleet</p>
          </div>
          <Dropdown
            className="hidden md:block"
            afterIcon="chevron-down"
            label="Travelers"
            labelColor="#777E90"
          >
            {essentialLinks.map((item, index) => (
              <div
                key={index}
                className={`flex gap-x-2 items-center w-[250px] h-[50px] px-5 text-[#777E90] rounded-2xl  transition-hover duration-300 ease-in-out cursor-pointer 
                ${
                  item.path === location.pathname
                    ? "bg-[#23262F] text-white"
                    : ""
                }
                ${
                  item.path !== location.pathname ? "hover:!text-[#23262F]" : ""
                }
                `}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
                <p className=" font-bold"> {item.label}</p>
              </div>
            ))}
          </Dropdown>
        </div>
        <div className="flex items-center gap-x-10 ">
          <p
            className="text-[#777E90] hover:!text-[#23262F] font-bold transition-hover duration-300 ease-in-out cursor-pointer hidden lg:block"
            onClick={() => navigate("/support")}
          >
            Support
          </p>
          <Dropdown
            className="hidden md:block "
            prevIcon="globe"
            label="Language"
            labelColor="#777E90"
          >
            You can't choose another language
          </Dropdown>
          <Button label="List your property" className="hidden md:block" />
          <FontAwesomeIcon
            icon={["far", "user"]}
            className="w-5 h-5 p-2  border bg-[#58C27D] text-white rounded-[50%] cursor-pointer"
            onClick={() => onOpen()}
          />
        </div>
      </div>
      <SignIn isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
