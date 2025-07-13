import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Approach from "./components/Approach";
import About from "./components/About";
import Marque from "./components/Marque";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div>
                <div className="bg-[#E9E9E9]">
                    {" "}
                    <Navbar />
                    <Hero />
                </div>
                <Work />
                <Services />
                <div className="bg-white">
                     <Approach />
                </div>              
                <About/>
                <Marque/>
                <Footer/>
            </div>
        </>
    );
};

export default App;
