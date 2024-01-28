const CallToAction1 = () => {
  return (
    <div>
      <div className="xl:container m-auto px-3 text-gray-600 md:px-12">
        <div className="bg-neutral-950 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center px-4 md:px-0 pb-8 md:pb-0">
          <div className="md:w-5/12 lg:w-1/2">
            <img
              src="https://tailus.io/sources/blocks/left-illustration/preview/images/pie.svg"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:w-7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Nuxt development is carried out by passionate developers
            </h2>
            <p className="my-8 text-gray-100">
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
  )
}

export default CallToAction1