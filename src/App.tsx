import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";

const App = () => {
    return (
        <>
            <div>
                <>
                    <div className="bg-white">
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
