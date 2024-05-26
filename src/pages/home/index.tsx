import "../../App.css";
import Stop from "../../assets/Icons/Stop.png";
import Explain from "../../assets/image/Explain.png";
import { Benefits, Courses, Testimonal } from "../../components";
import BenefitCard from "./BenefitCard";
import CourseCard from "./CourseCard";
import Faq from "./Faq";
import Format from "./Format";
import HomeIntro from "./HomeIntro";
import HomePricing from "./HomePricing";
import Media from "./Media";
import Testimonials from "./Testimonials";
const HomePage = () => {
  return (
    <div className="  container mx-auto mt-16 grid desktop:gap-[6rem] gap-[3rem] ">
      <HomeIntro />
      <Media />
      {/* Presentation start*/}
      <div className="w-full relative laptop:p-8 p-4">
        <img
          src={Explain}
          alt="Presentation image"
          className="w-full  rounded-md object-cover"
        />
        <img
          src={Stop}
          alt="Stop music"
          className="w-[45px] tablet:w-[55px] laptop:w-[65px] absolute  top-[50%] right-[50%] "
        />
      </div>
      {/* Presentation end */}

      {/* Benefit Start */}
      <div className="">
        <Format
          title="Benefits"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in"
        />
        <div className="grid iPad:grid-cols-2 gap-6 iPad:mt-16 mt-10 laptop:grid-cols-3 grid-cols-1 ">
          {Benefits.map(({ id, title, text, image }) => (
            <BenefitCard
              id={id}
              title={title}
              text={text}
              image={image}
              key={id}
            />
          ))}
        </div>
      </div>
      {/* Bentfit End */}

      {/* Courses start */}
      <div className="">
        <Format
          title="Our Courses"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />
        <div className="grid gap-6 iPad:grid-cols-2 grid-cols-1 iPad:mt-16 mt-10">
          {Courses.map(
            ({ image, time, level, teacher, CourseType, explaination }) => (
              <CourseCard
                image={image}
                time={time}
                level={level}
                teacher={teacher}
                CourseType={CourseType}
                explaination={explaination}
                key={image}
              />
            )
          )}
        </div>
      </div>
      {/* Courses End */}

      {/* Testimonial start */}
      <div className="">
        <Format
          title="Our Testimonials "
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />
        <div className="grid iPad:grid-cols-2 gap-6 iPad:mt-16 mt-10">
          {Testimonal.map(({ name, image, review }) => (
            <Testimonials
              name={name}
              image={image}
              review={review}
              key={name}
            />
          ))}
        </div>
      </div>
      {/* Testimonials end */}

      {/* Pricing start */}

      <HomePricing />

      {/* Pricing end */}

      {/* FAQ Start */}
      <Faq />
      {/* FAQ end */}
    </div>
  );
};

export default HomePage;
