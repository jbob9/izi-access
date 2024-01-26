import { FormEvent, useState } from "react";

const Connect = () => {
  const [action, setAction] = useState<'login' | 'register'>('login')
  // const [errors, '']

  const handleSubmit = async (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email')
    const password = data.get('password')
    if(action === 'login'){

    }

    if(action === 'register') {

    }
  }

  return (
    <div className="flex flex-col items-center justify-center pt-24 md:pt-12 px-4 pb-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            {action == 'login' ? 'Sign in to your account' : 'Create an account'}
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            {/* <div className="flex items-center justify-end">
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                Forgot password?
              </a>
            </div> */}
            <button
              type="submit"
              className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {action === 'login' ? 'Sign in' : 'Sign up'}
            </button>
            {action === 'login' ? 
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <button
                onClick={() => setAction('register')}
                type="button"
                className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
           : 
           <p className="text-sm font-light text-gray-500">
              Already have a account!{" "}
              <button
                onClick={() => setAction('login')}
                type="button"
                className="font-medium text-primary-600 hover:underline"
              >
                Sign in
              </button>
            </p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
