import { projects } from "@/pages/projects";
import Marquee from "react-fast-marquee";
import Card2 from "./card-2";

const Testi2 = () => {
  return (
    <div className="pb-28 pt-10">
      <div className="container m-auto px-3 md:px-6">
        <div className="mb-12 space-y-4 px-6 md:px-0 text-center ">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            NOS PROJETS
          </h2>
          <p className="text-base text-center opacity-80 leading-relaxed pt-2 max-w-3xl mx-auto">
            Découvrez les projets passionnants que nous soutenons et promouvons
            pour stimuler le développement économique, culturel et social au
            sein de la communauté noire.
          </p>
        </div>
        <div>
          <Marquee>
            {projects.map((project, i) => (
              <div className="mx-2" key={i}>
                <Card2 project={project} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Testi2;
