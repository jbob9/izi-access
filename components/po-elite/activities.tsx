const PoEliteActivities = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800">
          Activies that will have
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg">
          <div className="py-3 lg:py-5 text-center">
            <h1 className="font-semibold text-xl">Music</h1>
            <p className="text-sm opacity-90 leading-relaxed pt-2">
              "Concert en folie"
            </p>
          </div>
        </div>

        <div className="p-4 md:p-7 bg-gray-100 rounded-lg">
          <div className="py-3 lg:py-5 text-center">
            <h1 className="font-semibold text-xl">Humour</h1>
            <p className="text-sm opacity-90 leading-relaxed pt-2">
              "A la decouvert de l'Humour Haitien"
            </p>
          </div>
        </div>

        <div className="p-4 md:p-7 bg-gray-100 rounded-lg">
          <div className="py-3 lg:py-5 text-center">
            <h1 className="font-semibold text-xl">Slam</h1>
            <p className="text-sm opacity-90 leading-relaxed pt-2">
              "Prends ma langue"
            </p>
          </div>
        </div>

        <div className="p-4 md:p-7 bg-gray-100 rounded-lg">
          <div className="py-3 lg:py-5 text-center">
            <h1 className="font-semibold text-xl">Conference</h1>
            <p className="text-sm opacity-90 leading-relaxed pt-2">
              "J'entre & Prends"
            </p>
          </div>
        </div>

        <div className="p-4 md:p-7 bg-gray-100 rounded-lg">
          <div className="py-3 lg:py-5 text-center">
            <h1 className="font-semibold text-xl">Formation</h1>
            <p className="text-sm opacity-90 leading-relaxed pt-2">
              "Dispora mobilize"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoEliteActivities;
