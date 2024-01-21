import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={inter.variable}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
