import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div className="max-w-4xl mx-2 md:m-auto">
      <div className="flex items-center flex-col justify-center mb-8 lg:mb-16 text-center">
        <h2 className="scroll-m-20 pb-4 font-caption text-4xl font-extrabold tracking-tight lg:text-5xl text-center ">
          Nos services
          {/* IziAccess is all-in-one, not one-size-fits-all */}
        </h2>
        <p className="text-lg opacity-80 leading-relaxed">
          Demarrer un projet, ça commence par avoir toutes les ressources
          nécessaires qui vous permettront de le mener à bien. Izi Access vous
          propose tout ce dont vous avez besoin pour mettre toutes les chances
          de votre coté
        </p>
      </div>

      <div className="m-auto flex items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            image="https://www.klaviyo.com/wp-content/uploads/2022/07/retail-768x531.webp"
            title="Formations"
          />
          <ServiceCard
            image="https://www.klaviyo.com/wp-content/uploads/2022/07/agencies.webp"
            title="Accompagnement"
          />
          <div className="col-span-full">
            <ServiceCard
              image="https://www.klaviyo.com/wp-content/uploads/2022/07/enterprise.webp"
              title="Financement"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
