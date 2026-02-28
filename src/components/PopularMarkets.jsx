import React from 'react'
import equity1 from "../assets/in-equity-11-icon-1.svg"
import equity2 from "../assets/in-equity-11-icon-2.svg"
import equity3 from "../assets/in-equity-11-icon-3.svg"
import equity4 from "../assets/in-equity-11-icon-4.svg"
import equity5 from "../assets/in-equity-11-icon-5.svg"
import equity6 from "../assets/in-equity-11-icon-6.svg"

export default function PopularMarkets() {
    return (
        <div className='px-4 py-20 bg-gray-200'>
            <div className='mb-10 space-y-4'>
                <h2 className="text-3xl md:text-4xl font-bold">
                    Trade the world’s most popular <span className="relative inline-block"> markets

                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary"></span>
                    </span>
                </h2>
                <p className='text-base sm:text-xl'>
                    Find your next trade with access to a wide range of markets.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {[
                    { img: equity1, title: "Indices", desc: "Trade 15 of the most famous global indices as CFDs" },
                    { img: equity2, title: "Stocks", desc: "Trade the most covered & highest-profile asset classes" },
                    { img: equity4, title: "Crypto", desc: "Trade Bitcoin, Ethereum, Ripple and others." },
                    { img: equity3, title: "Forex", desc: "Trade 40+ major, minor, and exotic currency pairs" },
                    { img: equity6, title: "Metals", desc: "Trade metals including Gold and Silver" },
                    { img: equity5, title: "Energies", desc: "Trade Brent Crude Oil, WTI, Natural Gas and Coal" },
                ].map((item, i) => (
                    <div className='flex gap-4 bg-white py-10 px-8 rounded-lg shadow'>
                        <div className='shrink-0'>
                            <img src={item.img} alt="" width={80} />
                        </div>
                        <div>
                            <p className='font-semibold mb-2'>{item.title}</p>
                            <p className='text-sm'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
