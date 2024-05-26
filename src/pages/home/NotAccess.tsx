import False from "../../assets/Icons/False.png";
interface Prop {
  text: string;
}
const NotAccess = ({ text }: Prop) => {
  return (
    <div className="w-full p-2 flex gap-2 rounded-lg items-center">
      <img src={False} alt="True Image" className=" w-[25px]" />
      <p className=" text-grey-5">{text}</p>
    </div>
  );
};

export default NotAccess;
