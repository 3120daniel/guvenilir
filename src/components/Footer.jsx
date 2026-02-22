import React from 'react'
import btc from "../assets/crypto/btc.png"
import eth from "../assets/crypto/eth.png"
import ltc from "../assets/crypto/ltc.png"
import usdt from "../assets/crypto/usdt.png"
import xrp from "../assets/crypto/xrp.png"
import { Link } from 'react-router-dom'
import Logo from './Logo'
import dodge from "../assets/crypto/dodge.jpg"
import tron from "../assets/crypto/tron.jpg"
import solana from "../assets/crypto/solana.jpg"

export default function Footer() {
    return (
        <div className='pt-10 '>
            <div className='px-4'>
                <div className='max-w-7xl shadow mx-auto p-6 rounded-lg text-center bg-gray-100'>
                    <p className='text-2xl font-semibold '>Fast and reliable withdrawal/deposit method</p>
                    <div className='flex justify-center gap-4 md:gap-20 sm:gap-6 mt-8 sm:mt-12'>
                        {[btc, eth, usdt, xrp, ltc, dodge, tron, solana].map((item) => (
                            <img src={item} alt="" className='h-12 w-12 rounded-full' />

                        ))}
                    </div>
                </div>
            </div>

            <div className="relative mt-10 sm:mt-20 bg-gray-100">
                <svg
                    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-100"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="currentColor"
                        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                    />
                </svg>
                <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                        <div className="md:max-w-md lg:col-span-2">
                            <Link
                                to="/"
                                aria-label="Go home"
                                title="Company"
                                className="inline-flex items-center"
                            >
                                <Logo />
                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                    Company
                                </span>
                            </Link>
                            {/* <div className="mt-4 lg:max-w-sm">
                                <p className="text-sm text-deep-purple-50">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                </p>
                                <p className="mt-4 text-sm text-deep-purple-50">
                                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo.
                                </p>
                            </div> */}
                        </div>
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Our Company
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            What We Offer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            FAQ's
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Our Services
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Forex Trading
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Real Estate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Cryptocurrency Trading
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Gold Investments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Retirement Planing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    More
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Cannabis Investment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Oil And Gas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Financial Planning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Loans And Grants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Stock Investments
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Account
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Create Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                        <p className="text-sm">
                            © Copyright 2020 Lorem Inc. All rights reserved.
                        </p>
                        <div className='flex gap-4 mt-4 sm:mt-0'>
                            {[btc, eth, usdt, xrp, ltc, dodge, tron, solana].map((item) => (
                                <img src={item} alt="" className='h-5 w-5 rounded-full' />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
