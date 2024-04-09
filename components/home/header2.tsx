import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";

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
          <span className="relative">Nous avons tous et toutes le droit</span>
          <span className="whitespace-nowrap relative ">
            <span className="mr-3 sm:mr-4 md:mr-5">de réaliser</span>
            <span className=" relative whitespace-nowrap">
              <span className="absolute bg-neutral-900 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
              <span className="relative text-neutral-50">nos rêves</span>
            </span>
          </span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Chez IZI ACCESS, nous croyons fermement au pouvoir de l'innovation, de
          l'entrepreneuriat et de la collaboration pour créer un impact positif
          dans les communautés.
        </p>
        <div className="space-x-2 flex items-center">
          <Button className=" py-6 rounded-xl text-lg">
            <Link href={"/membership"}>Devenir membre</Link>
          </Button>
          <Button variant={'outline'} className=" py-6 rounded-xl text-lg">
            <Link href={"/membership"}>Ouvrir un fonds commus</Link>
          </Button>
        </div>
      </div>
      <div className="relative max-md:-m-4 lg:w-full">
        <img
          alt=""
          fetch-priority="high"
          width="1080"
          height="1080"
          decoding="async"
          data-nimg="1"
          className="w-full max-w-xl ml-auto rounded-lg"
          src="/test-1.jpg"
        />
      </div>
    </section>
  );
};

export default Header2;
