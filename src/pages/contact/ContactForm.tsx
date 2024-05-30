import Button from "../../components/Button";

const ContactForm = () => {
  return (
    <div className=" grid gap-3 ">
      <div className="grid tablet:grid-cols-2 gap-5">
        <div>
          <h4 className=" text-xl font-medium ">First Name</h4>
          <input
            placeholder="Enter  first Name"
            type="text"
            className="p-3 bg-white-2 border border-white-3 mt-3 w-full rounded-md outline-none"
          />
        </div>
        <div>
          <h4 className=" text-xl font-medium ">Last Name</h4>
          <input
            placeholder="Enter  Last Name"
            type="text"
            className="p-3 bg-white-2 border border-white-3 mt-3 w-full rounded-md outline-none"
          />
        </div>
      </div>
      <div className="grid tablet:grid-cols-2 gap-5">
        <div>
          <h4 className=" text-xl font-medium "> Email</h4>
          <input
            placeholder="Enter your Email"
            type="email"
            className="p-3 bg-white-2 border border-white-3 mt-3 w-full rounded-md outline-none"
          />
        </div>
        <div>
          <h4 className=" text-xl font-medium ">Phone</h4>
          <input
            placeholder="Enter Phone number"
            type="number"
            className="p-3 bg-white-2 border border-white-3 mt-3 w-full rounded-md outline-none"
          />
        </div>
      </div>
      <div>
        <h4 className=" text-xl font-medium ">Subject</h4>
        <input
          placeholder="Enter your Subject"
          type="text"
          className="p-3 bg-white-2 border mt-3  border-white-3 w-full rounded-md outline-none"
        />
      </div>
      <div>
        <h4 className=" text-xl font-medium ">Message</h4>
        <textarea
          placeholder="Enter your Message"
          className="border w-full desktop:py-[24px] mt-3  desktop:px-[20px] p-[20px] border-white-5 rounded-md shadow-sm text-grey-3"
          rows={4}
        />
      </div>
      <Button
        lable="Send Your Messages"
        className=" bg-orange-8 text-white-1 mx-auto flex justify-center "
      />
    </div>
  );
};

export default ContactForm;
