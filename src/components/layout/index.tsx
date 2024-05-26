import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface Prop {
  children: ReactNode;
}

const LayoutProvider = ({ children }: Prop) => {
  return (
    <main className="bg-white-3 font-bevi">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
export default LayoutProvider;
