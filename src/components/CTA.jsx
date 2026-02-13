import React from 'react'
import Buttons from './Buttons'

export default function CTA() {
    return (
        <div className='space-y-4 py-10'>
            <div className='flex items-center max-w-7xl border border-amber-400 mx-auto p-6 rounded-lg bg-white'>
                <p>We are an international financial company engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.</p>
                <Buttons btnTitle="Lear More" btnStyles="bg-amber-400" />
            </div>
            <div class="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 max-w-7xl mx-auto rounded-xl overflow-hidden">
                <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

                <div class="min-h-[250px] relative z-50 h-full max-w-4xl  px-6 py-12">
                    <h2 class="text-white md:text-5xl text-4xl font-bold mb-3 !leading-tight">Do You Have Any Questions?</h2>
                    <p class="text-lg text-slate-200 leading-relaxed mb-8">We are delighted to help you in getting the best out of our services.</p>
                    <Buttons btnTitle="Ask us a question" btnStyles="bg-white" />
                </div>
            </div>
            
        </div >
    )
}