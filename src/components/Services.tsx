
import ServiceCard, { cardData } from "./ServiceCard"; 
const Services = () => {
  return (
    <>
 <div className=" w-full ">

      <div className="mx-20 w-1/2">
        <div className="text-3xl text-gray-600 tracking-tight font-bold mt-50">
          • Our Services
        </div>
        <div className="text-white text-5xl mt-10">
         Whatever we take on, whether it’s a product, website, or brand, it’s never just for show. It’s designed to work hard, deliver real value, and never coast on aesthetics.
        </div>
      </div>

      <div className="text-orange-600 text-7xl flex justify-end mr-30 mb-20">
        (02)
      </div>
     
    <div className="border border-b-gray-500 mx-30 rounded-2xl"></div>

    <div className="flex">
      {cardData.map((card, index) => (
        <ServiceCard
          key={index}
          title={card.title}
          heading={card.heading}
          subheading={card.subheading}
        />
      ))}
    </div>    
    </div>
    </>
  )
}

export default Services