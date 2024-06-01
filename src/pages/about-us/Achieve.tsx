interface Props {
  title: string;
  text: string;
}
const Achieve = ({ title, text }: Props) => {
  return (
    <div className=" w-[100%] text-left flex-col justify-start">
      <h1 className=" laptop:text-4xl font-medium tablet:text-3xl text-xl my-3 ">
        {title}
      </h1>
      <p className="text-left">{text}</p>
    </div>
  );
};

export default Achieve;
