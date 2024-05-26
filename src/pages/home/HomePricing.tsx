import { useEffect, useState } from "react";
import { Monthly, monthly, yearly } from "../../components";
import PlanCard from "./PlanCard";

const HomePricing = () => {
  const [update, setUpdate] = useState<Monthly>(monthly);
  const [click, setClick] = useState<string>("monthly");
  useEffect(() => {
    if (click === "monthly") {
      setUpdate(monthly);
    } else {
      setUpdate(yearly);
    }
  }, [click]);

  return (
    <div className="">
      <div className=" tablet:flex justify-between items-center w-full tablet:flex-row flex-col">
        <div className="tablet:w-[70%] w-[100%] text-left flex-col justify-start">
          <h1 className=" laptop:text-5xl font-medium tablet:text-3xl text-xl my-3 ">
            Our Pricing
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="bg-white-1 p-3 rounded-lg iPad:mx-0 mx-auto flex tablet:justify-end justify-center w-fit mt-3 tablet:mt-0">
          <button
            onClick={() => click === "yearly" && setClick("monthly")}
            className={` ${
              click === "monthly" ? "bg-orange-8 text-white-1" : "text-grey-5"
            } px-[24px] text-[15px] py-[12px] rounded-[5px] translate-x-1 transform ease-in delay-150`}
          >
            Monthly
          </button>
          <button
            onClick={() => click === "monthly" && setClick("yearly")}
            className={`${
              click === "yearly" ? "bg-orange-8 text-white-1" : "text-grey-5"
            } px-[24px] text-[15px] py-[12px] h-fit cursor-pointer rounded-[5px] transform ease-linear delay-100`}
          >
            Yearly
          </button>
          {/* <Button
            lable="Monthly"
            onClick={() => click === "yearly" && setClick("monthly")}
            // click === "yearly" && setClick("monthly")
            className={`$
              click === "monthly" ? " bg-orange-8 text-white-1 : ""
            } `}
          />
          <Button
            lable="Yearly"
            onClick={() => click === "monthly" && setClick("yearly")}
            className={`${
              click === "yearly" ? " bg-orange-8 text-white-1" : ""
            }`}
          /> */}
        </div>
      </div>
      <div className="  bg-white-1 iPad:p-10 p-5 iPad:grid laptop:grid-cols-2 gap-6 rounded-lg iPad:mt-16 mt-10 mx-auto ">
        <PlanCard {...update.normal} />
        <PlanCard {...update.pro} />
      </div>
    </div>
  );
};

export default HomePricing;
