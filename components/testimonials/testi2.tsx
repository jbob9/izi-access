import Carousel from "../carousel";
import Card2 from "./card-2";

const Testi2 = () => {
  return (
    <div className="py-16">
      <div className="container m-auto px-3 md:px-6 text-gray-600 dark:text-gray-300">
        <div className="mb-12 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div>
          <Carousel withArrows>
            <div className="mx-2">
              <Card2 />
            </div>
            <div className="mx-2">
              <Card2 />
            </div>
            <div className="mx-2">
              <Card2 />
            </div>
            <div className="mx-2">
              <Card2 />
            </div>
            <div className="mx-2">
              <Card2 />
            </div>
            <div className="mx-2">
              <Card2 />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testi2;
