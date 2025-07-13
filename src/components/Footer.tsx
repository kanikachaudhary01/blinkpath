const Footer = () => {
    return (
        <>
            <div className="">
                <footer className="bg-[#FF3C00] text-white px-8 md:px-20 py-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h2 className="text-4xl  tracking-wide text-white">
                                What happens next usually <br />
                                starts with a conversation.
                            </h2>
                            <a
                                href="mailto:hello@blinkpath.com"
                                className="text-black text-4xl md:text-5xl  mt-6 block"
                            >
                                hello@blinkpath.com
                            </a>
                        </div>
                        <button className="mt-10 md:mt-0 border border-white rounded-full px-6 py-2 text-white flex items-center gap-2 hover:bg-white hover:text-[#FF3C00] transition">
                            <span className="w-3 h-3 bg-white rounded-full"></span>{" "}
                            Contact us
                        </button>
                    </div>

                    <hr className="my-12 border-white/30" />

                    <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
                        <div className="flex items-center gap-2 text-4xl">
                           
                            <div className="flex items-center gap-1">
                                <span className="w-6 h-6 bg-white rounded-full"></span>
                                <span>➔Blinkpath</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
                            <div>
                                <p className="uppercase text-sm mb-1 text-white/70">
                                    Email
                                </p>
                                <a
                                    href="mailto:hello@blinkpath.com"
                                    className="block text-white font-medium"
                                >
                                    hello@blinkpath.com
                                </a>
                            </div>
                            <div>
                                <p className="uppercase text-sm mb-1 text-white/70">
                                    Socials
                                </p>
                                <ul className="space-y-1 font-medium">
                                    <a
                                        href="#"
                                        className="flex items-center gap-1"
                                    >
                                        ➔ Instagram
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-1"
                                    >
                                        ➔ X
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-1"
                                    >
                                        ➔ LinkedIn
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-12 text-xs text-white/70">
                        <p>© 2025 Blinkpath. All rights reserved.</p>
                        <a href="#" className="underline">
                            Privacy policy
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
