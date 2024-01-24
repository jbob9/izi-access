const Navbar = () => {
  return (
    <nav className="absolute w-full">
      <div className="container m-auto px-6 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full flex justify-between md:w-max md:px-0">
            <a href="/" aria-label="logo">
              <img
                src="izi-logo.jpeg"
                className="w-12"
                alt="tailus logo"
                width="60"
                height="40"
              />
            </a>

            <div className="flex items-center space-x-3">
              <a
                className="inline-flex md:hidden rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                href="/contact"
              >
                <span className="relative top-px">Contact us</span>
              </a>
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
                  src="izi-logo.jpeg"
                  className="w-12"
                  alt="tailus logo"
                  width="50"
                  height="40"
                />
              </a>
            </div>
            <div className="block w-full h-full md:h-auto">
              <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                <li>
                  <a href="#" className="block md:px-3">
                    <div
                      className="relative text-gray-900
                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-gray-900"
                    >
                      <span>Nike</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block md:px-3 group">
                    <div
                      className="relative text-gray-600
                        before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-gray-900 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                    >
                      <span className="transition group-hover:text-gray-700 ">
                        Adiddas
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block md:px-3 group">
                    <div
                      className="relative text-gray-600
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-gray-900 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                    >
                      <span className="transition group-hover:text-gray-700">
                        Cart
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
              {/* <button
                type="button"
                title="Start buying"
                className="group w-full py-3 px-6 text-center transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
              >
                <span className="block text-gray-700 font-semibold group-focus:text-gray-700 ">
                  Login
                </span>
              </button> */}
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max rounded-2xl"
              >
                <span className="block text-white font-semibold">Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
