import React from "react";

const TradeWithConfidence = () => {
    return (
        <section className="bg-gray-100 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 py-16 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* LEFT SIDE - Floating Brand Circles */}
                    <div className="relative w-full lg:w-1/2 flex justify-center items-center">

                        {/* McDonald's Large */}
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-red-600 rounded-full flex items-center justify-center z-10">
                            <span className="text-yellow-400 text-7xl md:text-8xl font-bold">
                                M
                            </span>
                        </div>

                        {/* Amazon */}
                        <div className="absolute -top-10 left-10 w-24 h-24 bg-black rounded-full flex items-center justify-center text-white text-4xl font-bold">
                            a
                        </div>

                        {/* Intel */}
                        <div className="absolute top-6 right-6 w-40 h-40 md:w-48 md:h-48 bg-blue-700 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-semibold">
                            intel
                        </div>

                        {/* Yahoo */}
                        <div className="absolute bottom-20 right-12 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                            yahoo!
                        </div>

                        {/* Decorative small circles */}
                        <div className="absolute -left-6 top-32 w-14 h-14 bg-sky-500 rounded-full"></div>
                        <div className="absolute bottom-6 left-20 w-10 h-10 bg-blue-500 rounded-full"></div>
                        <div className="absolute -top-6 right-28 w-14 h-14 bg-green-500 rounded-full"></div>
                        <div className="absolute bottom-8 right-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
                    </div>

                    {/* RIGHT SIDE - Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">

                        {/* Small Button */}
                        <button className="bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-md mb-6 hover:bg-blue-200 transition">
                            Explore all products →
                        </button>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Trade with{" "}
                            <span className="relative inline-block">
                                confidence
                                <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-500"></span>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-500 mt-6 max-w-lg mx-auto lg:mx-0">
                            Managed portfolios are built by experts to target sustainable,
                            long-term results and the highest returns for your risk level.
                        </p>

                        {/* Cards */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="font-semibold text-lg text-gray-800">
                                    Stocks & ETFs
                                </h3>
                                <p className="text-blue-600 mt-4 text-sm cursor-pointer hover:underline">
                                    Learn more →
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="font-semibold text-lg text-gray-800">
                                    Cryptocurrencies
                                </h3>
                                <p className="text-blue-600 mt-4 text-sm cursor-pointer hover:underline">
                                    Learn more →
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TradeWithConfidence;