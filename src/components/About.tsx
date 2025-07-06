import { motion } from "motion/react";
import AboutCard, { aboutData } from "./AboutCard";
type MarueData={
    title:string;
  
}
const About = () => {
 const marQuee:MarueData [] = [ {
    title:"WEB PRESENCE",},
{title:"UX RESEARCH"},
{title:"UX/UI DESIGN"},
{title:"DIGITAL PRODUCT STRATERGY"},
{title:"VISUAL DESIGN"},
{title:"DESIGN SYSTEMS"},
{title:"AI UX"},

]
    
    return (
        <>
            <div className="bg-white"
       
            >
                <div className="flex flex-row mx-20 ">
                    <div className="text-[4rem]">
                        Every engagement is different. Our approach
                        isn’t—disciplined, intentional, and with a rhythm that
                        keeps things moving.
                    </div>
                    <div className="text-orange-600 text-7xl mt-50">(04)</div>
                </div>
                <div className="border border-[#838282] mx-30 rounded-2xl mt-20"></div>
                <div className="">
                    {aboutData.map((card, index) => (
                        <AboutCard
                            key={index}
                            title={card.title}
                            heading={card.heading}
                            subheading={card.subheading}
                            border={card.border}
                        />
                    ))}
                </div>
                <div className="text-6xl mt-20">
                    Startups. Scale-ups. New bets. Big shifts. We work with
                    teams navigating what’s next—launching, evolving,
                    rebuilding. No two challenges are the same, but most share
                    the same ambition. Move with purpose and don’t waste time   
                    getting there. This is how we show up, every time. Where do
                    we start?
                </div>
                 <div className="bg-black  h-25 rounded-b-4xl flex gap-5" >
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
                <div className="">                   
                    <footer className="bg-[#FF3C00] text-white px-8 md:px-20 py-16">
                       
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h2 className="text-4xl  tracking-wide text-white">
                                    What happens next usually{" "}
                                    <br  />
                                    starts with a conversation.
                                </h2>
                                <a
                                    href="mailto:hello@blinkpath.com"
                                    className="text-black text-4xl md:text-5xl  mt-6 block"
                                >
                                    hello@blinkpath.com
                                </a>
                            </div>
                            <button className="mt-10 md:mt-0 border border-white rounded-full px-6 py-2 text-white flex items-center gap-2 hover:bg-white hover:text-[#FF3C00] transition">
                                <span className="w-3 h-3 bg-white rounded-full"></span>{" "}
                                Contact us
                            </button>
                        </div>

                        <hr className="my-12 border-white/30" />

                        <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
                            <div className="flex items-center gap-2 text-4xl">
                                <span>➔</span>
                                <div className="flex items-center gap-1">
                                    <span className="w-6 h-6 bg-white rounded-full"></span>
                                    <span>Blinkpath</span>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
                                <div>
                                    <p className="uppercase text-sm mb-1 text-white/70">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:hello@blinkpath.com"
                                        className="block text-white font-medium"
                                    >
                                        hello@blinkpath.com
                                    </a>
                                </div>
                                <div>
                                    <p className="uppercase text-sm mb-1 text-white/70">
                                        Socials
                                    </p>
                                    <ul className="space-y-1 font-medium">
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-1"
                                            >
                                                ➔ Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-1"
                                            >
                                                ➔ X
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-1"
                                            >
                                                ➔ LinkedIn
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between mt-12 text-xs text-white/70">
                            <p>© 2025 Blinkpath. All rights reserved.</p>
                            <a href="#" className="underline">
                                Privacy policy
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default About;
