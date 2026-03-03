import React from 'react'
import { CopyableText } from '../../components/ui/CopyableText'
import Buttons from '../../components/Buttons'
import { Calendar, Clock, Coins, LogOut, Menu, User } from 'lucide-react'

import Logo from '../../components/Logo'
import ChartTransaction from '../../components/ChartTransaction'
import { Link, Outlet } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton'
import CurrentDate from '../../components/ui/CurrentDate'

export default function UserLayout() {

    

    return (
       <div className='bg-base-100 text-base-content min-h-screen flex flex-col'>
    {/* Header - stays at top */}
    <div className='bg-base-300'>
        <div className='max-w-6xl mx-auto flex justify-between items-center px-4 py-4'>
            <Logo />
            <div className='flex items-center gap-4'>
                {/* <LogoutButton className='btn btn-error btn-sm hidden' hasIcon={true} /> */}
                <CurrentDate />
                <div className="avatar avatar-online">
                    <div className="w-6 sm:w-10 rounded-full border border-gray-400 flex justify-center items-center">
                       <User />
                    </div>
                </div>
                <p className='hidden sm:block'>User name</p>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-square btn-ghost btn-sm sm:btn-md">
                        <Menu />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-10 w-48 sm:w-52 p-2 shadow-lg mt-2">
                        <li><Link to="/account">Dashboard</Link></li>
                        <li><Link to="/account/deposit">Make Deposit</Link></li>
                        <li><Link to="/account/your-deposit">Your Deposit</Link></li>
                        <li><Link to="/account/withdraw">Withdraw</Link></li>
                        <li><Link to="/account/referrals">Your referrals</Link></li>
                        <li className="border-t border-base-300 mt-2 pt-2"><LogoutButton /></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* Main Content - grows to take available space */}
    <main className='flex-1'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
            <Outlet />
        </div>
    </main>

    {/* Footer - always at bottom */}
    <footer className='bg-base-300 mt-auto'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
            <p className='text-center text-sm sm:text-base text-gray-600'>
                Copyrights 2019 - 2025. All Rights Reserved
            </p>
        </div>
    </footer>
</div>
    )
}
