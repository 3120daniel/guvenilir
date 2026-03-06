import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'

export default function FirstChoice() {
    return (
        <div className='bg-primary py-8'>
            <div className='flex flex-col sm:flex-row items-center justify-between max-w-7xl border border-primary/50 mx-auto p-6 rounded-lg'>
                <div className='border border-base-300 p-8 rounded-xl bg-primary mb-10 sm:mb-0'>
                    <p><span className='text-3xl font-semibold'>Investors #1 Choice</span> <br /> Güvenilir-varlıklar </p>
                </div>
                <Link to="/register">
                    <Buttons btnTitle="Open your account" btnStyles="bg-black text-white px-8 py-4" />
                </Link>
            </div>
        </div>
    )
}
