import React from 'react'
import Pricing from '../components/Pricing'
import ThreeSteps from '../components/ThreeSteps'
import Buttons from '../components/Buttons'
import { Check, CheckCircle, CheckCircle2, IdCard, MessageSquare, Settings, Users2Icon, Wrench } from 'lucide-react'
import OurServices from '../components/OurServices'
import TradeWithConfidence from '../components/TradeWithConfidence'
import MarketSection from '../components/MarketSection'
import AtmCards from "../assets/card.png"
import Hero from '../components/Hero'
import forexTrader from "../assets/forex-trader.jpg"
import serverRoom from "../assets/server-room.jpg"
import Faqs from '../components/Faqs'
import { EmblaCarousel } from '../components/EmblaCarousel'


export default function Home() {
  return (
    <div>
      <Hero />

      <div className='py-10'>
        <div className="max-w-[80vh]-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

          {/* <div className="text-center">
              <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                STEPS
              </p>
              <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                How it <span className="text-indigo-600">Works?</span>
              </h3>

            </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Learn more about{" "}
            <span className="relative inline-block">
              Company name
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary"></span>
            </span>
          </h2>
          <p className='text-center text-xl'>Your Number One Provider of Profitable Investment</p>

          <div className="mt-20">
            <ul className="space-y-1 md:space-y-0 md:grid md:grid-cols-3 md:col-gap-10 space-x-6 max-w-4xl mx-auto">
              {[
                { title: "About Us", desc: "Experts in financial services" },
                { title: "Our services", desc: "Our awsome services" },
                { title: "Contact Us", desc: "Any questions? Write us" }
              ].map((item, i) => (
                <li className="bg-white p-5 pb-10 text-center border border-primary rounded-xl">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 relative top-0 -mt-14">
                      <div
                        className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-primary border-2 border-primary text-xl font-semibold">
                        {/* {i + 1} */}
                        {i === 0 && <IdCard size={30} />}
                        {i === 1 && <Wrench size={30} />}
                        {i === 2 && <MessageSquare size={30} />}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg leading-6 font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>

              ))}
            </ul>
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
                  <Check size={14} color='black' />
                </div>
                We are innovative
              </li>
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-primary rounded-full flex justify-center items-center'>
                  <Check size={14} color='black' />
                </div>
                We are timely
              </li>
              <li className="flex items-center gap-2">
                <div className='h-4 w-4 bg-primary rounded-full flex justify-center items-center'>
                  <Check size={14} color='black' />
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
      <EmblaCarousel />
      <Faqs />

      <ThreeSteps />
      <div className='bg-primary'>
        <div className='flex flex-col sm:flex-row items-center justify-between max-w-7xl border border-primary/50 mx-auto p-6 rounded-lg'>
          <div className='border border-base-300 p-8 rounded-xl bg-primary mb-10 sm:mb-0'>
            <p><span className='text-3xl font-semibold'>Investors #1 Choice</span> <br /> Güvenilir-varlıklar </p>
          </div>
          <Buttons btnTitle="Lear More" btnStyles="bg-black text-white px-8 py-4" />
        </div>
      </div>
    </div >
  )
}


// https://tailwindflex.com/@ron-hicks/steps-block
// some broke men cant have women until they have momey
