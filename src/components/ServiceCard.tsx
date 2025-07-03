import { motion } from "motion/react";
export type CardData = {
    title: string;
    heading: string;
    subheading: string;
};

export const cardData: CardData[] = [
    {
        title: "(01)",
        heading: "UX/UI Design",
        subheading:
            "digital product experiences that engage, convert, and keep users coming back. Every interface is crafted to bridge user needs with business goals—clear, functional, and shaped to raise the bar in your space.",
    },
    {
        title: "(02)",
        heading: "AI UX",
        subheading:
            "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
    },
    {
        title: "(03)",
        heading: "Digital Product Strategy",
        subheading:
            "From first insight to first build, we help teams get clear on priorities, align fast, and move with purpose. When the stakes are high, clarity around what—and why—you’re building makes all the difference.",
    },
    {
        title: "(04)",
        heading: "UX Research",
        subheading:
            "We dig into real user behavior to uncover the patterns, needs, and moments that shape better products. It’s how we turn assumptions into alignment—and decisions into outcomes.",
    },
    {
        title: "(05)",
        heading: "Design Systems ",
        subheading:
            "Scalable systems that bring consistency to design, efficiency to engineering, and alignment across teams. They speed up the work without watering down the craft.",
    },
    {
        title: "(06)",
        heading: "Visual Design",
        subheading:
            "Brand systems that express who you are—and how you want to be seen. Great design builds trust, drives recall, and moves your story forward.",
    },
    {
        title: "(07)",
        heading: "Web Presence",
        subheading:
            "High-performing websites that anchor your go-to-market efforts and create a foundation for growth. Built for clarity, speed, and impact—with a CMS your marketing team will actually love.",
    },
];

const ServiceCard = ({ title, heading, subheading }: CardData) => {
  return (
    <motion.div
      className="flex flex-col border border-gray-500 h-[32rem] w-[28rem] mx-6 p-8 rounded-2xl mt-10 shrink-0"
    >
      <div className="text-[#6F6E6D] text-lg font-bold">{title}</div>
      <div className="text-orange-600 text-5xl mt-8">{heading}</div>
      <div className="text-[#9E9D9D] text-xl mt-6 overflow-y-auto">
        {subheading}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
