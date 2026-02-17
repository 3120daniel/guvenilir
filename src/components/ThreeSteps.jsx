import React from 'react'
import Buttons from './Buttons'

export default function ThreeSteps() {
    return (
        <div>
            <div className='bg-black flex flex-col sm:flex-row px-4 md:px-20 py-20'>
                {/* col 1 */}
                <div className='space-y-6 w-full text-white'>
                    <p className='text-3xl mb-12 font-semibold'>Begin trading in three steps</p>
                    {[
                        {
                            title: "Register",
                            desc: "Create an account in few minutes, verify your email and you are set to go."
                        },
                        {
                            title: "Deposit",
                            desc: "Choose a deposit plan and payment method that is convenient for you, sit back and watch."
                        },
                        {
                            title: "Withdraw",
                            desc: "As soon as your deposit plan duration is completed, you can withdraw directly to your wallet."
                        },].map((item, i) => (
                            <div className='flex items-center gap-6 border border-primary p-6 rounded-xl max-w-xl'>
                                <div className='bg-primary shrink-0 h-12 w-12 rounded-full flex justify-center items-center font-bold text-xl'>
                                    {i + 1}
                                </div>
                                <div className=''>
                                    <p className='font-semibold'>{item.title}</p>
                                    <p>{item.desc}</p>
                                </div>

                            </div>
                        ))}

                </div>
                {/* col 2 */}
                <div className='bg-black mt-10 md:mt-0'>
                    <Buttons btnTitle="Open Account" btnStyles="bg-gray-200" />

                </div>
            </div>
        </div>
    )
}
