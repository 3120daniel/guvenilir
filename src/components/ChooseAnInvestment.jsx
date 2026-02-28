import React from 'react'
import CryptoPrices from './CryptoPrices'

export default function ChooseAnInvestment() {
    return (
        < div className="py-16 lg:py-20 px-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl" >
            <div className="grid gap-10 grid-cols-2">

                <div className="lg:px-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-14">
                        Choose an <br />
                        <span className="relative inline-block">
                            investment product
                            <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary"></span>
                        </span>
                        that is suitable for you
                    </h2>
                    <p className='text-lg md:text-2xl font-semibold'>Best market prices available so you can receive excellent conditions.</p>
                </div>
                <div className='w-full'>
                    <CryptoPrices />
                </div>

            </div>
        </div >
    )
}
