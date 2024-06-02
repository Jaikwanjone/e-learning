import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/Icons/Google.png";
import ToLeft from "../../assets/Icons/ToLeftArrow.png";
import ToRight from "../../assets/Icons/ToRightArrow.png";
import TopLeft from "../../assets/Icons/ToTopLeft.png";
import { Testimonal } from "../../components";
import Button from "../../components/Button";
import Testimonials from "../home/Testimonials";

const LoginPage = () => {
  const [selectedId, setSeletcedId] = useState<number>(1);
  const SelectedTesti = Testimonal.filter((item) => item.id === selectedId);
  useEffect(() => {}, [selectedId]);

  return (
    <div className="  container mx-auto mt-16 grid tablet:grid-flow-col tablet:grid-cols-5  desktop:gap-[6rem] gap-[3rem] ">
      <div className=" tablet:col-span-3 w-full grid gap-6">
        <div className="w-[100%] text-left flex-col justify-start">
          <h1 className=" laptop:text-4xl font-medium tablet:text-2xl text-xl my-3 ">
            Students Testimonials
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div>
          {SelectedTesti &&
            SelectedTesti.map(({ name, image, review }) => (
              <Testimonials
                name={name}
                image={image}
                review={review}
                key={name}
              />
            ))}
          <div className="flex justify-end items-center mt-4 gap-3">
            <img
              src={ToLeft}
              alt=""
              onClick={(evt) =>
                SelectedTesti[0].id === 1
                  ? setSeletcedId(4)
                  : setSeletcedId(selectedId - 1)
              }
              className=" w-[45px] cursor-pointer"
            />
            <img
              src={ToRight}
              alt=""
              onClick={(evt) =>
                SelectedTesti[0].id === 4
                  ? setSeletcedId(1)
                  : setSeletcedId(selectedId + 1)
              }
              className=" w-[45px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className=" tablet:col-span-2 w-full bg-white-1  rounded-md tablet:p-8 p-5">
        <div className="flex justify-center flex-col items-center gap-2">
          <h1 className="laptop:text-4xl text-3xl font-semibold">Login</h1>
          <p>Welcom back! Please login to access your account</p>
        </div>
        <div className="grid gap-5">
          <div className="flex flex-col gap-2">
            <div className="mt-3">
              <label className=" text-lg font-medium ">Email</label>

              <input
                placeholder="Enter your Email"
                type="email"
                className="p-3 bg-white-2 border mt-3  border-white-3 w-full rounded-md outline-none"
              />
            </div>
            <div className="">
              <label className=" text-lg font-medium ">Password</label>

              <input
                placeholder="Enter your Password"
                type="password"
                className="p-3 bg-white-2 border mt-3  border-white-3 w-full rounded-md outline-none"
              />
            </div>
            <p className="text-end mt-1 cursor-pointer select-none">
              Forgot Passowrd?
            </p>
            <div className="flex gap-2">
              <input type="checkbox" />
              <label className=" text-grey-2">Remember Me</label>
            </div>
            <Button lable="Login" className=" bg-orange-8 text-white-1" />
          </div>
          <div className="relative my-2">
            <div className="w-full h-[1px] bg-white-3"></div>
            <p className="text-grey-1 absolute px-1 top-[-13px] right-[50%] bg-white-1">
              OR
            </p>
          </div>
          <div className="w-full rounded-lg bg-white-3 flex gap-3 py-5 justify-center items-center cursor-pointer">
            <img src={Google} alt="" />
            <label className="text-xl font-medium">Login with Google</label>
          </div>
          <div className="flex justify-center ">
            <p>Don't have an account? </p>
            <Link to="/signup" className="text-lg font-medium underline">
              Sign Up
            </Link>
            <img src={TopLeft} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
