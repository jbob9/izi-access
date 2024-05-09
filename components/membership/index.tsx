import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import MemberShipLoginForm from "./member-login-form";
import MemberShipContract from "./member-ship-contract";
import MemberSuccess from "./member-success";

const MemberShip = () => {
  const [section, setSection] = useState("personal-info");
  const [email, setEmail] = useState<string | null>(null);
  const { data: session } = useSession();

  const handleChangeSection = (section: string) => setSection(section);
  const handleAddEmail = (email: string) => setEmail(email);

  useEffect(() => {
    if (session) {
      handleChangeSection("condition-info");
    }
  }, [session]);

  return (
    <div>
      <div className="md:px-12 lg:px-20">
        <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li
            className={cn("flex items-center cursor-pointer", {
              "text-blue-600": section === "personal-info",
            })}
          >
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            className={cn("flex items-center cursor-pointer", {
              "text-blue-600": section === "condition-info",
            })}
          >
            Condition{" "}
            <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            className={cn("flex items-center cursor-pointer", {
              "text-blue-600": section === "success",
            })}
          >
            Success
          </li>
        </ol>
      </div>
      <div className="px-2 pt-8 pb-16 lg:px-8">
        {section === "personal-info" && (
          <MemberShipLoginForm
            handleChangeSection={handleChangeSection}
            handleAddEmail={handleAddEmail}
          />
        )}
        {section === "condition-info" && (
          <MemberShipContract
            handleChangeSection={handleChangeSection}
            email={email}
          />
        )}
        {section === "success" && <MemberSuccess />}
      </div>
    </div>
  );
};

export default MemberShip;
