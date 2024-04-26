import Link from "next/link";
import { Button } from "../ui/button";

const PoEliteHeader = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl md:text-4xl font-bold text-gray-800 lg:leading-tight ">
            PARTICIPEZ AUJOURD’HUI MEME AU PROGRAMME{" "}
            <span className="text-blue-600">ELITE</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 flex items-center">
            <span>PAYS A L’HONNEUR: HAITI</span> <img src="/haiti-flag.svg" className="ml-3 h-6 w-6" alt="haiti flag" />.
          </p>

          <div className="mt-5 lg:mt-8 flex space-x-0.5 md:space-x-2 items-center">
            <Button className="bg-neutral-950  rounded-xl" asChild>
              <Link href="/po-elite/form">
              Appliquer maintenant
              </Link>
            </Button>
            <Button variant={"outline"} className="rounded-xl">
              Acheter des billets
            </Button>
          </div>
        </div>

        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <img
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
};

export default PoEliteHeader;
