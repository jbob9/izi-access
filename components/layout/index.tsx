// import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Footer from "./footer";
import Navbar from "./navbar";


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <div className="min-h-screen">
        <main className="mt-4 md:mt-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
