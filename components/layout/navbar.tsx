import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const toggleOpen = () => setOpen((o) => !o);

  return (
    <nav
      className={`absolute w-full z-40 ${
        router.pathname === "/" ? "" : ""
      }`}
    >
      <div className="container m-auto px-3 md:px-12 lg:px-6">
        <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full flex justify-between md:w-max md:px-0">
            <Link href="/" aria-label="logo">
              <img
                src="/Izi-Access-Logo.png"
                className="w-28 md:w-32 h-8 object-cover"
                alt="iziAccess logo"
                width="60"
                height="40"
              />
            </Link>

            <div className="flex items-center space-x-3">
              {!session?.user ? (
                <Link
                  className="inline-flex md:hidden rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                  href="/membership"
                >
                  <span className="relative top-px">Become a member</span>
                </Link>
              ) : null}
              {/* <Button
                variant="outline"
                className="overflow-hidden rounded-full bg-neutral-950 text-white hover:text-white hover:bg-neutral-800 border-none shadow-none"
              >
                <Image
                  src="/placeholder-user.webp"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full mr-2 h-5 w-5"
                />
                My account
              </Button> */}
              <div>
                <div className="flex items-center md:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative z-40 px-2 py-3 sm:-mr-6"
                  >
                    <div
                      id="line"
                      className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900  transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>

              <label
                role="button"
                htmlFor="toggle_nav"
                className="fixed w-full z-30 h-full top-0 left-0 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"
              ></label>
            </div>
          </div>

          <div
            className="flex z-50 flex-col md:flex-row justify-between 
                    items-center gap-y-4 p-6 bg-white md:w-8/12 
                    md:gap-y-4 md:p-0 
                    md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                    md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0"
          >
            <div className="flex md:hidden w-full pb-5">
              <a href="/" aria-label="logo">
                <img
                  src="Izi-Access-Logo.png"
                  className="w-28 h-8 object-cover"
                  alt="tailus logo"
                  width="50"
                  height="40"
                />
              </a>
            </div>
            <div className="block w-full md:w-auto h-full md:h-auto p-3 rounded-3xl md:compose-shadow">
              <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                <li>
                  <Link href={"/"} className="block md:px-3">
                    <div className="leading-5 text-sm text-gray-500 hover:text-gray-400">
                      <span>Acceuil</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="block md:px-3 group">
                    <div className="leading-5 text-sm text-gray-500 hover:text-gray-400">
                      <span className="">Services</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="block md:px-3 group">
                    <div className="leading-5 text-sm text-gray-500 hover:text-gray-400">
                      <span className="">Évènements</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="block md:px-3 group">
                    <div className="leading-5 text-sm text-gray-500 hover:text-gray-400">
                      <span className="">Projets</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block md:px-3 group">
                    <div className="leading-5 text-sm text-gray-500 hover:text-gray-400">
                      <span className="">Articles</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block md:hidden md:px-3 group">
                    <div
                      className="leading-5 text-sm text-gray-500 hover:text-gray-400"
                    >
                      <span>
                        A propos
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
              <button className="w-full py-1.5 px-6 text-center transition border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground font-semibold block md:hidden md:w-max rounded-3xl text-sm">
                Donate
              </button>
              {!session?.user ? (
                <Link
                  href={"/membership"}
                  className="w-full py-1.5 px-6 md:ml-2 text-center transition bg-neutral-950 md:w-max rounded-3xl"
                >
                  <span className="block text-white text-sm font-semibold">
                    Become a member
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
