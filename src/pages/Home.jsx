import React from 'react'
import Pricing from '../components/Pricing'
import ThreeSteps from '../components/ThreeSteps'
import Buttons from '../components/Buttons'
import { Check, CheckCircle, CheckCircle2 } from 'lucide-react'
import OurServices from '../components/OurServices'

export default function Home() {
  return (
    <div>
      {/* Investment that's suitable for you */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">

          <div className="lg:px-16">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Investment that's suitable for you
            </h5>
            <p className="mb-6 text-3xl font-semibold text-amber-400">
              Your financial freedom is our success
            </p>
            <hr className="mb-5 border-gray-300 bg-amber-400" />
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-amber-400 rounded-full flex justify-center items-center'>
                  <Check size={14} color='white' />
                </div>
                We are innovative
              </li>
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-amber-400 rounded-full flex justify-center items-center'>
                  <Check size={14} color='white' />
                </div>
                We are timely
              </li>
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-amber-400 rounded-full flex justify-center items-center'>
                  <Check size={14} color='white' />
                </div>
                We are reliable
              </li>
            </ul>

          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>

        </div>
      </div>

      {/*  */}
      <Pricing />
      {/* TRUST, EXPERIENCE, EXPERTISE AND KNOWLEDGE */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          {/*  */}
          <div className="lg:px-10">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              TRUST, EXPERIENCE, EXPERTISE AND KNOWLEDGE
            </h5>
            <p className="mb-6 text-gray-900 text-xl">
              We are an international financial company engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.
            </p>
            <div className='flex gap-4 mt-10'>
              <Buttons btnTitle="Certificate" btnStyles="bg-black text-white" withArrow={true} />
              <Buttons btnTitle="Learn More" btnStyles="bg-black text-white" withArrow={true} />
            </div>

          </div>

        </div>
      </div>
      {/*  */}
      <OurServices />

      <ThreeSteps />
      <div className='bg-amber-400'>
        <div className='flex items-center justify-between max-w-7xl border border-amber-400 mx-auto p-6 rounded-lg'>
          <div className='border border-gray-200 p-8 rounded-xl bg-amber-300'>
            <p><span className='text-3xl font-semibold'>Investors #1 Choice</span> <br /> Karli-varliklar</p>
          </div>
          <Buttons btnTitle="Lear More" btnStyles="bg-black text-white px-8 py-4" />
        </div>
      </div>
    </div>
  )
}
