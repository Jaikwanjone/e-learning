import PagesHead from "../../components/PagesHead";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <PagesHead
        title="Contact Us"
        text="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <div className="iPad:mt-10 mt-6 bg-white-5 w-[98%] h-[1px] mx-auto"></div>
      <div className="grid desktop:gap-[6rem] gap-[3rem] grid-cols-1 mt-10 iPad:mt-16">
        <div className="container  grid tablet:grid-cols-3 bg-white-1  mx-auto p-0 ">
          <div className=" tablet:p-8 p-5 rounded-lg tablet:col-span-2 border-r-2 border-white-3">
            <ContactForm />
          </div>
          <div className="   ">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
