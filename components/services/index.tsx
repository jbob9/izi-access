import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div className="max-w-4xl mx-2 md:m-auto">
      <div className="flex items-center justify-center">
        <h2 className="text-center leading-snug mb-8 text-neutral-700 md:mb-14 mx-6 text-2xl md:text-5xl">
          IziAccess is all-in-one, not one-size-fits-all
        </h2>
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
