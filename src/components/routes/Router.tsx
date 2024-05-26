import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../../pages/aboutUs";
import Contact from "../../pages/contact";
import Courses from "../../pages/course";
import HomePage from "../../pages/home";
import Pricing from "../../pages/pricing";
import LayoutProvider from "../layout";

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LayoutProvider>
    </BrowserRouter>
  );
};

export default Router;
