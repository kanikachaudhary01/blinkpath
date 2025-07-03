import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Approach = () => {
  const approachRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: approachRef,
    offset: ["start 1.5", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div className="bg-white h-screen absolute w-full z-50" ref={approachRef} style={{ y }}>
      <div className="mx-20 w-1/2">
        <div className="text-3xl text-gray-600 tracking-tight font-bold pt-50">
          • Our Services
        </div>
        <div className="text-black text-5xl mt-10">
          Whatever we take on, whether it’s a product, website, or brand, it’s
          never just for show. It’s designed to work hard, deliver real value,
          and never coast on aesthetics.
        </div>
      </div>
      <div className="text-orange-600 text-7xl flex justify-end mr-30 mb-20">
        (02)
      </div>
    </motion.div>
  );
};

export default Approach;
