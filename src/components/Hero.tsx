import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Blinkpath_HeaderReel from "../assets/Blinkpath_HeaderReel.mp4";

const Hero = () => {
  const ref = useRef(null);

  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Optional: animate background or video position
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div ref={ref}>
        {/* Header */}
        <div className="flex justify-between px-10 pt-10">
          <div className="text-4xl font-semibold">-BlinkPath</div>
          <div className="text-lg font-medium">Email</div>
        </div>

        {/* Hero Text */}
        <div className="text-7xl tracking-wide mx-auto max-w-7xl pt-20 leading-[5rem] font-medium px-10">
          We’re a design studio for product and brand teams who mean business.
        </div>

        {/* Scroll-animated video */}
        <div className="bg-orange-600 rounded-3xl mt-40 h-screen overflow-hidden relative grid place-items-center">
          <motion.video
            loop
            muted
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full object-cover z-0"
            style={{ y: backgroundY }}
          >
            <source src={Blinkpath_HeaderReel} type="video/mp4" />
          </motion.video>
        </div>
      </div>
    </>
  );
};

export default Hero;
