import Blinkpath_HeaderReel from "../assets/Blinkpath_HeaderReel.mp4";
import map from "../assets/map.mp4"
import ship from "../assets/ship.mp4"
import pixel from "../assets/pixel.mp4"

import VideoCard from "./VideoCard"; 

const videoList = [Blinkpath_HeaderReel,pixel ,map,ship ];

const Work = () => {
  return (
    <div className=" w-full ">
 
      <div className="mx-20 w-1/2">
        <div className="text-3xl text-gray-600 tracking-tight font-bold mt-50">
          • Our Work
        </div>
        <div className="text-white text-5xl mt-10">
          Global teams trust us to take on complex challenges, push creative
          boundaries, and move fast when it matters most. We bring clarity,
          momentum, and a little heat to every project.
        </div>
      </div>

  
      <div className="text-orange-600 text-7xl flex justify-end mr-30 mb-20">
        (01)
      </div>
      
    <div className="border border-b-gray-500 mx-30 rounded-2xl"></div>

      <div className=" flex flex-wrap mt-20 ml-30 gap-20 ">
        {videoList.map((src, index) => (
          <VideoCard key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Work;
