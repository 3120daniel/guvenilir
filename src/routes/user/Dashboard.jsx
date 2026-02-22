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
            <div className='max-w-6xl mx-auto'>

                {/*  */}
                <div className='flex justify-between items-center p-4'>
                    {/* <div className='border bg-neutral'> */}
                    <CopyableText text="https://güvenilir-varlıklar .com/?ref=Joe" mainStyle="bg-base-300" />
                    {/* </div> */}
                    <div className='flex gap-6'>
                        <Link to="/deposit" className='btn btn-secondary'>Make Deposits</Link>
                        <Link to="/" className='btn btn-secondary btn-outline'>Withdraw</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-8 mb-10'>
                <div className='flex gap-8 items-center bg-gray-600 w-3/2'>
                    <div className='bg-base-300 py-5 px-8'>
                        <img src={currentBalIcon} alt="" />
                    </div>
                    <div className='text-xl'>
                        <p className='font-semibold'>Current Balance</p>
                        <p className='font-normal'>0 usd</p>
                    </div>
                </div>
                <div className='w-2/3 flex flex-col justify-between py-2'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-base-300 rounded-full p-2.5'>
                            <Calendar />
                        </div>
                        <p>Feb-12-2026</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='bg-base-300 rounded-full p-2.5'>
                            <Clock />
                        </div>
                        <p>Last seen: Feb-16-2026 03:27:51 PM</p>
                    </div>
                </div>
            </div>

            <div className='mb-6'>
                <p className='text-lg font-bold mb-2'>Account Details</p>
                <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                        <div className='card bg-base-300'>
                            <div className='card-body'>
                                <p className='font-bold text-lg'>Main Balance</p>
                                <p className='text-xl'>$0 <span className='text-xs'>USD</span></p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div>
                <p>Account Stats</p>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='w-1/2 space-y-3'>
                        <div className='card bg-base-300'>
                            <div className='card-body'>
                                <p className='font-bold bg-base-300 text-md'>Investments</p>
                                <div className='flex justify-between'>
                                    <div className=' w-full border-gray-600 border-r border-t px-4 py-6'>
                                        <p>0.00</p>
                                    </div>
                                    <div className=' w-full border-gray-600 border-t px-4 py-6'>
                                        <p>0.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card bg-base-300'>
                            <div className='card-body'>
                                <p className='font-bold bg-base-300 text-md'>Withdrawals</p>
                                <div className='flex justify-between'>
                                    <div className='flex justify-center w-full items-center border-gray-600 border-r border-t px-5 py-10'>
                                        <p>0.00</p>
                                    </div>
                                    <div className='flex justify-center w-full items-center border-gray-600 border-t px-5 py-10'>
                                        <p>0.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2'>
                        <ChartTransaction />
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    )
}
