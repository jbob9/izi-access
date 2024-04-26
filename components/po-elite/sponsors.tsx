import Marquee from "react-fast-marquee";
import { logos } from "../sponsors";

const PoEliteSponsors = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
        <h2 className="text-gray-600 text-2xl font-semibold">Supporté par</h2>
      </div>
      <div>
        <Marquee pauseOnHover pauseOnClick>
          {logos.map((logo, i) => (
            <img src={logo.image} key={i} className="size-24 object-contain mx-4" alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PoEliteSponsors;
