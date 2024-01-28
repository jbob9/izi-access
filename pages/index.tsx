import Sponsors2 from "@/components/sponsors2";
import BlogPreview from "../components/blog/blog-preview";
import Header from "../components/home/header";
import Services from "../components/home/services";
import CallToAction1 from "@/components/call-to-action-1";
import CallToAction2 from "@/components/call-to-action-2";
import Testi2 from "@/components/testimonials/testi2";



export default function Home() {
  // const slides = Array.from(Array(4).keys())
  return (
    <>
      <Header />
      <div className="my-28">
        <Sponsors2 />
      </div>

      <div className="py-6">
        <CallToAction1/>
      </div>
      <div className="py-24">
        <header className="px-fluid-base  md:text-center md:items-center mx-auto flex flex-col justify-center mb-8">
          <div className="flex items-center gap-x-4">
          <h2 className="text-thd-color-violet-90 text-5xl font-semibold mb-4 md:mb-6">
            The easiest screen recorder you’ll ever use
          </h2>
          </div>
          <div className="font-semibold text-xl text-gray-700">
            <p>
              Record in a few clicks. Share anywhere. Collaborate better.
            </p>
          </div>
        </header>
        <CallToAction2/>
      </div>
  
      <Services />

      {/* <Testimonials/> */}
      
    <Testi2/>
                              
      <BlogPreview />
    </>
  );
}
