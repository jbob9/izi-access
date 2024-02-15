import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div className="max-w-4xl mx-2 md:m-auto">
      <div className="flex items-center justify-center">
        <h2 className="scroll-m-20 font-caption text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 text-center lg:mb-16">
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
