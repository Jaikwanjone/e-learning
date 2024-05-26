import { benefitsItems } from "../../components";
const BenefitCard = ({ id, title, text, image }: benefitsItems) => {
  return (
    <div className=" laptop:p-10 iPad:p-8 p-5 bg-white-1 rounded-xl  w-full">
      <div className="flex justify-end">
        <h1 className=" font-bold laptop:text-7xl iPad:text-5xl text-4xl">
          {id}
        </h1>
      </div>
      <div className=" laptop:mt-10 iPad:mt-8 mt-5">
        <h3 className="iPad:text-2xl text-xl font-medium ">{title}</h3>
        <p className="mt-2">{text}</p>
      </div>
      <div className="laptop:mt-10 iPad:mt-8 mt-5  flex justify-end">
        <img src={image} alt="topleft iocn" />
      </div>
    </div>
  );
};

export default BenefitCard;
