import { useState } from "react";
import Plus from "../../assets/Icons/PLUS.png";
import Cross from "../../assets/Icons/cross.png";
import ToRight from "../../assets/Icons/toRight.png";
import { FAQs } from "../../components";
import Button from "../../components/Button";

const Faq = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const handleSelected = (id: number | null) => {
    const activeId = id === selectedId ? null : id;
    setSelectedId(activeId);
  };
  return (
    <div className="laptop:p-12 p-5 bg-white-1 grid grid-cols-1 desktop:grid-cols-5 gap-8 rounded-lg">
      <div className=" col-span-2">
        <div>
          <h1 className=" text-5xl font-medium mb-3">
            Frequently Asked Questions
          </h1>
          <p>
            Still you have any Question? Contack our team via
            support@skillbridge.com
          </p>
        </div>
        <div className="flex items-end mt-8">
          <Button lable="See All FAQ's" className=" p-3 rounded-md shadow-md" />
        </div>
      </div>
      <div className=" col-span-3 grid gap-5 ">
        {FAQs.map(({ id, text, mid }) => (
          <div className={` bg-white-1 `} key={id}>
            <div className={` tablet:p-7 p-4  rounded-lg shadow-md`}>
              <div
                className={`flex justify-between  items-center ${
                  selectedId === id ? "mb-5" : ""
                }`}
              >
                <h1>{text}</h1>
                <img
                  src={selectedId === id ? Cross : Plus}
                  alt=""
                  onClick={() => handleSelected(id)}
                  className="laptop:w-[35px] iPad:w-[35px] w-[25px] iPad:h-[35px] h-[25px] cursor-pointer"
                />
              </div>
              <div
                className={`${selectedId === id ? "" : "hidden"} grid gap-4`}
              >
                <div className=" w-full bg-white-5 h-[1px]"></div>
                <p className="my-4 font-normal  ">{mid}</p>
                <div className=" p-5 bg-white-3 flex justify-between rounded-lg items-end">
                  <p className=" text-grey-3">
                    Enrollment Process for Different Courses
                  </p>
                  <div>
                    <img
                      src={ToRight}
                      alt=""
                      className="iPad:w-[35px] w-[30px] iPad:h-[35px] h-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
