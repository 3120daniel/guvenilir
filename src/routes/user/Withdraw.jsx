import React from 'react'

export default function Withdraw() {
    return (
        <div>
            <div>
                <div className='p-2 bg-base-300 shadow'>
                    <div className='flex items-center justify-between gap-2 mb-2 max-w-4xl'>
                        <p className='pl-5'>Account Balance</p>
                        <p className='font-bold'>$0.00</p>
                    </div>
                    <div className='flex gap-1 py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                        <p className='w-3/2 pl-2 py-2 bg-base-200'>Processing</p>
                        <p className='w-full pl-2 py-2 bg-base-200'>Available</p>
                        <p className='w-full pl-2 py-2 bg-base-200'>Pending</p>
                        <p className='w-full pl-2 py-2 bg-base-200'>Account</p>
                    </div>
                    <div>
                        <div className='flex py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                            <p className='w-3/2 pl-2 py-2 bg-base-200'>Bitcoin</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-green-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-red-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 italic'>Not set</p>
                        </div>
                        <div className='flex py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                            <p className='w-3/2 pl-2 py-2 bg-base-200'>Etherum</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-green-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-red-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 italic'>Not set</p>
                        </div>
                        <div className='flex py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                            <p className='w-3/2 pl-2 py-2 bg-base-200'>USDT(TRC20)</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-green-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-red-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 italic'>Not set</p>
                        </div>

                        <div className='flex py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                            <p className='w-3/2 pl-2 py-2 bg-base-200'>TRX</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-green-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 text-red-500 font-bold'>$0.00</p>
                            <p className='w-full pl-2 py-2 bg-base-200 italic'>Not set</p>
                        </div>
                    </div>
                    <p className='pl-5'>You have no funds to withdraw</p>

                </div>
            </div>
        </div>
    )
}
