import Marquee from "react-fast-marquee";

const Album = () => {
  return (
    <div>
      <Marquee pauseOnHover pauseOnClick>
        <div className="space-x-8 flex items-center">
          <div className="block transform -rotate-6">
            <img
              src="/austin-distel-wD1LRb9OeEo-unsplash.jpg"
              alt=""
              className="rounded-lg transform h-72 w-full object-cover"
            />
          </div>

          <div className="block transform ">
            <img
              src="/austin-distel-rxpThOwuVgE-unsplash.jpg"
              alt=""
              className="rounded-lg transform h-72 w-full object-cover"
            />
          </div>
          <div className="block transform ">
            <img
              src="/austin-distel-rxpThOwuVgE-unsplash.jpg"
              alt=""
              className="rounded-lg transform h-72 w-full object-cover"
            />
          </div>
          <div className="block transform ">
            <img
              src="/austin-distel-rxpThOwuVgE-unsplash.jpg"
              alt=""
              className="rounded-lg transform h-72 w-full object-cover"
            />
          </div>
          <div className="block transform ">
            <img
              src="/austin-distel-rxpThOwuVgE-unsplash.jpg"
              alt=""
              className="rounded-lg transform h-72 w-full object-cover"
            />
          </div>
          <div className="block transform rotate-6">
            <img
              src="/covene-BtHRjAiNDR4-unsplash.jpg"
              alt=""
              className="rounded-lg transform h-72 w-full object-cover"
            />
          </div>
          
        </div>
      </Marquee>
    </div>
  );
};

export default Album;
