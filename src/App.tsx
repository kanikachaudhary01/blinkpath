import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Approach from "./components/Approach";


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
                <Services/>
               <Approach/>
            </div>
        </>
    );
};

export default App;
