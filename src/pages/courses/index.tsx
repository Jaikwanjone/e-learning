import {
  firstItem,
  fivethItem,
  fourthItem,
  secondItem,
  thirdItem,
} from "../../components";
import PagesHead from "../../components/PagesHead";
import Common from "./Common";

const Courses = () => {
  return (
    <div>
      <PagesHead
        title=" Online Courses on Design and Development"
        text="Welcome to our online course page, where you can enhance your skills in
        design and development. Choose from our carefully curated selection of
        10 courses designed to provide you with comprehensive knowledge and
        practical experience. Explore the courses below and find the perfect fit
        for your learning journey. "
      />
      <div className=" iPad:mt-10 mt-6 bg-white-5 w-[98%] h-[1px] mx-auto"></div>
      <div className="  container mx-auto  grid desktop:gap-[6rem] gap-[3rem] grid-cols-1 mt-10 iPad:mt-16">
        {firstItem.map((item, i) => (
          <Common key={i} {...item} />
        ))}
        {secondItem.map((item, i) => (
          <Common key={i} {...item} />
        ))}
        {thirdItem.map((item, i) => (
          <Common key={i} {...item} />
        ))}
        {fourthItem.map((item, i) => (
          <Common key={i} {...item} />
        ))}
        {fivethItem.map((item, i) => (
          <Common key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
