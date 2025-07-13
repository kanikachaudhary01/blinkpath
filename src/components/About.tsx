
import AboutCard, { aboutData } from "./AboutCard";

const About = () => {
   

    return (
        <>
            <div className="bg-white px-20">
                <div className="border-b border-gray-400 pb-10">
                <div className="text-[3.5rem]  pt-30 max-w-3xl ">
                        Every engagement is different. Our approach
                        isn’t—disciplined, intentional, and with a rhythm that
                        keeps things moving.
                    </div>
                    <div className="text-orange-600 text-7xl flex justify-end ">(04)</div>
                </div>
                    
                
                <div className=" ">
                    {aboutData.map((card, index) => (
                        <AboutCard
                            key={index}
                            title={card.title}
                            heading={card.heading}
                            subheading={card.subheading}
                           
                        />
                    ))}
                </div>
                <div className="text-6xl font-medium leading-[4rem] py-40">
                    Startups. Scale-ups. New bets. Big shifts. We work with
                    teams navigating what’s next—launching, evolving,
                    rebuilding. No two challenges are the same, but most share
                    the same ambition. Move with purpose and don’t waste time
                    getting there. This is how we show up, every time. Where do
                    we start?
                </div>
               
               
            </div>
        </>
    );
};

export default About;
