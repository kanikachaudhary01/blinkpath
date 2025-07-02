import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";

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
            </div>
        </>
    );
};

export default App;
