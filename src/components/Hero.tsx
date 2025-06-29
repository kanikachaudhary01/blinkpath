import Blinkpath_HeaderReel from "../assets/Blinkpath_HeaderReel.mp4"
const Hero = () => {
    return (
        <>
            <div className="">
                <div className="flex justify-between px-10">
                    <div className="text-4xl font-semibold">-BlinkPath</div>
                    <div className="text-lg font-medium">Email</div>
                </div>
                <div className="text-7xl tracking-wide mx-auto w-7xl pt-50 leading-20 font-medium">We’re a design studio for product and brand teams who mean business.</div>
                <div className="bg-orange-600 rounded-4xl mt-40">
                   <video loop muted autoPlay className="h-300">
                    <source src={Blinkpath_HeaderReel}  className=""/>
                   </video>
                </div>
            </div>
        </>
    );
};

export default Hero;
