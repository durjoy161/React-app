import Logo from '../assets/logo-text.png';
const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-[#f8fafc]">
            <div className="mx-auto container px-9 py-6 md:pt-20 md:pb-7">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

                    <div>
                        <img src={Logo} alt="Dev Stack" />

                        <p className="mt-3 max-w-[430px] text-sm leading-5 text-gray-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="mt-7 flex gap-5 text-sm text-[#475569]">
                            <a href="https://github.com">GitHub</a>
                            <a href="https://twitter.com">Twitter</a>
                            <a href="https://linkedin.com">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-[#202b3d]">
                            PRODUCT
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                            <a href="#home">Home</a>
                            <a href="#technologies">Technologies</a>
                            <a href="#projects">Projects</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-[#202b3d]">
                            COMPANY
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-[#202b3d]">
                            LEGAL
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                        </div>
                    </div>

                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;