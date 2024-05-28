import { benefit } from "../../components";
import Button from "../../components/Button";

export interface common {
  title: string;
  text: string;
  lable: string;
  image: string[];
  time: string;
  level: string;
  teacher: string;
  Benefit: benefit[];
}
const Common = ({
  title,
  text,
  lable,
  image,
  time,
  level,
  teacher,
  Benefit,
}: common) => {
  return (
    <div className=" laptop:p-10 iPad:p-8 p-5 bg-white-1 rounded-xl  w-full">
      <div className="w-full  grid  gap-6">
        <div className=" tablet:flex justify-between items-center w-full tablet:flex-row flex-col">
          <div className="tablet:w-[70%] w-[100%] text-left flex-col justify-start">
            <h1 className=" laptop:text-4xl font-medium tablet:text-3xl text-xl my-3 ">
              {title}
            </h1>
            <p>{text}</p>
          </div>
          <Button lable={lable} className=" bg-white-3 mt-3 " />
        </div>
        <div className="grid grid-cols-3 iPad:gap-6 gap-3">
          {image.map((item: string) => (
            <img src={item} alt="" key={item} className=" rounded-lg w-full" />
          ))}
        </div>
        <div className="flex iPad:justify-between iPad:flex-row flex-col items-start my-8">
          <div className="flex gap-2 justify-center ">
            <Button lable={time} className=" shadow-sm " />
            <Button lable={level} className="shadow-sm" />
          </div>
          <h3 className="text-xl font-medium">{teacher}</h3>
        </div>
      </div>
      <div className=" w-full rounded-lg grid border border-white-4">
        <p className="text-lg font-semibold w-full p-4">Curriculm</p>
        {Benefit.map((item, index) => (
          <div
            key={index}
            className={`w-full laptop:py-4 tablet:px-5 px-2 py-1 grid tablet:grid-cols-5 grid-cols-1 border border-white-4  `}
          >
            <div
              className=" tablet:border-r-2 tablet:border-b-0
             border-b-2 border-white-3 grid  tablet:justify-center justify-start  gap-2 tablet:p-0 p-4 w-full"
            >
              <h1 className="font-bold laptop:text-7xl iPad:text-5xl text-4xl">
                01
              </h1>
              <p className="iPad:text-[18px] text-[16px] ">{item.first}</p>
            </div>
            <div
              className=" tablet:border-r-2 tablet:border-b-0
             border-b-2 border-white-3 grid tablet:justify-center justify-start gap-2 tablet:p-0 p-4 w-full "
            >
              <h1 className="font-bold laptop:text-7xl iPad:text-5xl text-4xl">
                02
              </h1>
              <p className="iPad:text-[18px] text-[16px] ">{item.second}</p>
            </div>
            <div
              className=" tablet:border-r-2 tablet:border-b-0
             border-b-2 border-white-3 grid  tablet:justify-center justify-start gap-2 tablet:p-0 p-4 w-full"
            >
              <h1 className="font-bold laptop:text-7xl iPad:text-5xl text-4xl">
                03
              </h1>
              <p className="iPad:text-[18px] text-[16px] ">{item.third}</p>
            </div>
            <div
              className=" tablet:border-r-2 tablet:border-b-0
             border-b-2 border-white-3 grid  tablet:justify-center justify-start gap-2 tablet:p-0 p-4 w-full"
            >
              <h1 className="font-bold laptop:text-7xl iPad:text-5xl text-4xl">
                04
              </h1>
              <p className="iPad:text-[18px] text-[16px] ">{item.fourth}</p>
            </div>
            <div className="   tablet:justify-center justify-start gap-2 tablet:p-0 p-4 w-full">
              <h1 className="font-bold laptop:text-7xl iPad:text-5xl text-4xl">
                05
              </h1>
              <p className="iPad:text-[18px] text-[16px] ">{item.fiveth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Common;
