import React from 'react'
import { EmblaCarousel } from './Hero/EmblaCarousel'

export default function Hero() {
  return (
    <div className="relative bg-gray-300 min-h-[90vh] overflow-hidden">
      {/* Video Background */}
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
