'use client'
import Navbar from '@/components/etc/Navbar'
import SocialMediaSidebar from '@/components/etc/SocialMediaSidebar'
import bannerImage from "../../assets/blog-banner.jpg"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { DM_Sans } from 'next/font/google'
import { IoIosArrowDropdown } from "react-icons/io";
import gsap from 'gsap'
import Blogs from '@/components/Blog/Blogs'
import Footer from '@/components/etc/Footer'


const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['700'],
})

const Page = () => {
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
                        Style Stories & Smart
                        <span className="block mt-2 sm:mt-5">
                            Solutions
                        </span>
                    </h1>

                    <p
                        ref={sentenceRef}
                        className="max-w-2xl text-md md:text-lg mb-6"
                    >
                        Discover expert tips and fresh ideas to transform your home
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
            {/* Blogs section */}
            <section className='p-5 sm:p-10'>
                <Blogs />
            </section>

            {/* footer section */}
            <section >
                <Footer />
            </section>
        </div>
    )
}

export default Page