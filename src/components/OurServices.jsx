import React from 'react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.png"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img8 from "../assets/8.jpg"
import img9 from "../assets/9.jpg"
import Buttons from './Buttons'



export default function OurServices() {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">

                    {/*  */}
                    <div className="lg:px-10">
                        <h5 className="mb-4 text-4xl font-extrabold leading-none">
                            Karli-varliklar offer Card to investors on Ultimate plan
                        </h5>
                        <p className="mb-6 text-gray-900 text-lg">
                            The partnership aims to fill a gap in the traditional financial system that has left many without access to essential banking products. According to a 2017 survey by the FDIC, 25 percent of U.S. households are unbanked or underbanked, while global numbers have reached a staggering 1.7 billion, according to data released by the World Bank. Through BlockCard, Karli-varliklar investors can have a virtual card issued to them while a physical card is mailed to them. The card has a minimum of $1000 balance needed. It can be used at over 45 million merchants and ATMs – anywhere in the world where major credit cards are accepted.
                        </p>

                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                    </div>

                </div>
            </div>
            {/*  */}
            <div className='max-w-6xl px-4 shadow-2xl mx-auto'>
                <p>Our Services</p>
                <div className='grid grid-cols-2 gap-4'>
                    {[
                        {
                            title: "Forex Trading",
                            desc: "Forex is a portmanteau of foreign currency and exchange. Foreign exchange is the process of changing one currency into another currency for a variety of reasons, usually for commerce, trading, or tourism. According to a recent triennial report...",
                            image: img8
                        },
                        {
                            title: "Real Estate Investments",
                            desc: "Real estate investments involves the purchase, ownership, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing...",
                            image: img5
                        },
                        {
                            title: "Gold Investments",
                            desc: "Commonly seen as a great store of wealth, this precious metal is also known as a reliable safe-haven asset. With a rich history amongst almost all global cultures, gold remains a highly popular...",
                            image: img9
                        },
                        {
                            title: "Retirement Planning",
                            desc: "Saving for retirement can be a daunting task, but with a sound strategy, it’s well within reach. Karli-varliklar is here to bring clarity to retirement...",
                            image: img1
                        },
                        {
                            title: "Medical Cannabis",
                            desc: "For many years we have been working conscientiously and with the most diverse technologies and means. We have constantly successfully completed our projects...",
                            image: img2
                        },
                        {
                            title: "Cryptocurrencies",
                            desc: "Karli-varliklar now offers all traders the opportunity to trade a wide range of the top ranked digital coins 24/7*. Today cryptocurrencies have become known to most people...",
                            image: img3
                        },
                        {
                            title: "Financial Planning",
                            desc: "A financial plan is a comprehensive evaluation of an investor’s current and future financial state by using currently known variables to predict future cash flows, asset values and withdrawal..",
                            image: img4
                        },
                        {
                            title: "Oil and Gas",
                            desc: "Surprising as it might be, anyone can invest in the oil market to make a profit. Indeed, the development of online trading platforms has allowed individuals to use their savings to speculate on rising or falling oil prices...",
                            image: img6
                        },
                        {
                            title: "Loans and Grants",
                            desc: "Getting a loan doesn’t have to be intimidating, with the right lender it can be a simple process. You only need a lender committed to taking the mystery out of the mortgage loan process...",
                            image: img7
                        },
                    ].map((item, i) => (
                        <div key={i} className='shadow rounded-md'>
                            <div className='h-80 bg-red-300'>
                                <img src={item.image} alt="" className='h-full w-full object-cover' />
                            </div>
                            <div className='px-4 pt-4 pb-6'>
                                <p className='font-semibold text-xl mb-1'>{item.title}</p>
                                <p className='mb-6'>{item.desc}</p>
                                <Buttons btnTitle="Learn More" btnStyles="bg-amber-400" withArrow={true} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
