import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Buttons from './Buttons'

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const goToPrev = () => emblaApi?.goToPrev()
    const goToNext = () => emblaApi?.goToNext()

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {[1, 2, 3].map((_, index) => (
                        <div className="embla__slide flex items-center min-h-[80vh]" key={index}>

                            <div className="w-full max-w-6xl mx-auto px-6">

                                {/* This creates the "slightly off left" effect */}
                                <div className="lg:max-w-xl">

                                    {/* Top Buttons */}
                                    <div className="flex gap-4 mb-8 flex-wrap">
                                        <Buttons btnTitle="Learn More" btnStyles="bg-blue-400" />
                                        <Buttons btnTitle="Cryptocurrency" />
                                    </div>

                                    {/* Heading */}
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                        We are experts in financial{" "}
                                        <span className="relative inline-block">
                                            services
                                            <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-500"></span>
                                        </span>
                                    </h2>

                                    {/* Paragraph */}
                                    <p className="text-lg md:text-xl text-gray-700">
                                        Our mission is to create wealth for our clients irrespective
                                        of market flow.
                                    </p>

                                    {/* Bottom Buttons */}
                                    <div className="flex flex-wrap items-center gap-6 mt-10">
                                        <Buttons
                                            btnTitle="Login"
                                            btnStyles="bg-white"
                                            withArrow
                                        />
                                        <Buttons
                                            btnTitle="Open Account"
                                            btnStyles="bg-amber-400"
                                            withArrow
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}