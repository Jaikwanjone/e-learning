import Call from "../assets/Icons/Call.png";
import Email from "../assets/Icons/Email.png";
import Facebook from "../assets/Icons/Facebook.png";
import Linkin from "../assets/Icons/Linkin.png";
import Location from "../assets/Icons/Location.png";
import Logo from "../assets/Icons/Logo.png";
import Twiter from "../assets/Icons/Twiter.png";

function Footer() {
  return (
    <div className="  bg-white-1 py-16 iPad:mt-16 mt-10 w-full ">
      <div className="container mx-auto grid grid-cols-1 iPad:grid-cols-6">
        <div className=" col-span-3">
          <img src={Logo} alt="" width={48} height={48} />
          <div className="flex flex-col gap-3 items-start mt-5">
            <div className="flex gap-2">
              <img src={Email} alt="" />
              <p>jaikwanpha@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <img src={Call} alt="" />
              <p>0840961890</p>
            </div>
            <div className="flex gap-2">
              <img src={Location} alt="" />
              <p>Thailand</p>
            </div>
          </div>
        </div>
        <div className=" col-span-3 laptop:grid-flow-col grid-flow-row grid gap-3 laptop:mt-0 mt-5">
          <div className=" grid grid-cols-2 gap-4">
            <ul className="flex flex-col gap-4">
              <li className=" text-lg font-semibold mb-1">Home</li>
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimional</li>
              <li>Our FAQ</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className=" text-lg font-semibold mb-1">About Us</li>
              <li>Company</li>
              <li>Achievements</li>
              <li>Our Goals</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold mb-5">Social Profile</h1>
            <div className="flex gap-4">
              <img src={Facebook} alt="" />
              <img src={Twiter} alt="" />
              <img src={Linkin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
