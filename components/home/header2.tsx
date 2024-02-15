import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Bricolage_Grotesque } from "next/font/google";

export const Brico = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

const Header2 = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1
          className={cn(
            "font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start",
            Brico.className
          )}
        >
          <span className="relative">Ship your startup</span>
          <span className="whitespace-nowrap relative ">
            <span className="mr-3 sm:mr-4 md:mr-5">in days,</span>
            <span className=" relative whitespace-nowrap">
              <span className="absolute bg-neutral-900 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
              <span className="relative text-neutral-50">not weeks</span>
            </span>
          </span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          The NextJS boilerplate with all you need to build your SaaS, AI tool,
          or any other web app and make your first $ online fast.
        </p>
        <div className="space-y-4">
          <Button className="" title="Go to ShipFast Checkout">
            Get ShipFast
          </Button>
        </div>
      </div>
      <div className="relative max-md:-m-4 lg:w-full">
        <img
          alt="Mongo + Mailgun + Stripe + NextJS + Tailwind + NextAuth = ShipFast"
          fetchPriority="high"
          width="1080"
          height="1080"
          decoding="async"
          data-nimg="1"
          className="w-full max-w-xl ml-auto"
          style={{ color: "transparent" }}
          src="/undraw_showing_support_re_5f2v.svg"
        />
      </div>
    </section>
  );
};

export default Header2;
