import { Achiefirst, Achiesecond } from "../../components";
import PagesHead from "../../components/PagesHead";
import Achieve from "./Achieve";
import AchieveCard from "./AchieveCard";
import AboutFoot from "./aboutFoot";

const AboutUs = () => {
  return (
    <div>
      <PagesHead
        title="About Skillbridge"
        text="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />
      <div className=" iPad:mt-10 mt-6 bg-white-5 w-[98%] h-[1px] mx-auto"></div>
      <div className="  container mx-auto  grid desktop:gap-[6rem] gap-[3rem] grid-cols-1 mt-10 iPad:mt-16">
        <div>
          <Achieve
            title="Achievements"
            text="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
          />
          <div className="w-full grid tablet:grid-cols-2 gap-6 iPad:mt-16 mt-10">
            {Achiefirst.map((item, i) => (
              <AchieveCard key={i} {...item} />
            ))}
          </div>
        </div>
        <div>
          <Achieve
            title="Our Goals"
            text="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to"
          />
          <div className="w-full grid tablet:grid-cols-2 gap-6 iPad:mt-16 mt-10">
            {Achiesecond.map((item, i) => (
              <AchieveCard key={i} {...item} />
            ))}
          </div>
        </div>
        <AboutFoot />
      </div>
    </div>
  );
};

export default AboutUs;
