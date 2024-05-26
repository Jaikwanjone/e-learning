import { useEffect, useState } from "react";
import { NavLogo } from "../../components";

const Media = () => {
  const [visibleItems, setVisibleItems] = useState<number>();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1920) {
        setVisibleItems(NavLogo.length);
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(7);
      } else if (window.innerWidth >= 640) {
        setVisibleItems(6);
        // Show all items on screens 768px and wider
      } else {
        setVisibleItems(4); // Show only 5 items on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the correct state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ul className=" bg-white-1 p-4 flex justify-evenly gap-1 mx-auto  rounded-md min-w-full ">
      {NavLogo.slice(0, visibleItems).map(({ id, image }) => (
        <li
          key={id}
          className={`w-full laptop:py-4 tablet:px-5 px-2 py-1 flex justify-center mx-auto border-r-2 border-white-3`}
        >
          <img
            src={image}
            alt="Web Logo"
            className=" laptop:w-[95px] laptop:h-[40px] w-[65px]h-[25px]  "
          />
        </li>
      ))}
    </ul>
  );
};

export default Media;
