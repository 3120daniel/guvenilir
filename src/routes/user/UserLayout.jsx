import React from 'react'
import { CopyableText } from '../../components/ui/CopyableText'
import Buttons from '../../components/Buttons'
import { Calendar, Clock, Coins, LogOut, Menu } from 'lucide-react'
import currentBalIcon from "../../assets/current_bal_icon.png"
import Logo from '../../components/Logo'
import ChartTransaction from '../../components/ChartTransaction'

export default function UserLayout() {
    return (
        <div className='bg-base-100 text-base-content'>
            <div className='bg-base-300 '>
                <div className='max-w-6xl mx-auto flex justify-between items-center px-4 mb-6'>
                    <Logo />
                    <div className='flex items-center gap-4'>
                        {/* <button className='btn btn-sm btn-error'>Logout <LogOut size={16} /> </button> */}
                        <div className="avatar avatar-online">
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                            </div>
                        </div>
                        <div className="dropdown dropdown-center">
                            <div tabIndex={0} role="button" className="btn btn-square btn-ghost m-1"><Menu /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className='max-w-6xl mx-auto'>

                {/*  */}
                <div className='flex justify-between items-center p-4'>
                    {/* <div className='border bg-neutral'> */}
                    <CopyableText text="https://karli-varliklar.com/?ref=Joe" mainStyle="bg-nutral" />
                    {/* </div> */}
                    <div className='flex gap-6'>
                        <Buttons btnTitle="Make Deposits" btnStyles="bg-blue-400 py-3 font-semibold" />
                        <Buttons btnTitle="Withdraw" btnStyles="bg-primary py-3 font-semibold" />
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
                <div className='mt-10'>
                    <form action="" className='text-md'>
                        <div className='bg-base-300 p-2'>
                            <div className='flex items-center gap-2'>
                                <input type="radio" name="radio-1" className="radio radio-sm" />
                                <label htmlFor="">Plan A</label>
                            </div>
                            <div className='flex gap-1 py-1'>
                                <p className='w-3/2 bg-base-100 pl-2 py-2'>Plan</p>
                                <p className='w-1/3 bg-base-100 pl-2 py-2'>Spent Amount ($)</p>
                                <p className='w-1/3 bg-base-100 pl-2 py-2'>Profit (%)</p>
                            </div>
                            <div className='flex gap-1 py-1'>
                                <div className='w-3/2 bg-base-100 pl-2 py-2'>Plan</div>
                                <div className='w-1/3 bg-base-100 pl-2 py-2 flex justify-center gap-2'>
                                    <p className='badge badge-primary'>500</p>
                                    -
                                    <p className='badge badge-primary'>500</p>
                                </div>
                                <div className='w-1/3 bg-base-100 pl-2 py-2'>40.00%</div>
                            </div>
                        </div>
                    </form>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="bg-base-200">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                {/*  */}
            </div>

            <div className='mt-10 bg-base-300'>
                <p>Copyrights 2019 - 2025. All Rights Reserved</p>
            </div>
        </div>
    )
}
