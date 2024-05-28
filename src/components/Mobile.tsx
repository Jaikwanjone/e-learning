import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from ".";
import Cross from "../assets/Icons/Crosss.png";
import MenuBar from "../assets/Icons/MenuBar.png";

const Mobile = () => {
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="laptop:hidden z-20 relative">
      <img
        src={MenuBar}
        alt="menu bar "
        width={45}
        height={45}
        onClick={() => setOpen(true)}
      />
      <nav
        className={` fixed bottom-0 w-full h-[100vh] bg-orange-8 ${
          open ? "right-0" : "right-[-100%]"
        } pt-[100px] transition-all duration-300`}
      >
        <ul className="flex gap-6 items-center flex-col justify-center text-white-1 text-sm tablet:text-lg ">
          {navItems.map(({ lable, link }) => (
            <li key={lable}>
              <NavLink to={link} onClick={handleClose}>
                {lable}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className=" absolute top-[80px] right-[40px]"
          onClick={() => {
            setOpen(false);
          }}
        >
          <img src={Cross} alt="Cross" width={40} height={40} />
        </button>
      </nav>
    </div>
  );
};

export default Mobile;
