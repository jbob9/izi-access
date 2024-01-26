
const Header = () => {
  return (
    <div className="pt-32 md:py-24 xl:container m-auto px-6 md:px-12 relative bg-dot-black/[0.2]">
      <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-blue-500 from-10% to-pink-500 to-90% blur-2xl opacity-70 "
      ></div>

      <div className="relative lg:flex lg:items-center lg:gap-12 py-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-center">
            Build in your way but with our experts{" "}
            <span className="text-main">Support.</span>
          </h1>
          <p className="mt-8 text-gray-600 text-center">
            Odio incidunt nam itaque sed eius modi error totam sit illum.
            Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis
            beatae ipsum soluta!
          </p>
  
        </div>
        {/* <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
          <img
            src="https://tailus.io/sources/blocks/sass/preview/images/project.svg"
            alt="project illustration"
            height=""
            width=""
          />
        </div> */}
      </div>
      {/* <BackgroundBeams /> */}
     
    </div>
  );
};

export default Header;
