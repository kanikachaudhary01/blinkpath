import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ApproachCard from "./ApproachCard";

const approachCards = [
    {
        bgColor: "bg-white shadow-2xl",
        title: "(01)",
        heading: "Sprints",
        subheading:
            "Fast, focused engagements to explore, test, or move a critical piece forward—without getting bogged down. Tightly scoped, clearly defined, and built to create momentum. You’ll walk away with answers, direction, and something real to build on.",
    },
    {
        bgColor: "bg-orange-600 text-white",
        title: "(02)",
        heading: "Projects",
        subheading:
            "End-to-end design support for a product, brand, or web experience—with a defined scope and measurable outcomes. We lead from brief to build, aligning teams, shaping the vision, and driving toward a result you can launch with confidence.",
    },
    {
        bgColor: "bg-black text-white",
        title: "(03)",
        heading: "Partnerships",
        subheading:
            "For companies that need more than a vendor—they want a design partner. We embed with your team, stay close to the work, and evolve alongside the business. The result is consistency, speed, and strategic lift as you grow.",
    },
];

const Approach = () => {
    const approachRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: approachRef,
        offset: ["start 1.5", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <>
            <motion.div
                className="bg-white w-full rounded-t-4xl  "
                ref={approachRef}
                style={{ y }}
            >
                <div className="w-full px-5 lg:px-20 mt-[50px]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="w-full lg:w-1/2 mt-30">
                        <div className="text-gray-600 tracking-tight font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                            • Our Work
                        </div>
                        <div className="mt-6 sm:text-xl md:text-2xl lg:text-5xl">
                            Global teams trust us to take on complex challenges,
                            push creative boundaries, and move fast when it
                            matters most. We bring clarity, momentum, and a
                            little heat to every project.
                        </div>
                    </div>

                    <div className="text-orange-600  sm:text-xl md:text-2xl lg:text-6xl self-start lg:self-end">
                        (01)
                    </div>
                </div>
            </div>
            </motion.div>
            <div className="flex flex-col gap-10  bg-white  ">
                {approachCards.map((card, index) => (
                    <ApproachCard
                        key={index}
                        bgColor={card.bgColor}
                        title={card.title}
                        heading={card.heading}
                        subheading={card.subheading}
                    />
                ))}
            </div>
        </>
    );
};

export default Approach;
