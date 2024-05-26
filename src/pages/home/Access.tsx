import True from "../../assets/Icons/True.png";
interface Prop {
  text: string;
}
const Access = ({ text }: Prop) => {
  return (
    <div className="w-full p-2 flex gap-2 rounded-lg items-center border  border-white-3">
      <img src={True} alt="True Image" width={25} />
      <p className=" text-grey-5">{text}</p>
    </div>
  );
};

export default Access;
