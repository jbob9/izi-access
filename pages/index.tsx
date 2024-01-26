import Sponsors2 from "@/components/sponsors2";
import BlogPreview from "../components/blog/blog-preview";
import Header from "../components/home/header";
import Services from "../components/home/services";
import Carousel from "@/components/carousel";
import Testimonials from "@/components/testimonials";

export function Example() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  // const slides = Array.from(Array(4).keys())
  return (
    <>
      {/* <div className="pt-16 md:pt-4 relative">
        <Carousel options={{}} slides={slides}>
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              
              <img
                className="block w-full h-[19rem] md:h-[30rem] object-cover"
                src={`/slide-${index+1}.jpg`}
                alt="Your alt text"
              />
            </div>
          ))}
        </Carousel>
      </div> */}
      <Header />
      <div className="my-10">
        <Sponsors2 />
      </div>
      <Services />

      <Testimonials/>
      
      <div className="py-16">
  <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div className="bg-neutral-950 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div className="md:5/12 lg:w-1/2">
        <img
          src="https://tailus.io/sources/blocks/left-illustration/preview/images/pie.svg"
          alt="image"
          loading="lazy"
          width=""
          height=""
        />
      </div>
      <div className="md:7/12 lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-300 md:text-4xl">
          Nuxt development is carried out by passionate developers
        </h2>
        <p className="my-8 text-gray-200">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
        </p>

        <a
            href="https://tailus.io/contact"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span
              className="relative text-base font-semibold text-sky-600"
              >Browse now</span
            >
        </a>
      </div>
    </div>
  </div>
</div>
           <Example/>                         
      <BlogPreview />
    </>
  );
}
