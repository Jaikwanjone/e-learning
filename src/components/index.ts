import Adobe from "../assets/Icons/Adobe.png";
import Amazon from "../assets/Icons/Amazon.png";
import FrontEnd from "../assets/Icons/FrontEnd.png";
import Graphic from "../assets/Icons/GraphicDesign.png";
import JavaScript from "../assets/Icons/Javascript.png";
import MobileApp from "../assets/Icons/MobileApp.png";
import Netflix from "../assets/Icons/Netflix.png";
import Notion from "../assets/Icons/Notion.png";
import Spotify from "../assets/Icons/Spotify.png";
import UIUX from "../assets/Icons/UIUX.png";
import Web from "../assets/Icons/WebDesign.png";
import Zapier from "../assets/Icons/Zapier.png";
import Zoom from "../assets/Icons/Zoom.png";
import topLeft from "../assets/Icons/topLeft.png";
import Emily from "../assets/image/Emily.png";
import Jason from "../assets/image/Jason.png";
import Michale from "../assets/image/Michale.png";
import Sarah from "../assets/image/Sarah.png";
interface Nav {
  lable: string;
  link: string;
}
interface LogoProp {
  id: number;
  image: string;
}

export interface benefitsItems {
  id: string;
  title: string;
  text: string;
  image: string;
}
export interface CourseProp {
  image: string;
  time: string;
  level: string;
  teacher: string;
  CourseType: string;
  explaination: string;
}

export interface Testi {
  name: string;
  image: string;
  review: string;
}

export interface Normal {
  plan: string;
  fee: number;
  access: string[];
  notAccess: string[] | null;
}
export interface Pro extends Normal {}

export interface Monthly {
  normal: Normal;
  pro: Pro;
}
export interface Yearly {
  normal: Normal;
  pro: Pro;
}

export interface FAQ {
  id: number;
  text: string;
  mid: string;
}

export interface foot {
  title: string;
  first: string;
  second: string;
  thrid: string;
  forth?: string;
}
export const navItems: Nav[] = [
  {
    lable: "Home",
    link: "/",
  },
  {
    lable: "About Us",
    link: "/about-us",
  },
  {
    lable: "Contact",
    link: "/contact",
  },
  {
    lable: "Course",
    link: "/course",
  },
  {
    lable: "Pricing",
    link: "/pricing",
  },
];
export const NavLogo: LogoProp[] = [
  { id: 1, image: Zapier },
  { id: 2, image: Spotify },
  { id: 3, image: Zoom },
  { id: 4, image: Amazon },
  { id: 5, image: Adobe },
  { id: 6, image: Notion },
  { id: 7, image: Netflix },
];

export const Benefits: benefitsItems[] = [
  {
    id: "01",
    title: "Flexible Learning Schedule",
    text: "Fit your coursework around your existing commitments and obligations.",
    image: topLeft,
  },
  {
    id: "02",
    title: "Expert Instruction",
    text: "Learn from industry experts who have hands-on experience in design and development.",
    image: topLeft,
  },
  {
    id: "03",
    title: "Diverse Course Offerings",
    text: "Explore a wide range of design and development courses covering various topics.",
    image: topLeft,
  },
  {
    id: "04",
    title: "Updated Curriculum",
    text: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    image: topLeft,
  },
  {
    id: "05",
    title: "Practical Projects and Assignments",
    text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    image: topLeft,
  },
  {
    id: "06",
    title: "Interactive Learning Environment",
    text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    image: topLeft,
  },
];

export const Courses: CourseProp[] = [
  {
    image: Web,
    time: "4 weeks",
    level: "Beginner ",
    teacher: "By John Smith",
    CourseType: "Web Design Fundamentals",
    explaination:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    image: UIUX,
    time: "6 weeks",
    level: "Intermediate ",
    teacher: "By Emily Johnson",
    CourseType: "UI/UX Design",
    explaination:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  },
  {
    image: MobileApp,
    time: "8 weeks",
    level: "Intermediate",
    teacher: "By David Brown",
    CourseType: "Mobile App Development",
    explaination:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
  },
  {
    image: Graphic,
    time: "10 weeks",
    level: "Beginner",
    teacher: "By Sarah Thompson",
    CourseType: "Graphic Design for Beginners",
    explaination:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
  },
  {
    image: FrontEnd,
    time: "10 weeks",
    level: "Intermediate",
    teacher: "By Michael Adams",
    CourseType: "Front-End Web Development",
    explaination:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
  },
  {
    image: JavaScript,
    time: "6 weeks",
    level: "Advance",
    teacher: "By Jennifer Wilson",
    CourseType: "Advanced JavaScript",
    explaination:
      "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
  },
];

export const Testimonal: Testi[] = [
  {
    name: "Sarah L",
    image: Sarah,
    review:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
  },
  {
    name: "Jason M",
    image: Jason,
    review:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
  },
  {
    name: "Emily R",
    image: Emily,
    review:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
  },
  {
    name: "Michale K",
    image: Michale,
    review:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
  },
];

export const monthly: Monthly = {
  normal: {
    plan: "Free Plan",
    fee: 0,
    access: [
      "Access to selected free courses.",
      "Limited course materials and resources.",
      "Basic community support.",
      "No certification upon completion.",
      "Ad-supported platform.",
    ],
    notAccess: [
      "Access to exclusive Pro Plan community forums.",
      "Early access to new courses and updates.",
    ],
  },
  pro: {
    plan: "Pro Plan",
    fee: 79,
    access: [
      "Unlimited access to all courses.",
      "Unlimited course materials and resources.",
      "Priority support from instructors.",
      "Course completion certificates.",
      "Ad-free experience.",
      "Access to exclusive Pro Plan community forums.",
      "Early access to new courses and updates.",
    ],
    notAccess: [],
  },
};

export const yearly: Yearly = {
  normal: {
    plan: "Free Plan",
    fee: 0,
    access: [
      "Access to selected free courses.",
      "Limited course materials and resources.",
      "Basic community support.",
      "No certification upon completion.",
      "Ad-supported platform.",
    ],
    notAccess: [
      "Access to exclusive Pro Plan community forums.",
      "Early access to new courses and updates.",
    ],
  },
  pro: {
    plan: "Pro Plan",
    fee: 59,
    access: [
      "Unlimited access to all courses.",
      "Unlimited course materials and resources.",
      "Priority support from instructors.",
      "Course completion certificates.",
      "Ad-free experience.",
      "Access to exclusive Pro Plan community forums.",
      "Early access to new courses and updates.",
    ],
    notAccess: [],
  },
};

export const FAQs: FAQ[] = [
  {
    id: 1,
    text: "Can I enroll in multiple courses at once?",
    mid: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 2,
    text: "What kind of support can I expect from instructors?",
    mid: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 3,
    text: "Are the courses self-paced or do they have specific start and end dates?",
    mid: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 4,
    text: "Are there any prerequisites for the courses?",
    mid: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 5,
    text: "Can I download the course materials for offline access?",
    mid: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
];

export const Foot: foot[] = [
  {
    title: "Home",
    first: "Benefits",
    second: "Our Courses",
    thrid: "Our Testimional",
    forth: "Our FAQ",
  },
  {
    title: "About Us",
    first: "Company",
    second: "Achievements",
    thrid: "Our Gools",
  },
];
