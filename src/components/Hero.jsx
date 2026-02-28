import React from 'react'
import { EmblaCarousel } from './Hero/EmblaCarousel'
import TradingViewTicker from './tradingview/TradingViewTicker'
// import { CustomSlidingTicker } from './tradingview/TradingViewTickerTape'

export default function Hero() {
  // const marketData = [
  //   { symbol: 'S&P 500', price: '4,500.25', change: '+0.5%' },
  //   { symbol: 'NASDAQ', price: '15,000.50', change: '+0.8%' },
  //   { symbol: 'DOW JONES', price: '35,000.75', change: '-0.2%' },
  //   { symbol: 'EUR/USD', price: '1.0925', change: '+0.1%' },
  //   { symbol: 'BTC/USD', price: '45,000', change: '+2.5%' },
  //   { symbol: 'ETH/USD', price: '2,500', change: '+1.8%' },
  //   { symbol: 'GOLD', price: '2,050', change: '+0.3%' }
  // ];
  return (
    <div className="relative bg-gray-300 lg:min-h-[90vh] min-h-[40vh] overflow-hidden">
      {/* Video Background md:min-h-[90vh] */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/60" />
      <EmblaCarousel />
      <TradingViewTicker />
      {/* <CustomSlidingTicker
        symbols={marketData}
        height={70}
      /> */}

      {/* Content */}
      {/* <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Hero Title</h1>
          <p className="text-xl md:text-2xl">Your subtitle here</p>
        </div>
      </div> */}
    </div>
  )
}
