import Blinkpath_HeaderReel from "../assets/Blinkpath_HeaderReel.mp4";
import { motion } from "motion/react";
import { useState } from "react";
const Work = () => {
 
        const [isHovered, setIsHovered] = useState(false);
    
    return (
        <>
            <div className="grid grid-cols-2 z-0 absolute w-full">
                <div className="mx-20 ">
                    <div className="text-3xl text-gray-600 tracking-tight font-bold mt-50">
                        • Our Work
                    </div>
                    <div className="text-white text-5xl mt-10 ">
                        Global teams trust us to take on complex challenges,
                        push creative boundaries, and move fast when it matters
                        most. We bring clarity, momentum, and a little heat to
                        every project.
                    </div>
                </div>

                <div className="text-orange-600 text-7xl flex justify-end mr-30 mt-140">
                    (01)
                     
                </div>
              
                <motion.div className="mt-20">
                    <video
                        autoPlay
                        muted
                        loop
                        onMouseOver={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`w-[200px] h-[200px]  object-cover transition-all duration-500 ease-in-out  ${
                            isHovered ? "rounded-full" : "rounded-none"
                        }`}
                        src={Blinkpath_HeaderReel}
                    ></video>
                </motion.div>
            </div>
        </>
    );
};

export default Work;
