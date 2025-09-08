import React, { useEffect, useRef } from 'react'
import ArmaniInagruation from "../../assets/Armani inagruation.jpg"
import ArmaniCalender from "../../assets/Armani calneder sharing.jpg"
import Image from 'next/image'
import { montserrat } from '../Blog/Blogs'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Journey = () => {
    const headingRef = useRef(null)
    useEffect(() => {
        if (headingRef.current) {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
                ,
                opacity: 0,
                scale: 0.9,
                y: -30,
                duration: 1,
                ease: "power3.out",
            })
        }

        const texts = gsap.utils.toArray<HTMLElement>(".journey-text")
        texts.forEach((text) => {
            if (!text) return
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                x: 50,
                clipPath: "inset(0 0 100% 0)",
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })
        })
        const images = gsap.utils.toArray<HTMLElement>(".journey-image")
        images.forEach((image) => {
            if (!image) return
            gsap.from(image, {
                scrollTrigger: {
                    trigger: image,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                scale: 0.9,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            })
        })

    }, [])
    const journeys = [
        {
            heading: "Our Beginning",
            subText:
                "Armani Floorings proudly inaugurated its showroom in Arichol, Puthoor, Kottakkal, marking the start of our commitment to delivering premium flooring solutions. This milestone was more than just an opening — it was the foundation of our vision to bring quality, durability, and elegant designs to homes and businesses across Kerala. With the trust of our early customers, our journey began with passion and purpose. Over the years, we have expanded our collection to include a wide range of tiles, wooden flooring, and modern interior solutions designed to elevate every living and working space. Our beginning was built on the principles of trust, craftsmanship, and affordability — values that continue to guide us as we grow and serve customers throughout Malappuram and beyond.",
            image: ArmaniInagruation,
        },
        {
            heading: "Calendar Sharing with KFTU",
            subText:
                "As part of our community engagement, Armani Floorings collaborated with KFTU by sharing specially designed calendars. This initiative helped us strengthen relationships, spread awareness about our products, and connect with customers in a meaningful way. The calendars were more than just gifts — they were a reflection of our brand identity, showcasing our flooring designs and reminding customers of our promise of quality. This campaign improved our visibility within the community and highlighted our dedication to building strong local connections. By reaching hundreds of families and businesses through this initiative, Armani Floorings took a meaningful step forward in reinforcing trust, staying top-of-mind, and promoting our vision of elegant, durable, and stylish flooring solutions across Kerala.",
            image: ArmaniCalender,
        },
    ];


    return (
        <div
            className={`relative overflow-hidden px-2 sm:px-6 md:px-10 py-16 ${montserrat.className}`}
        >
            <div className="relative z-10 mb-10">
                <h1 className="absolute text-[27vw] sm:text-[27vw] md:text-[22vw] lg:text-[16vw] xl:text-[12vw] font-bold text-black/5 uppercase top-2/2 left-3/12 -translate-x-1/2 -translate-y-1/12 z-0 pointer-events-none whitespace-nowrap">
                    Gallery
                </h1>
                <h1
                    ref={headingRef}
                    className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold relative z-10"
                >
                    Our Journey
                </h1>
            </div>

            {journeys.map((journey, index) => (
                <div key={index} className="px-3 lg:px-6 mb-12">
                    <div
                        className={`flex flex-col md:flex-row gap-6 pb-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div className="md:w-2/3">
                            <h2 className="text-xl md:text-2xl font-semibold mb-7">
                                {journey.heading}
                            </h2>
                            <p className=" journey-text text-gray-600 leading-relaxed mb-5">{journey.subText}</p>
                        </div>
                        <div className="md:w-1/3 flex items-center">
                            <Image
                                src={journey.image}
                                alt={journey.heading}
                                className=" journey-image rounded-md shadow-lg object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {index !== journeys.length - 1 && (
                        <hr className="border-t border-gray-300 my-8" />
                    )}
                </div>
            ))}

        </div>
    )
}

export default Journey
