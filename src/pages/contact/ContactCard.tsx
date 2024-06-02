interface Props {
  icon: string[];
}
const ContactCard = ({ icon }: Props) => {
  return (
    <div className="flex justify-center gap-3">
      {icon.map((item, i) => (
        <img src={item} alt="" key={i} className="cursor-pointer" />
      ))}
    </div>
  );
};

export default ContactCard;
