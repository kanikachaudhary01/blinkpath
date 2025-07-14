import AboutCard, { aboutData } from "./AboutCard";

const About = () => {
    return (
        <>
            <div className="bg-white px-20">
                <div className="border-b border-gray-400 pb-20">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
                        <div className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] pt-[120px] max-w-3xl tracking-tight">
                            Every engagement is different. Our approach
                            isn’t—disciplined, intentional, and with a rhythm
                            that keeps things moving.
                        </div>
                        <div className="text-orange-600 text-4xl sm:text-5xl md:text-6xl lg:self-end">
                            (04)
                        </div>
                    </div>
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
