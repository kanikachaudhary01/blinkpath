import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Blinkpath_HeaderReel from "../assets/Blinkpath_HeaderReel.mp4";

const Hero = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Scale from 70% to 100% as user scrolls
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
                {/* Navbar */}
                <div className="flex justify-between px-10 pt-10">
                    <div className="text-4xl font-semibold">-BlinkPath</div>
                    <div className="text-lg font-medium">Email</div>
                </div>

                {/* Headline */}
                <div className="text-7xl tracking-wide mx-auto max-w-8xl pt-20 leading-[5rem] font-medium px-20">
                    We’re a design studio for product and brand teams who mean
                    business.
                </div>

                {/* Video Section */}
                <div
                    ref={ref}
                    className="mt-40 w-full h-[130vh] relative bg-orange-600 rounded-t-4xl overflow-x-hidden"
                >
                    {/* Sticky container to allow scroll effect */}
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
