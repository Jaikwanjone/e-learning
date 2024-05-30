interface Props {
  icon: string[];
}
const ContactCard = ({ icon }: Props) => {
  return (
    <div className="flex justify-center gap-3">
      {icon.map((item, i) => (
        <img src={item} alt="" />
      ))}
    </div>
  );
};

export default ContactCard;
