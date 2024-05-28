import {
  firstItem,
  fivethItem,
  fourthItem,
  secondItem,
  thirdItem,
} from "../../components";
import AboutHead from "./AboutHead";
import Common from "./Common";

const AboutUs = () => {
  return (
    <div>
      <AboutHead />
      <div className=" iPad:mt-10 mt-6 bg-white-5 w-[98%] h-[1px] mx-auto"></div>
      <div className="  container mx-auto  grid desktop:gap-[6rem] gap-[3rem] grid-cols-1 mt-10 iPad:mt-16">
        {firstItem.map((item) => (
          <Common
            title={item.title}
            text={item.text}
            lable={item.lable}
            image={item.image}
            time={item.time}
            level={item.level}
            teacher={item.teacher}
            Benefit={item.Benefit}
          />
        ))}
        {secondItem.map((item) => (
          <Common
            title={item.title}
            text={item.text}
            lable={item.lable}
            image={item.image}
            time={item.time}
            level={item.level}
            teacher={item.teacher}
            Benefit={item.Benefit}
          />
        ))}
        {thirdItem.map((item) => (
          <Common
            title={item.title}
            text={item.text}
            lable={item.lable}
            image={item.image}
            time={item.time}
            level={item.level}
            teacher={item.teacher}
            Benefit={item.Benefit}
          />
        ))}
        {fourthItem.map((item) => (
          <Common
            title={item.title}
            text={item.text}
            lable={item.lable}
            image={item.image}
            time={item.time}
            level={item.level}
            teacher={item.teacher}
            Benefit={item.Benefit}
          />
        ))}
        {fivethItem.map((item) => (
          <Common
            title={item.title}
            text={item.text}
            lable={item.lable}
            image={item.image}
            time={item.time}
            level={item.level}
            teacher={item.teacher}
            Benefit={item.Benefit}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
