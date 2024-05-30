import { Contacts } from "../../components";
import ContactCard from "./ContactCard";

const ContactInfo = () => {
  return (
    <div className="tablet:p-8 p-5 tablet:col-span-1  w-full grid gap-6 mx-auto  ">
      {Contacts.map((item, i) => (
        <div className=" p-4 rounded-md border border-white-4 bg-white-2 flex-col items-center ">
          <ContactCard icon={item.icon} />
          <p className=" mt-3 text-center">{item.subject}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
