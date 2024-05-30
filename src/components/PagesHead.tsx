interface Props {
  title: string;
  text: string;
}
const PagesHead = ({ title, text }: Props) => {
  return (
    <div className=" container mx-auto grid iPad:grid-cols-2 laptop:gap-x-10  iPad:mt-16 mt-10 grid-cols-1 ">
      <h1 className=" text-4xl font-bold">{title}</h1>
      <p className=" text-left laptop:mt-0 mt-5">{text}</p>
    </div>
  );
};

export default PagesHead;
