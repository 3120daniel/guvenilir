import React from 'react'

export default function Account() {
    return (
        <div className='bg-base-100 text-base-content min-h-screen'>
            <div className='max-w-7xl mx-auto'>
                <p className='text-2xl font-semibold mb-6'>Your account:</p>

                <div>
                    <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                        <p className='w-1/2 pl-3 py-2 font-semibold'>Account Name</p>
                        <p className='w-1/4 pl-3 py-2 font-semibold'>Joe</p>
                        
                    </div>
                    <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                        <p className='w-1/2 pl-3 py-2 font-semibold'>Registration date:</p>
                        <p className='w-1/4 pl-3 py-2 font-semibold'>Feb- 12-2023</p>
                    </div>
                    {/* Forms */}
                    <form>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your Full Name:</label>
                            <input
                                className="input input-bordered w-1/2"
                                value="Username"
                                type="text"
                                required
                            />
                        </div>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your E-mail Address:</label>
                            <input
                                className="input input-bordered w-1/2"
                                value="example@email.com"
                                type="email"
                                required
                            />
                        </div>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>New Password:</label>
                            <input
                                className="input input-bordered w-1/2"
                                type="password"
                                required
                            />
                        </div>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Retype Password:</label>
                            <input
                                className="input input-bordered w-1/2"
                                type="password"
                                required
                            />
                        </div>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your Bitcoin Wallet:</label>
                            <input
                                className="input input-bordered w-1/2"
                                type="text"
                                required
                            />
                        </div>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your Etherum Wallet:</label>
                            <input
                                className="input input-bordered w-1/2"
                                type="text"
                                required
                            />
                        </div>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your USDT(TRC20) Wallet:</label>
                            <input
                                className="input input-bordered w-1/2"
                                type="text"
                                required
                            />
                        </div>
                        <div  className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                            <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your TRX Wallet:</label>
                            <input
                                className="input input-bordered w-1/2"
                                type="text"
                                required
                            />
                        </div>
                        <div  className='flex justify-end gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                            <button type='submit' className='btn btn-primary text-base text-black w-1/2'>Change Account Details</button>
                        </div>
                        

                    </form>

                </div>

            </div>
        </div>
    )
}
