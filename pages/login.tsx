const Login = () => {
  return (
    <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
      <div className="mx-auto h-full sm:w-max">
        <div className="m-auto py-12">
          <div className="mt-12 rounded-3xl border bg-gray-50 -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-gray-700">
              Login to your account
            </h3>
            <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
              <button className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 ">
                <div className="w-max mx-auto flex items-center justify-center space-x-4">
                  <img src="/google.svg" className="w-5" alt="" />
                  <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700">
                    With Google
                  </span>
                </div>
              </button>
            </div>

            <form action="" className="mt-10 space-y-8">
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="email"
                    placeholder="Your email or user name"
                    className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none  invalid:border-red-400 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="Your password"
                    placeholder="Your answer"
                    className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none  invalid:border-red-400 transition"
                  />
                </div>
                <button type="reset" className="-mr-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600">
                    Forgot password ?
                  </span>
                </button>
              </div>

              <div>
                <button className="w-full rounded-full bg-sky-500 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span className="text-base font-semibold text-white">
                    Login
                  </span>
                </button>
                <button type="reset" className="-ml-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600">
                    Create new account
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
