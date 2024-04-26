import { CheckIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
  handleChangeSection: (section: string) => void;
}

const MemberShipPayment = ({ handleChangeSection }: Props) => {
  const [currency, setCurrency] = useState("usd");
  const router = useRouter();

  const handleClick = () => {
    window.open(
      "https://www.zeffy.com/en-CA/embed/ticketing/cc3cccd9-ab4e-4eb9-ae05-d930d6a5bef7"
    );
    router.push("/");
  }
  return (
    <div>
      <div className="xl:container m-auto px-6 pb-20 md:px-12 lg:px-20">
        <div className="m-auto mt-6 md:mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
            ></div>
            <div className="relative space-y-6 py-8 px-6 sm:p-12">
              <div className="flex items-center justify-center">
                <Select
                  onValueChange={(value) => setCurrency(value)}
                  defaultValue={currency}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select current" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">Dollars ($)</SelectItem>
                    <SelectItem value="gdes">Gourde (HTG)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
                MemberShip
              </h3>
              <div>
                <div className="relative flex justify-around">
                  <div className="flex items-end">
                    <span className="leading-0 whitespace-nowrap text-6xl font-bold text-gray-800 dark:text-white">
                      {currency === "usd" ? "$15" : "398 HTG"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <button
                  onClick={handleClick}
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white dark:text-dark">
                  Continuer avec carte
                  </span>
                </button>
                <p className="my-2 flex items-center justify-center text-lg text-gray-600">
                  <span>or</span>
                </p>
                <a
                  href="/"
                  
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-red-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white">
                    Continuer avec moncash
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
            ></div>
            <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
              <ul
                role="list"
                className="space-y-4 py-6 text-gray-600 dark:text-gray-300"
              >
                <li className="space-x-2 flex items-center">
                  <CheckIcon className="w-5 h-5" />
                  <span>First premium advantage</span>
                </li>
                <li className="space-x-2 flex items-center">
                  <CheckIcon className="w-5 h-5" />
                  <span>Second advantage weekly</span>
                </li>
                <li className="space-x-2 flex items-center">
                  <CheckIcon className="w-5 h-5" />
                  <span>Third advantage donate to project</span>
                </li>
                <li className="space-x-2 flex items-center">
                  <CheckIcon className="w-5 h-5" />
                  <span>Fourth, access to all components weekly</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-white">
                Team can be any size, and you can add or switch members as
                needed. Companies using our platform include:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipPayment;
