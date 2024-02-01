import { ArrowRightIcon, PlayIcon } from "@sanity/icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const Header = () => {
  return (
    <div className="pt-32 md:py-24 xl:container m-auto px-6 md:px-12 relative bg-dot-black/[0.2]">
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-blue-500 from-10% to-pink-500 to-90% blur-2xl opacity-70 "
      ></div> */}
      <div className="relative lg:flex lg:items-center lg:gap-12 py-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-center">
            Build in your way but with our {" "}
            <br/>
            <span className="text-main">Support.</span>
          </h1>
          <p className="mt-8 text-gray-600 font-medium text-center">
            Odio incidunt nam itaque sed eius modi error totam sit illum.
            Voluptas doloribusa asperiores quaerat aperiam. Quidem ha
          </p>
          <div className="flex items-center space-x-2 justify-center mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-xl">
                  <PlayIcon className="w-6 h-6 text-white mr-2"/> Why us?
                </Button>
              </DialogTrigger>
              <DialogContent className="px-0 bg-transparent border-none">
                <div className="pt-6 relative h-0 pb-[66.5%]" >
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vFdUPeHknfg?si=q0_Wxj0w0vWEG9wg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute left-0 right-0"></iframe>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant={'outline'} className="rounded-xl">
              Get Started <ArrowRightIcon className="w-5 h-5 text-gray-700 ml-2"/>
            </Button>
          </div>
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
