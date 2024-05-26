import { Testi } from "../../components";
import Button from "../../components/Button";

const Testimonials = ({ name, image, review }: Testi) => {
  return (
    <div className=" bg-white-1 rounded-xl py-3  w-full">
      <div className=" laptop:p-10 iPad:p-8 p-5  ">
        <p className="iPad:mb-4 mb-2 border-b-grey-1 h-[60%]">{review}</p>
      </div>
      <div className="h-[1px] bg-white-3 w-100%"></div>
      <div className=" bg-white-2 iPad:py-3  py-2 flex justify-between h-auto px-4 ">
        <div className=" text-center flex items-center justify-start gap-2 ">
          <img src={image} alt="" />
          <h3 className="text-xl font-medium">{name}</h3>
        </div>
        <div className="flex items-center">
          <Button lable="Read Full Stroy" className="py-4  bg-white-3 " />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
{
  /* */
  // <div className=" laptop:p-10 iPad:p-8 p-5 w-full  bg-white-1 rounded-xl  ">
  //   <p className="iPad:mb-4 mb-2 border-b-grey-1 h-[60%]">{review}</p>
  //   <div className="h-[1px] bg-white-3 w-100%"></div>
  //   <div className=" bg-white-2 iPad:py-3  py-2 flex justify-between h-auto px-4 ">
  //     <div className=" text-center flex items-center justify-start gap-2 ">
  //       <img src={image} alt="" />
  //       <h3 className="text-xl font-medium">{name}</h3>
  //     </div>
  //     <div className="flex items-center">
  //       <Button lable="Read Full Stroy" className="py-4  bg-white-3 " />
  //     </div>
  //   </div>
  // </div>;
}
