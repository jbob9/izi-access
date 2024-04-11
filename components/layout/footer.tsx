import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            <nav>
              <div className="space-x-3">
                <Link href="/" className=" font-semibold tracking-wider leading-7 text-gray-900">
                  Accueil
                </Link>
                <Link href="/#services" className="font-semibold tracking-wider leading-7 text-gray-900">
                  Services
                </Link>
                <Link href="/about" className="font-semibold tracking-wider leading-7 text-gray-900">
                  A propos
                </Link>
              </div>
              <div className="flex items-center space-x-4 py-5">
                <a href="tel:+243996660436" aria-label="call">
                  <InstagramLogoIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  title="facebook"
                  target="blank"
                  aria-label="facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="m-auto w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  title="linkedin"
                  target="blank"
                  aria-label="linkedin"
                >
                  <LinkedInLogoIcon className="w-5 h-5" />
                </a>
                <a href="mailto:hello@mail.com" aria-label="send mail">
                  <EnvelopeClosedIcon className="w-5 h-5" />
                </a>
              </div>
            </nav>
            <div className="flex lg:justify-end">
              <form className="max-w-sm">
                <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  Sign up for our newsletter
                </h2>
                <p className="mt-4 text-sm text-neutral-700">
                  Subscribe to get the latest design news, articles, resources
                  and inspiration.
                </p>
                <div className="relative mt-6">
                  <input
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                  />
                  <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                    >
                      <svg
                        viewBox="0 0 16 6"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="my-16 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
            <Link href="/">
              <img src="/Izi-Access-Logo.png" alt="logo Izi Access" className="m-auto w-28" />
            </Link>
            <p className="text-sm text-neutral-700">© Izi access 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
