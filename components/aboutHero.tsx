const AboutHero = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex flex-col justify-start p-0 gap-8 text-start">
        <div className="flex flex-col text-center gap-6">
          <div className="flex flex-col text-center justify-start mb-3 md:mb-6 p-0 gap-0">
            <p className="text-blue-500 uppercase text-sm tracking-widest pb-5">
              Notre Mission
            </p>
            <h2 className="text-center mx-auto  leading-tight font-bold text-2xl md:text-5xl tracking-wider max-w-[30ch]">
              Izi Accesss à pour mission d'aider en offrant ressources,
              opportunités et soutien à la communaute noire.
            </h2>
          </div>
          <h5 className="text-center font-normal  leading-[1.41em] max-w-[55ch] mx-auto text-xl">
            Chez Izi Access, notre mission est de renforcer et d'autonomiser la
            communauté noire en favorisant le développement économique, social
            et culturel à travers des initiatives innovantes et impactantes.
          </h5>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row mt-16 md:space-x-5 space-y-7 md:space-y-0">
        <div className="flex space-x-3">
          <div className="bg-neutral-950 p-3 rounded-lg h-fit text-white">
            <svg
              className="text-current w-5 h-5"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M2.625 21.2992L21.2992 2.625M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"></path>
            </svg>
          </div>
          <div>
            <p className="text-2xl leading-8 tracking-wide font-semibold">
              Engagement
            </p>
            <p className="text-sm opacity-80 leading-relaxed pt-2">
              Nous sommes engagés à servir et à soutenir la communauté noire
              dans toutes nos actions et initiatives.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="bg-neutral-950 p-3 rounded-lg h-fit text-white">
            <svg
              className="with-icon_icon__MHUeb text-current w-5 h-5"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
            </svg>
          </div>
          <div>
            <p className="text-2xl leading-8 tracking-wide font-semibold">
              Intégrité
            </p>
            <p className="text-sm opacity-80 leading-relaxed pt-2">
              Nous agissons avec intégrité, transparence et éthique dans toutes
              nos interactions et décisions.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="bg-neutral-950 p-3 rounded-lg h-fit text-white">
            <svg
              className="text-current w-5 h-5"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <path d="M17 11l2 2 4-4"></path>
            </svg>
          </div>
          <div>
            <p className="text-2xl leading-8 tracking-wide font-semibold">
              Innovation
            </p>
            <p className="text-sm opacity-80 leading-relaxed pt-2">
              Nous encourageons l'innovation et la créativité pour trouver des
              solutions efficaces et durables aux défis auxquels notre
              communauté est confrontée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
