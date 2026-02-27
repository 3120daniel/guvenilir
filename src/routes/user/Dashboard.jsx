import React from 'react'
import ChartTransaction from '../../components/ChartTransaction'
import { Calendar, Clock } from 'lucide-react'
import Buttons from '../../components/Buttons'
import { CopyableText } from '../../components/ui/CopyableText'
import currentBalIcon from "../../assets/current_bal_icon.png"
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between md:items-center md:py-4 space-y-4 mb-8'>
                {/* <div className='border bg-neutral'> */}
                <CopyableText text="https://güvenilir-varlıklar .com/?ref=Joe" mainStyle="bg-base-300" />
                {/* </div> */}
                <div className='flex gap-6'>
                    <Link to="/account/deposit" className='btn btn-secondary'>Make Deposits</Link>
                    <Link to="/account/withdraw" className='btn btn-secondary btn-outline'>Withdraw</Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-8 mb-10'>
                <div className='flex gap-8 items-center bg-gray-600 md:w-3/2'>
                    <div className='bg-base-300 py-5 px-8'>
                        <img src={currentBalIcon} alt="" />
                    </div>
                    <div className='text-xl'>
                        <p className='font-semibold'>Current Balance</p>
                        <p className='font-normal'>0 usd</p>
                    </div>
                </div>
                <div className='md:w-2/3 flex md:flex-col flex-row justify-between py-2 text-xs md:text-sm'>
                    <div className='flex items-center gap-4 w-1/2 md:w-full hover:bg-base-300'>
                        <div className='bg-base-300 rounded-full p-2.5'>
                            <Calendar />
                        </div>
                        <p>Feb-12-2026</p>
                    </div>
                    <div className='flex items-center gap-4 w-1/2 md:w-full hover:bg-base-300'>
                        <div className='bg-base-300 rounded-full p-2.5'>
                            <Clock />
                        </div>
                        <p>Last seen: Feb-16-2026 03:27:51 PM</p>
                    </div>
                </div>
            </div>

            <div className='mb-6'>
                <p className='text-lg font-bold mb-2'>Account Details</p>
                <div className='grid grid-cols-2 gap-1 md:gap-5 md:grid-cols-4'>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Main Balance</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Total Deposit</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Active Deposit</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Last Deposit</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Earned Total</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Pending Withdrawal</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Withdrawal Total</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                    <div className='card bg-base-300'>
                        <div className='card-body hover:scale-102'>
                            <p className='font-bold text-lg'>Last Withdrawal</p>
                            <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div>
                <p>Account Stats</p>
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* w-full md:w-1/2 space-y-3 flex md:flex-col md:justify-between bg-amber-300 */}
                    <div className='md:w-1/2 flex justify-between md:flex-col gap-1 md:gap-5'>
                        <div className='card bg-base-300 w-full'>
                            <div className='card-body'>
                                <p className='font-bold bg-base-300 text-md'>Investments</p>
                                <div className='flex justify-between'>
                                    <div className=' w-full border-gray-600 border-r border-t px-4 py-6'>
                                        <p>0.00</p>
                                        <p className='text-end'>Active</p>
                                    </div>
                                    <div className=' w-full border-gray-600 border-t px-4 py-6'>
                                        <p>0.00</p>
                                        <p className='text-end'>Last</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card bg-base-300 w-full'>
                            <div className='card-body'>
                                <p className='font-bold bg-base-300 text-md'>Investments</p>
                                <div className='flex justify-between'>
                                    <div className=' w-full border-gray-600 border-r border-t px-4 py-6'>
                                        <p>0.00</p>
                                        <p className='text-end'>Pending</p>
                                    </div>
                                    <div className=' w-full border-gray-600 border-t px-4 py-6'>
                                        <p>0.00</p>
                                        <p className='text-end'>Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='md:w-1/2'>
                        <ChartTransaction />
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    )
}
