export interface AchieveProp {
  icon: string;
  head: string;
  body: string;
}
const AchieveCard = ({ icon, head, body }: AchieveProp) => {
  return (
    <div className=" p-10 grid gap-5 w-full rounded-lg bg-white-1">
      <img src={icon} alt="" className="w-[45px]" />
      <h1 className=" text-2xl font-medium">{head}</h1>
      <p>{body}</p>
    </div>
  );
};

export default AchieveCard;
