import React from 'react'
import WhyChooseUs from '../components/WhyChooseUs'
import { Flag, Hourglass, Leaf } from 'lucide-react'
import img1 from "../assets/about/in-gallery-image-1.jpg"
import img2 from "../assets/about/in-gallery-image-2.jpg"
import img3 from "../assets/about/in-gallery-image-3.jpg"
import img4 from "../assets/about/in-gallery-image-4.jpg"
import img5 from "../assets/about/in-gallery-image-5.jpg"
import img6 from "../assets/about/in-gallery-image-6.jpg"
import Banner from '../components/Banner'
import PopularMarkets from '../components/PopularMarkets'


export default function About() {
  return (
    <div className='bg-gray-200'>
      <Banner title="About Us" desc="We are specialist in financial solutions" />
      <div className='mx-auto max-w-6xl '>
        <div className='py-20'>
          <div className='text-center mb-10 space-y-8 px-4 sm:px-10 md:px-44'>
            <h2 className="text-3xl md:text-4xl font-bold">
              TRUST, EXPERIENCE, EXPERTISE AND
              <span className="relative inline-block">
                KNOWLEDGE
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary"></span>
              </span>
            </h2>
            <p className='text-base sm:text-xl'>
              We are an international financial company engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges, real estate investment, stock and gold. All performed by qualified professional traders.
            </p>
          </div>
          <div className='space-y-8 px-4'>
            {[
              {
                icon: <Leaf />,
                title: "Who We Are",
                desc: "We are a leading financial investment platform focusing on various aspect of finance and wealth management by providing access to over 4,000 funds and assets listed on the major capital markets ranging from investments banking, stock Broking, fund escrow services, forex, Gold and the most recently developed Cryptocurrencies, ETFs and Assets listed on the major stock markets, ISA’s investment services, Pensions and insurance bonds(onshore and offshore), third party providers such as Self Invested Personal pensions providers, advisory professionals, discretionary investment managers, portfolio management, lifetime cash flow modeling and a comprehensive financial planning infrastructure for investors in a more tax-efficient way."
              },
              {
                icon: <Hourglass />,
                title: "History",
                desc: "Güvenilir-varlıklar  is a private limited liability company established on 24th January 2014, incorporated on 13th August 2015 and have gained popular support and trust from worldwide customers and investors owing totally to the teams dedication, hard work and sincerity by using our own in-depth knowledge supported by proven technology and systems already developed to provide our investors and clients with a simple and efficient way to invest and manage assets, maintain records, have access to bank term deposits listed on major exchanges and stock markets, provide access to reports and analysis tools and a high-touch client/customer service team through a team of over 72 of our own highly trained service staff."
              },
              {
                icon: <Flag />,
                title: "Culture",
                desc: "We are in control of our investors experience as we operate using our own proprietary sophisticated trading technologies that allows us to react quickly to market trends and investors demands to regulate changes with no reliance on external technology. We can set our own priorities and control the cost involved, hence we have been reckoned to providing bespoke technology and comprehensive functionality for the efficient management of investors portfolio as we are founded with the vision to create transparent trading and investment experience for our client. We are interested in successful and transparent traders that will create high trading and investment volume for we are proud to help many customers to make revenue as we provide real-time market data from leading analytical agencies. Güvenilir-varlıklar  have had a very strong relationship with equity and funding providers since our inception, we have also had experience of working across multiple sectors and offering variety of full partner led services from experienced and professionals with passion for working on corporate finance transactions, delivering transactions on the best all round investments services ranging from acquisitions, MBO, Growth and capital development, replacement capital, real estates funding and arranging long term financing."
              }].map((item, i) => (
                <div key={i} className='flex items-start gap-4 sm:gap-6'>
                  <div className='h-8 sm:h-14 w-8 sm:w-14 shrink-0 bg-primary rounded-xl sm:rounded-3xl flex justify-center items-center text-black'>
                    {item.icon}
                  </div>
                  <div>
                    <p className='text-lg sm:text-2xl font-semibold mb-3'>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/*  */}
        {/* <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            auto-rows-[250px] 
            gap-6
          "
            >
              {[
                { id: 1, src: img1, span: "row-span-2" },
                { id: 2, src: img2, span: "row-span-1" },
                { id: 3, src: img3, span: "row-span-1" },
                { id: 4, src: img4, span: "row-span-1" },
                { id: 5, src: img5, span: "row-span-2" },
                { id: 6, src: img6, span: "row-span-1" }
              ].map((image) => (
                <div
                  key={image.id}
                  className={`relative overflow-hidden rounded-2xl ${image.span}`}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="
                  w-full 
                  h-full 
                  object-cover 
                  transition-transform 
                  duration-500 
                  hover:scale-105
                "
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/*  */}
        {/*  */}


        <div class="mx-auto px-4 py-2 lg:px-32 lg:pt-24 mb-10">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center hover:scale-102"
                  src={img1} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center hover:scale-102"
                  src={img2} />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center hover:scale-102"
                  src={img3} />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center hover:scale-102"
                  src={img4} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center hover:scale-102"
                  src={img5} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center hover:scale-102"
                  src={img6} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <WhyChooseUs />
      <PopularMarkets />
    </div>
  )
}
