import Hero from '../assets/banner-stack.png';
const HeroSection = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 py-16 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Build Your Ideal
                            <br />

                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-5 max-w-lg text-gray-500 leading-relaxed">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">
                            <button className="w-48 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition">
                                Explore Technologies
                            </button>

                            <button className="w-48 py-3 rounded-lg text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={Hero}
                            alt="Development Stack"
                            className="w-full md:w-80 lg:w-96"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;