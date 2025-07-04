import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ApproachCard from "./ApproachCard";

const Approach = () => {
    const approachRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: approachRef,
        offset: ["start 1.5", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <motion.div
            className="bg-white w-full"
            ref={approachRef}
            style={{ y }}
        >
            <div className="mx-20 w-1/2">
                <div className="text-3xl text-gray-600 tracking-tight font-bold pt-50">
                    • Our Services
                </div>
                <div className="text-black text-5xl mt-10">
                    Whatever we take on, whether it’s a product, website, or
                    brand, it’s never just for show. It’s designed to work hard,
                    deliver real value, and never coast on aesthetics.
                </div>
            </div>
            <div className="text-orange-600 text-7xl flex justify-end mr-30 mb-20">
                (02)
            </div>
            <div className="">
                <ApproachCard
                    bgColor="bg-white shadow-2xl"
                    title="(01)"
                    heading="Sprints"
                    subheading="Fast, focused engagements to explore, test, or move a critical piece forward—without getting bogged down. Tightly scoped, clearly defined, and built to create momentum. You’ll walk away with answers, direction, and something real to build on."
                />
                <ApproachCard
                    bgColor="bg-orange-600 text-white"
                    title="(02)"
                    heading="Projects"
                    subheading="End-to-end design support for a product, brand, or web experience—with a defined scope and measurable outcomes. We lead from brief to build, aligning teams, shaping the vision, and driving toward a result you can launch with confidence."
                />
                <ApproachCard
                    bgColor=" bg-black text-white"
                    title="(03)"
                    heading="Partnerships"
                    subheading="For companies that need more than a vendor—they want a design partner. We embed with your team, stay close to the work, and evolve alongside the business. The result is consistency, speed, and strategic lift as you grow."
                />
            </div>
        </motion.div>
    );
};

export default Approach;
