import Blinkpath_HeaderReel from "../assets/Blinkpath_HeaderReel.mp4";
import map from "../assets/map.mp4";
import ship from "../assets/ship.mp4";
import pixel from "../assets/pixel.mp4";

import VideoCard from "./VideoCard";

const videoList = [Blinkpath_HeaderReel, pixel, map, ship];

const Work = () => {
    return (
        <div className=" w-full ">
            <div className="w-full px-5 lg:px-20 mt-[50px]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="w-full lg:w-1/2 mt-30">
                        <div className="text-gray-600 tracking-tight font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                            • Our Work
                        </div>
                        <div className="mt-6 text-white text-xl sm:text-xl md:text-2xl lg:text-5xl">
                            Global teams trust us to take on complex challenges,
                            push creative boundaries, and move fast when it
                            matters most. We bring clarity, momentum, and a
                            little heat to every project.
                        </div>
                    </div>

                    <div className="text-orange-600 text-xl sm:text-xl md:text-2xl lg:text-6xl self-start lg:self-end">
                        (01)
                    </div>
                </div>
            </div>

            <div className="border border-b-gray-500 mx-30 rounded-2xl mt-25"></div>

            <div className=" flex flex-wrap mt-20 ml-30 gap-20 ">
                {videoList.map((src, index) => (
                    <VideoCard key={index} src={src} />
                ))}
            </div>
        </div>
    );
};

export default Work;
