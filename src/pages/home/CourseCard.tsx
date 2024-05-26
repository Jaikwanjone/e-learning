import { CourseProp } from "../../components";
import Button from "../../components/Button";

const CourseCard = ({
  image,
  time,
  level,
  teacher,
  CourseType,
  explaination,
}: CourseProp) => {
  return (
    <div className=" laptop:p-10 iPad:p-8 p-5 bg-white-1 rounded-xl  w-full">
      <div className="w-full">
        <img src={image} alt="" className=" rounded-lg" />
        <div className="my-10">
          <div className="flex iPad:justify-between iPad:flex-row flex-col items-start my-8">
            <div className="flex gap-2 justify-center ">
              <Button lable={time} className=" shadow-sm " />
              <Button lable={level} className="shadow-sm" />
            </div>
            <h3 className="text-xl font-medium">{teacher}</h3>
          </div>
          <div>
            <h3 className="text-2xl font-medium ">{CourseType}</h3>
            <p className="mt-5">{explaination}</p>
          </div>
        </div>

        <div className="flex justify-center items-end">
          <Button
            lable="Get it Now"
            className=" bg-white-3 rounded-lg min-w-full py-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
