import { EnvelopeClosedIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
// import { EnvelopeIcon } from "@sanity/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-16">
      <div className="md:px-12 lg:px-28">
        <div className="container m-auto space-y-6 text-gray-600 ">
          <img src="/Izi-Access-Logo.png" alt="logo Izi Access" className="m-auto w-28" />
          <ul
            role="list"
            className="flex  items-center justify-center gap-4 py-4  sm:gap-8"
          >
            <li role="listitem"><a href="#" className="font-semibold">Acceuil</a></li>
            <li role="listitem"><a href="#" className="font-semibold">Services</a></li>
            <li role="listitem"><a href="#" className="font-semibold">A propos</a></li>
          </ul>
          <div className="m-auto flex w-max items-center justify-between space-x-4">
            <a href="tel:+243996660436" aria-label="call">
              <InstagramLogoIcon className="w-5 h-5"/>
            </a>
            <a href="#" title="facebook" target="blank" aria-label="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                ></path>
              </svg>
            </a>
            <a href="#" title="linkedin" target="blank" aria-label="linkedin">
              <LinkedInLogoIcon className="w-5 h-5"/>
            </a>
            <a href="mailto:hello@mail.com" aria-label="send mail">
              <EnvelopeClosedIcon className="w-5 h-5"/>
            </a>
          </div>
    
          <div className="text-center">
            <span className="text-sm tracking-wide"
              >Copyright © Izi Access <span id="year"></span> | All right reserved</span
            >
          </div>
        </div>
      </div>
    </footer>
                                      
  );
};

export default Footer;
