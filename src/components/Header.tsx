import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from ".";
import Logo from "../assets/Icons/Logo.png";
import RightArrow from "../assets/Icons/rightArrow.png";
import Button from "./Button";
import Mobile from "./Mobile";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setIsHeaderHidden(true);
    } else {
      // Scrolling up
      setIsHeaderHidden(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      // className={` ${isHidden ? "block" : "hidden"}`}
      className={` bg-white-1 px-3 pt-3 pb-2 sticky z-30 shadow-md  ${
        isHeaderHidden
          ? " top-[-60px] tablet:top-[-68px] "
          : "top-[-1px] shadow"
      } transition-all duration-700 `}
    >
      <div
        className={`h-[48px] tablet:h-[56px] bg-orange-8  mx-auto laptop:w-[calc(100vw-50px)] rounded-[8px]  shadow-sm `}
      >
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
                onClick={scrollToTop}
                className="tablet:text-lg laptop:text-xl text-sm"
              >
                {lable}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/login">
            <Button lable="Log In" className=" bg-white-1" />
          </Link>

          <Link to="/signup">
            <Button lable="Sign Up" className={" bg-orange-8 text-white-1"} />
          </Link>

          <Mobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
