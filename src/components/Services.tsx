import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ServiceCard, { cardData } from "./ServiceCard";

const Services = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["70%", `-${(cardData.length - 1) * 100}%`]);

  return (
    <div className="w-full py-20 relative">
   
      <div className="mx-20 w-1/2">
        <div className="text-3xl text-gray-600 tracking-tight font-bold mt-[50px]">
          • Our Services
        </div>
        <div className="text-white text-5xl mt-10">
          Whatever we take on, whether it’s a product, website, or brand, it’s
          never just for show. It’s designed to work hard, deliver real value,
          and never coast on aesthetics.
        </div>
      </div>

      <div className="text-orange-600 text-7xl flex justify-end mr-30 mb-20">
        (02)
      </div>

      <div className="border border-b-gray-500 mx-30 rounded-2xl"></div>

      <div
        className="relative"
        style={{ height: `${cardData.length * 100}vh` }}
        ref={targetRef}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className="flex gap-10 px-10 mt-20"
            style={{ x }}
          >
            {cardData.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                heading={card.heading}
                subheading={card.subheading}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
