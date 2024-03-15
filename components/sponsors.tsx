import Marquee from "react-fast-marquee";

const logos = [
  {
    image: "/logos/ahq-logo.png",
    name: "ahq-logo",
  },
  {
    image: "/logos/cantavek-logo.png",
    name: "cantavek-logo",
  },
  {
    image: "/logos/cash-point-logo.png",
    name: "cashpoint-logo",
  },
  {
    image: "/logos/izi-connect-logo.png",
    name: "izi-connect-logo",
  },
  {
    image: "/logos/izi-transfer-logo.png",
    name: "izi-transfer-logo",
  },
  {
    image: "/logos/izi-transfer-logo.png",
    name: "izi-transfer-logo",
  },
  {
    image: "/logos/livementor-logo.png",
    name: "livementor-logo",
  },
  {
    image: "/logos/louesalle-logo.png",
    name: "louesalle-logo",
  },
  {
    image: "/logos/maison-drew-logo.png",
    name: "maison-drew-logo",
  },
  {
    image: "/logos/po-logo.png",
    name: "po-logo",
  },
  {
    image: "/logos/seia-logo.png",
    name: "seia-logo",
  },
];
const Sponsors = () => {
  return (
    <div>
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-16">
        <div className="mb-8 w-fit">
          <h6 className="text-4xl font-bold text-neutral-700">
            Nos <span className="text-pink-500">partenaires</span>
          </h6>
        </div>
        <div>
          <Marquee pauseOnHover pauseOnClick>
            {logos.map((logo) => (
              <img
                src={logo.image}
                loading="lazy"
                key={logo.name}
                className="grayscale transition hover:grayscale-0 w-32 object-cover mx-4"
                alt={logo.name}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
