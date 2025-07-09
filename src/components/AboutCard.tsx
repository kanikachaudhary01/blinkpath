
export type AboutData = {
  title: string;
  heading: string;
  subheading: string;
  border:string
};


export const aboutData: AboutData[] = [
  {
    title: "(01)",
    heading: "Embrace Complexity",
    subheading:
      "We navigate intricate design challenges with care, crafting solutions that are both innovative and adaptable to a rapidly evolving world.",
      border: ""
  },
   {
    title: "(02)",
    heading: "Insights Before Ideation",
    subheading:
      "We begin every engagement with a deep understanding of your users and goals, letting insights shape ideas that connect and push business forward.",
      border: ""
  },
   {
    title: "(03)",
    heading: "Partners, Not Hired Hands",
    subheading:
      "We work side-by-side with your team, sharing a commitment to your success and building solutions together.",
      border: ""
  },
   {
    title: "(04)",
    heading: "Beauty with Purpose",
    subheading:
      "We craft visually stunning designs that serve a strategic intent, merging aesthetic excellence with functional impact.",
      border: ""
  },
   
];

const AboutCard = ({ title, heading, subheading ,border}: AboutData) => {
  return (
    <>
      <div className="flex flex-1/2 gap-50 mt-20 ">
        <div className="text-orange-600 text-4xl mt-10 ml-70 font-bold">{title}</div>
      <div>
        <div className="text-black text-5xl mt-8">{heading}</div>
      <div className="text-[#9E9D9D] text-2xl mt-6 border-b border-gray-400 pb-10">
        {subheading}
      </div>
     
      </div>
      </div>
    </>
  );
};

export default AboutCard;
