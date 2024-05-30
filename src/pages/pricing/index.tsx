import { useEffect, useState } from "react";
import { Monthly, monthly, yearly } from "../../components";
import PagesHead from "../../components/PagesHead";
import Faq from "../home/Faq";
import PlanCard from "../home/PlanCard";

const Pricing = () => {
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
    <div>
      <PagesHead
        title="Our Pricing"
        text="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <div className=" iPad:mt-10 mt-6 bg-white-5 w-[98%] h-[1px] mx-auto"></div>
      <div className="  container mx-auto  grid desktop:gap-[6rem] gap-[3rem] grid-cols-1 mt-10 iPad:mt-16">
        <div>
          <div className="bg-white-1 p-3 rounded-lg  mx-auto flex justify-center w-fit mt-3 tablet:mt-0">
            <button
              onClick={() => click === "yearly" && setClick("monthly")}
              className={` ${
                click === "monthly" ? "bg-orange-8 text-white-1" : "text-grey-5"
              } px-[24px] text-[15px] py-[12px] rounded-[5px] translate-x-1 transform ease-in delay-75`}
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
          </div>
          <div className="  bg-white-1 iPad:p-10 p-5 iPad:grid laptop:grid-cols-2 gap-6 rounded-lg iPad:mt-16 mt-10 mx-auto ">
            <PlanCard {...update.normal} />
            <PlanCard {...update.pro} />
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default Pricing;
