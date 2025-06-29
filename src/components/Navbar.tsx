const navbarItems = ["Work", "Services", "Approach", "About", "Contact"];

const Navbar = () => {
    return (
        <>
            <div className="flex justify-center gap-10 font-semibold bg-amber-200 shadow-2xl  w-fit mx-auto p-4  rounded-4xl sticky top-8 left-0">
                {navbarItems.map((items, index) => (
                    <div key={index}>{items}</div>
                ))}
            </div>
        </>
    );
};

export default Navbar;
