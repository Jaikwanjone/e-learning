import Abstract from "../../assets/Icons/AbstractLine.png";
import Flash from "../../assets/Icons/Flash.png";
import Button from "../../components/Button";

const HomeIntro = () => {
  return (
    <div className=" mx-auto grid grid-cols-1 ">
      <div className="flex teblet:gap-2  gap-1 static shadow-sm tablet:p-2   justify-center items-center mx-auto  z-10 ">
        <div className=" bg-orange-3 tablet:p-3 p-1 rounded-md">
          <img
            src={Flash}
            alt="flash"
            className=" tablet:w-[38px] w-[30px] tablet:h-[38px]  h-[30px]  "
          />
        </div>
        <h1 className=" text-orange-8 laptop:text-5xl tablet:text-3xl text-lg font-bold">
          Unlock
        </h1>
        <h1 className=" laptop:text-5xl tablet:text-4xl text-lg font-bold">
          Your Creative Potintial
        </h1>
        <img
          src={Abstract}
          alt="Abstract"
          className="absolute tablet:w-[50px]w-[40px] tablet:h-[50px] h-[40px] tablet:top-[-33px] top-[-28px] tabelt:left-[-30px] left-[-25px]"
        />
      </div>
      <div className="mx-auto text-center my-4">
        <h1 className="laptop:text-3xl tablet:text-2xl text-xl font-medium ">
          with Online Design and Development Courses.
        </h1>
        <p className="mt-2">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
      <div className="mx-auto my-4 flex gap-3">
        <Button
          lable="Explore Courses"
          className=" bg-orange-8 text-white-1 py-3"
        />
        <Button lable="View Pricing" className=" bg-white-1 py-3" />
      </div>
    </div>
  );
};

export default HomeIntro;
