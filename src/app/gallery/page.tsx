'use client'
import Navbar from '@/components/etc/Navbar'
import SocialMediaSidebar from '@/components/etc/SocialMediaSidebar'
import bannerImage from "../../assets/digital-lavender-style-interior-design.jpg"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { DM_Sans } from 'next/font/google'
import { IoIosArrowDropdown } from "react-icons/io";
import gsap from 'gsap'


const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['700'],
})

const page = () => {
    const buttonRef = useRef(null)
    const headingRef = useRef(null)
    const sentenceRef = useRef(null)
    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } })
        timeline
            .from(headingRef.current, { x: -150, opacity: 0, duration: 1.8 })
            .from(sentenceRef.current, { x: 150, opacity: 0, duration: 1 }, '-=0.7')

        gsap.to(buttonRef.current, {
            y: 10,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })
    }, [])
    return (
        <div>
            <div className='hidden sm:block md:block lg:block' >
                <SocialMediaSidebar />
            </div>
            <section>
                <div className="relative h-[80vh] w-full">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={bannerImage}
                            alt="Banner"
                            fill
                            className="object-cover w-full brightness-75"
                            priority
                        />
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full z-30">
                    <Navbar />
                </div>
                {/* heading Content */}
                <div className="absolute inset-0 flex mb-20 flex-col items-center justify-center z-20 text-white text-center px-4 md:px-8">
                    <h1
                        ref={headingRef}
                        className={`text-4xl md:text-6xl font-bold mb-4 ${dmSans.className}`}
                    >
                        Moments That Shaped
                        <span className="block mt-2 sm:mt-5">
                            Our Journey
                        </span>
                    </h1>

                    <p
                        ref={sentenceRef}
                        className="max-w-2xl text-md md:text-lg mb-6"
                    >
                        From humble beginnings to proud milestones — here's our story in pictures
                    </p>

                    <button
                        ref={buttonRef}
                        className=" text-white text-base px-6 py-3 rounded-full  font-semibold"
                    >
                        Scroll Down
                        <div className='flex justify-center py-2'>
                            <IoIosArrowDropdown size={20} />
                        </div>

                    </button>
                </div>
            </section>
        </div>
    )
}

export default page