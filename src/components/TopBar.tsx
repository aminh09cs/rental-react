import { Dropdown } from "../components/ui/Dropdown";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

export const TopBar = () => {
  interface EssentialLink {
    label: string;
    path: string;
    icon: ReactElement<any, any>;
  }

  const essentialLinks: EssentialLink[] = [
    {
      label: "Stays",
      path: "stays",
      icon: <FontAwesomeIcon icon="envelope" className="w-5" />,
    },
    {
      label: "Flights",
      path: "flights",
      icon: <FontAwesomeIcon icon="plane-departure" className="w-5" />,
    },
    {
      label: "Things",
      path: "things",
      icon: <FontAwesomeIcon icon="house-chimney" className="w-5" />,
    },
    {
      label: "Cars",
      path: "cars",
      icon: <FontAwesomeIcon icon="car" className="w-5" />,
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-x-20 px-[20px] py-10">
        <div className="flex gap-x-2">
          <img src={logo} alt="logo" />
          <p className="text-2xl font-bold ">fleet</p>
        </div>
        <Dropdown type="normal" label="Travelers" labelColor="#777E90">
          {essentialLinks.map((item, index) => (
            <div
              key={index}
              className="flex gap-x-2 items-center w-[250px] h-[50px] px-5 text-[#777E90] hover:!text-[#23262F] transition-hover duration-300 ease-in-out cursor-pointer"
            >
              {item.icon}
              <p className=" font-bold"> {item.label}</p>
            </div>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};
