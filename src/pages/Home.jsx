import React from 'react'
import Pricing from '../components/Pricing'
import ThreeSteps from '../components/ThreeSteps'
import Buttons from '../components/Buttons'
import { Check, CheckCircle, CheckCircle2, IdCard, Settings, Users2Icon } from 'lucide-react'
import OurServices from '../components/OurServices'
import TradeWithConfidence from '../components/TradeWithConfidence'
import MarketSection from '../components/MarketSection'
import AtmCards from "../assets/card.png"
import Hero from '../components/Hero'
import forexTrader from "../assets/forex-trader.jpg"
import serverRoom from "../assets/server-room.jpg"


export default function Home() {
  return (
    <div>
      <Hero />

      <div className='py-10'>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Learn more about{" "}
          <span className="relative inline-block">
            Company name
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary"></span>
          </span>
        </h2>
        <p className='text-center text-xl'>Your Number One Provider of Profitable Investment</p>
        <div class="h-full w-full pt-12 p-4">

          {/* Replace with thr one commented out down */}
          <div className='max-w-2xl mx-auto'>
            <div class="grid gap-5 md:grid-cols-3 md:gap-4">
              {[1, 2, 3].map(() => (
                <div class="rounded-xl bg-white text-center shadow relative pt-8 pb-4 border border-primary">
                  <div
                    class="mx-auto flex h-12 w-12 absolute left-1/2 -translate-x-1/2 -translate-y-14 transform items-center justify-center rounded-full bg-white shadow-primary/40">
                    <IdCard size={35} />
                  </div>
                  <h1 class="text-darken mb-1 text-xl font-medium">About Us</h1>
                  <p class="px-4 text-gray-500">Expert In Finiancial Services</p>
                </div>
              ))}
              {/* Replace with thr one commented out down */}

            </div>
          </div>

        </div>
      </div>




      {/* Investment that's suitable for you */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">

          <div className="lg:px-16">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Investment that's suitable for you
            </h5>
            <p className="mb-6 text-3xl font-semibold text-primary">
              Your financial freedom is our success
            </p>
            <hr className="mb-5 border-gray-300 bg-primary" />
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-primary rounded-full flex justify-center items-center'>
                  <Check size={14} color='white' />
                </div>
                We are innovative
              </li>
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-primary rounded-full flex justify-center items-center'>
                  <Check size={14} color='white' />
                </div>
                We are timely
              </li>
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-primary rounded-full flex justify-center items-center'>
                  <Check size={14} color='white' />
                </div>
                We are reliable
              </li>
            </ul>

          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={serverRoom}
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
              src={forexTrader}
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
      <TradeWithConfidence />
      <MarketSection />

      <ThreeSteps />
      <div className='bg-primary'>
        <div className='flex flex-col sm:flex-row items-center justify-between max-w-7xl border border-primary mx-auto p-6 rounded-lg'>
          <div className='border border-gray-200 p-8 rounded-xl bg-primary mb-10 sm:mb-0'>
            <p><span className='text-3xl font-semibold'>Investors #1 Choice</span> <br /> Güvenilir-varlıklar </p>
          </div>
          <Buttons btnTitle="Lear More" btnStyles="bg-black text-white px-8 py-4" />
        </div>
      </div>
    </div >
  )
}


// https://tailwindflex.com/@ron-hicks/steps-block