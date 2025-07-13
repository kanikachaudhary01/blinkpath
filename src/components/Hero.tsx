import { motion, useScroll, useTransform } from "framer-motion";
import  { useRef } from "react";
import Blinkpath_HeaderReel from "../assets/Blinkpath_HeaderReel.mp4";

const Hero = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const videoScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.5, 1.5, 0.5]
    );
    const y = useTransform (
      scrollYProgress,
      [0.3,1],
      ["0%","70%"]
    )
    return (
        <>
            <div>
   
                <div className="flex justify-between px-10 pt-10">
                    <div className="text-4xl font-semibold">-BlinkPath</div>
                    <div className="text-lg font-medium">Email</div>
                </div>

       
                <div className="text-7xl tracking-wide mx-auto max-w-8xl pt-20 leading-[5rem] font-medium px-20 sm:text-5xl md:text-6xl lg:text-7xl">
                    We’re a design studio for product and brand teams who mean
                    business.
                </div>

                <div
                    ref={ref}
                    className="mt-40 w-full h-[130vh] relative bg-orange-600 rounded-t-4xl overflow-x-hidden"
                >
                    
                    <motion.div className="top-0 z-[9999] absolute w-full h-screen flex items-center justify-center">
                        <motion.video
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="rounded-2xl object-cover absolute"
                            style={{
                                scale: videoScale,
                                y,
                                transformOrigin: "center",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <source
                                src={Blinkpath_HeaderReel}
                                type="video/mp4"
                            />
                        </motion.video>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Hero;
