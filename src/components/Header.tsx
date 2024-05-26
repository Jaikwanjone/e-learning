import { NavLink } from "react-router-dom";
import { navItems } from ".";
import Logo from "../assets/Icons/Logo.png";
import RightArrow from "../assets/Icons/rightArrow.png";
import Button from "./Button";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <header className=" px-3 pt-3 pb-2 shadow-sm sticky">
      <div className="h-[48px] tablet:h-[56px] bg-orange-8  mx-auto laptop:w-[calc(100vw-50px)] rounded-[8px] tablet:mt-0 mt-4 shadow-sm">
        <div className="h-full flex items-center justify-center gap-3">
          <p className="text-sm tablet:text-lg text-white-1 font-medium">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
          <img
            src={RightArrow}
            alt="rightarrow"
            className="w-[20px] h-[20px] tablet:w-[24px] tablet:h-[24px]"
          />
        </div>
      </div>

      <nav className="mx-2 tablet:mx-8 laptop:mx-14 py-4 flex justify-between">
        <div className="flex items-center gap-10">
          <img
            src={Logo}
            alt="logo"
            className="laptop:w-[45px] laptop:h-[45px] tablet:w-[40px] tablet:h-[40px] w-[38px] h-[38px] "
          />
          <ul className=" hidden laptop:flex items-center gap-7">
            {navItems.map(({ lable, link }) => (
              <NavLink
                key={lable}
                to={link}
                className="tablet:text-lg laptop:text-xl text-sm"
              >
                {lable}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Button lable="Log In" className=" bg-white-1" />
          <Button lable="Sign Up" className={" bg-orange-8 text-white-1"} />
          <Mobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
