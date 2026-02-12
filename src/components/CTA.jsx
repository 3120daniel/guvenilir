import React from 'react'
import Buttons from './Buttons'

export default function CTA() {
  return (
    <div className='space-y-4'>
        <div className='flex items-center max-w-7xl border border-amber-400 mx-auto p-6 rounded-lg'>
            <p>We are an international financial company engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.</p>
            <Buttons btnTitle="Lear More" btnStyles="bg-black" />
        </div>
        <div className='flex items-center max-w-7xl border border-amber-400 mx-auto p-6 rounded-lg'>
            <p>We are an international financial company engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.</p>
            <Buttons btnTitle="Lear More" btnStyles="bg-black" />
        </div>
        <div className='max-w-7xl border border-amber-400 mx-auto p-6 rounded-lg text-center'>
            <p>Fast and reliable withdrawal/deposit method</p>
            <div className='flex justify-center gap-6 mt-6'>
                <div className='bg-red-400 h-16 w-16 rounded-full'></div>
                <div className='bg-red-400 h-16 w-16 rounded-full'></div>
                <div className='bg-red-400 h-16 w-16 rounded-full'></div>
            </div>
        </div>
        {/*  */}
        <div className='max-w-7xl border border-amber-400 mx-auto p-6 rounded-lg flex justify-between'>
            <div>
                <p>Investors #1 Choice</p>
                <p>Karli-varliklar</p>
            </div>
            <Buttons btnTitle="Open your account" />
        </div>
    </div>
  )
}
