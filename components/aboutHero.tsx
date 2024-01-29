const AboutHero = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex flex-col justify-start p-0 gap-8 text-start">
        <div className="flex flex-col text-center gap-6">
          <div className="flex flex-col text-center justify-start mb-3 md:mb-6 p-0 gap-0">
            <p className="text-blue-500 uppercase text-sm tracking-widest pb-5">
              Our Mission
            </p>
            <h2 className="text-center mx-auto  leading-tight font-bold text-2xl md:text-5xl tracking-wider max-w-[24ch]">
              Vercel enables the world to ship the best products.
            </h2>
          </div>
          <h5 className="text-center font-normal  leading-[1.41em] max-w-[38ch] mx-auto text-lg md:text-2xl">
            Vercel's Frontend Cloud provides the developer experience and infrastructure to <strong>build</strong>, <strong>scale</strong>, and <strong>secure</strong> a faster, more personalized Web.
          </h5>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row mt-16 md:space-x-3 space-y-7">
        <div>
          <div className="flex space-x-3">
            <div className="bg-neutral-950 p-3 rounded-lg h-fit text-white">
              <svg className="text-current w-5 h-5" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                <path d="M2.625 21.2992L21.2992 2.625M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"></path>
              </svg>
            </div>
            <div>
              <p className="text-2xl leading-8 tracking-wide font-semibold">
                Easy
              </p>
              <p className="text-base leading-6 font-normal">
                Building and deploying should be as easy as a single tap.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-3">
            <div className="bg-neutral-950 p-3 rounded-lg h-fit text-white">
              <svg className="with-icon_icon__MHUeb text-current w-5 h-5" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" ><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>
            </div>
            <div>
              <p className="text_wrapper__i87JK text-2xl leading-8 tracking-wide font-semibold" >
                Universal
              </p>
              <p className="text_wrapper__i87JK text-base leading-6 font-normal">
                To connect the world, sites should be fast from everywhere.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-3">
            <div className="bg-neutral-950 p-3 rounded-lg h-fit text-white">
              <svg className="text-current w-5 h-5"  fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <path d="M17 11l2 2 4-4"></path>
                </svg>
            </div>
            <div>
              <p className="text-2xl leading-8 tracking-wide font-semibold">
                Accessible
              </p>
              <p className="text-base leading-6 font-normal">
                Great care in user experience and design enables everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero