import React from 'react'
import { CopyableText } from '../../components/ui/CopyableText'
import Buttons from '../../components/Buttons'
import { Calendar, Clock, Coins, LogOut, Menu } from 'lucide-react'

import Logo from '../../components/Logo'
import ChartTransaction from '../../components/ChartTransaction'
import { Link, Outlet } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton'

export default function UserLayout() {

    

    return (
        <div className='bg-base-100 text-base-content'>
            <div className='bg-base-300 '>
                <div className='max-w-6xl mx-auto flex justify-between items-center px-4 mb-6'>
                    <Logo />
                    <div className='flex items-center gap-4'>
                        {/* <button 
                            onClick={handleLogout} 
                            disabled={isLoading}
                            className='btn btn-sm btn-error'
                        >
                            Logout 
                        </button> */}
                        <LogoutButton className='btn btn-error btn-sm' hasIcon={true} />
                        <p>User name</p>
                        <div className="avatar avatar-online">
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                            </div>
                        </div>
                        <div className="dropdown dropdown-center">
                            <div tabIndex={0} role="button" className="btn btn-square btn-ghost m-1"><Menu /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link to="/account">Dashboard</Link></li>
                                <li><Link to="/account/deposit">Make Deposit</Link></li>
                                <li><Link to="/account/your-deposit">Your Deposit</Link></li>
                                {/* <li><a>Earning History</a></li> */}
                                <li><Link to="/account/withdraw">Withdraw</Link></li>
                                <li><a>Your referals</a></li>
                                {/* <li><a>Edit Account</a></li> */}
                                {/* <li><a>Security</a></li> */}
                                <li><LogoutButton /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <main className='max-w-6xl mx-auto p-4'>
                <Outlet />
            </main>




            <div className='mt-10 bg-base-300'>
                <p>Copyrights 2019 - 2025. All Rights Reserved</p>
            </div>
        </div>
    )
}
