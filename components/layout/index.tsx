
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-blue-400 rounded-2xl mx-2 mt-1">
        <div className="py-2">
          <div className="flex items-center justify-center">
            <p className="me-5 inline-block text-sm font-semibold text-white">
              Programme d'élite dans les airs.
            </p>
            <Link
              className="py-1 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
              href="/po-elite"
            >
              Voir plus
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="min-h-screen">
        <main className="mt-4 md:mt-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
