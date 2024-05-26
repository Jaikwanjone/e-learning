import { Normal } from "../../components";
import Button from "../../components/Button";
import Access from "./Access";
import NotAccess from "./NotAccess";

const PlanCard = ({ plan, fee, access, notAccess }: Normal) => {
  return (
    <div className="w-full iPad:px-6 px-3  bg-white-3 iPad:py-8 py-4  rounded-lg iPad:mb-0 mb-5  ">
      <div className=" ">
        <h4 className=" bg-orange-3 w-full py-3 text-center font-medium rounded-md">
          {plan}
        </h4>
        <div className="flex text-center items-end justify-center py-5 mx-auto">
          <h1 className=" font-bold text-5xl text-center">${fee}</h1>
          <span>/month</span>
        </div>
        <div className="tablet:px-10 px-2 py-5 flex-col justify-center rounded-lg bg-white-1 ">
          <h4 className="w-full text-center">Available Features</h4>
          <div className="grid grid-cols-1 gap-3 pt-5">
            {access && access.map((item) => <Access key={item} text={item} />)}
            {notAccess &&
              notAccess.map((item) => <NotAccess key={item} text={item} />)}
          </div>
        </div>
      </div>
      {/* <Button
        lable="Get Started"
        className="min-w-full bg-orange-8  text-center rounded-b-lg"
      /> */}
      <div className="flex justify-center items-end">
        <Button
          lable="Get Start"
          className=" bg-orange-8 rounded-lg min-w-full text-white-1 rounded-t-sm  "
        />
      </div>
    </div>
  );
};

export default PlanCard;
