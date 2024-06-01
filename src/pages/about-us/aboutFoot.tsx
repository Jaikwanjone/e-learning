import Button from "../../components/Button";

const AboutFoot = () => {
  return (
    <div className=" p-10 bg-white-1 rounded-lg   tablet:flex justify-between w-full tablet:flex-row flex-col items-center ">
      <div className="tablet:max-w-[60%]">
        <div className=" flex text-wrap">
          <h1 className="laptop:text-4xl iPad:text-3xl text-2xl font-bold">
            <span className="text-orange-8 ">Together</span>,let's shape the
            future of digital innovation
          </h1>
        </div>
        <p className="mt-6">
          Join us on this learning journey and unlock you potential in design
          and development
        </p>
      </div>
      {/* <div className=" absolute tablet:top-0 bottom-[-50px] desktop:right-[17rem] laptop:right-[10rem] right-0 z-10 object-center ">
        <img src={Abstract} alt="" className=" max-w-[300px] " />
      </div> */}
      <div className="z-20 tablet:mt-0 mt-6">
        <Button lable="Join Now" className=" bg-orange-8 text-white-1" />
      </div>
    </div>
  );
};

export default AboutFoot;
