import Button from "../../components/Button";
interface format {
  title: string;
  text: string;
}
const Format = ({ title, text }: format) => {
  return (
    <div className=" tablet:flex justify-between items-center w-full tablet:flex-row flex-col">
      <div className="tablet:w-[70%] w-[100%] text-left flex-col justify-start">
        <h1 className=" laptop:text-5xl font-medium tablet:text-3xl text-xl my-3 ">
          {title}
        </h1>
        <p>{text}</p>
      </div>
      <Button lable="View All" className=" bg-white-1 mt-3 " />
    </div>
  );
};

export default Format;
