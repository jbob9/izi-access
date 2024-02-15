import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div>
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-16">
        <div className="mb-8 border-b-2 w-fit pb-4">
          <h6 className="text-2xl font-bold text-neutral-700">
            Trusted by +5 giants
          </h6>
        </div>
        <div>
          <Marquee pauseOnHover pauseOnClick>
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
              loading="lazy"
              className="grayscale transition hover:grayscale-0 w-32 object-cover mx-4"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
              loading="lazy"
              className="grayscale transition hover:grayscale-0 w-32 mx-4"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
              loading="lazy"
              className="grayscale transition hover:grayscale-0 w-32 mx-4"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
              loading="lazy"
              className="grayscale transition hover:grayscale-0 w-32 mx-4"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
              loading="lazy"
              className="grayscale transition hover:grayscale-0 w-32 mx-4"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
              loading="lazy"
              className="grayscale transition hover:grayscale-0 w-32 mx-4"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
              loading="lazy"
              className="grayscale transition hover:grayscale-0 w-32 mx-4"
              alt="logo"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
