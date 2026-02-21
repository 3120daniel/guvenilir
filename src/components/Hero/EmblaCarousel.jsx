import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Styles from "./Embla.module.css"
import Buttons from '../Buttons'

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    // const goToPrev = () => emblaApi?.goToPrev()
    // const goToNext = () => emblaApi?.goToNext()

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    return (
        <div className={`${Styles.embla} bg-primary`}>
            <div className={Styles.embla__viewport} ref={emblaRef}>
                <div className={`${Styles.embla__container} text-white`}>
                    {[1, 2, 3].map((_, index) => (
                        <div className={`${Styles.embla__slide} flex items-center min-h-[80vh]`} key={index}>

                            <div className="w-full max-w-6xl mx-auto px-6">

                                {/* This creates the "slightly off left" effect */}
                                <div className="lg:max-w-xl">

                                    {/* Top Buttons */}
                                    <div className="rounded-md flex gap-4 mb-8 flex-wrap backdrop-blur-xs bg-white/30 max-w-60">
                                        <Buttons btnTitle="Learn More" btnStyles="bg-blue-400" />
                                        <Buttons btnTitle="Cryptocurrency" />
                                    </div>

                                    {/* Heading */}
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                        We are experts in financial{" "}
                                        <span className="relative inline-block">
                                            services
                                            <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary"></span>
                                        </span>
                                    </h2>

                                    {/* Paragraph */}
                                    <p className="text-lg md:text-xl">
                                        Our mission is to create wealth for our clients irrespective
                                        of market flow.
                                    </p>

                                    {/* Bottom Buttons */}
                                    <div className="flex flex-wrap items-center gap-6 mt-10">
                                        <Buttons
                                            btnTitle="Login"
                                            btnStyles="bg-white text-black"
                                            withArrow
                                        />
                                        <Buttons
                                            btnTitle="Open Account"
                                            btnStyles="bg-primary text-black"
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