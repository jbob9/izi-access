// import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn("relative w-full overflow-hidden", fontSans.variable)}>
      <Navbar />
      <div className="min-h-screen">
        <main className="mt-4 md:mt-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
