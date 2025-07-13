import { motion } from "motion/react";

type MarueData = {
    title: string;
};
const Marque = () => {
    const marQuee: MarueData[] = [
        {
            title: "WEB PRESENCE",
        },
        { title: "UX RESEARCH" },
        { title: "UX/UI DESIGN" },
        { title: "DIGITAL PRODUCT STRATERGY" },
        { title: "VISUAL DESIGN" },
        { title: "DESIGN SYSTEMS" },
        { title: "AI UX" },
    ];
    return (
        <>
            <div className="bg-black  h-25 overflow-hidden flex gap-5">
                <motion.div
                    className="flex gap-10 whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...marQuee, ...marQuee].map((item, index) => (
                        <div
                            key={index}
                            className="text-white text-5xl font-bold px-4 mt-6"
                        >
                            {item.title}
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Marque;
