import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Approach from "./components/Approach";
import About from "./components/About";


const App = () => {
    return (
        <>
            <div>
                <>
                    <div className="bg-[#E9E9E9]">
                        {" "}
                        <Navbar />
                        <Hero />
                    </div>
                </>

                <Work />
               <div>
                 <Services/>
               <Approach/>
               
               </div>
               <About/>
               
            </div>
        </>
    );
};

export default App;
