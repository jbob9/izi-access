import Link from "next/link";

const CallToAction2 = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 px-3 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:gap-x-20 lg:px-24 lg:pt-0 grid place-items-center">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-2xl text-center lg:mx-0 py-10 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boostez votre activité
            <br />
            avec Izi Access.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Quel que soit votre objectif ou votre besoin, IZI ACCESS est là pour
            vous accompagner dans votre parcours vers le succès. Laissez-nous
            vous aider à réaliser vos ambitions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/membership"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Devenir membre
            </Link>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Donate <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        {/* <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div> */}
      </div>
    </div>
  );
};
export default CallToAction2;
