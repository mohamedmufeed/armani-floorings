'use client'
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Armani1 from "../../assets/armani-3.webp"
import Armani2 from "../../assets/armani-2.webp"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})

const Journey = () => {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const contenthRef = useRef<HTMLParagraphElement>(null)
    const imagesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (headingRef.current) {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                scale: 0.9,
                y: -30,
                duration: 1.5,
                ease: "power3.out"
            });
        }

        if (contenthRef.current) {
            gsap.from(contenthRef.current, {
                scrollTrigger: {
                    trigger: contenthRef.current,
                    start: "top 85%",
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 30,
                delay: 0.2,
                duration: 1.5,
                ease: "power3.out"
            });
        }

        if (imagesRef.current) {
            gsap.from(imagesRef.current, {
                scrollTrigger: {
                    trigger: imagesRef.current,
                    start: "top 85%",
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 50,
                duration: 2,
                ease: "power3.out"
            });
        }
    }, []);


    return (
        <div className={`relative overflow-hidden px-0 md:px-10 py-16 ${montserrat.className}`}>
            {/* banner */}
            <h1 className="absolute text-[25vw] sm:text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[12vw] font-bold text-black/5 uppercase top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap">
                Journey
            </h1>


            <div className="relative z-10">
                {/* left sdie */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="w-full lg:w-1/2 mt-5">
                        <h1 ref={headingRef} className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold">
                            Our Journey
                        </h1>
                        <div className="mt-15 " ref={contenthRef}>
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Laying the Foundation for Timeless Design
                            </h1>
                            <p className="mt-10 text-base md:text-lg text-gray-700">
                                With decades of experience in the flooring industry, we have grown from a small local supplier into a trusted brand offering high-end marble, granite, and stone solutions across homes and commercial spaces.
                                Every project we undertake reflects our commitment to craftsmanship, durability, and timeless elegance. Whether it’s a cozy living room or a grand hotel lobby, we believe the right flooring sets the tone for the entire space.
                            </p>
                            <button className="text-[#0A8DC1] mt-6 sm:mt-10 font-medium hover:underline">
                                Read More -
                            </button>
                        </div>
                    </div>

                    {/* right side */}
                    <div ref={imagesRef} className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="relative w-full h-[250px]">
                            <Image
                                src={Armani2}
                                alt="Armani 2"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover rounded-md"
                            />
                        </div>



                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/2">
                                <Image
                                    src={Armani1}
                                    alt="Armani 1"
                                    width={1200}
                                    height={150}
                                    className="object-cover rounded-md"
                                />
                            </div>

                            <div className="w-full sm:w-1/2 bg-gray-200 flex items-center justify-center text-white rounded-md min-h-[120px] h-[225px]">
                                <ArrowForwardIcon sx={{fontSize:40}} className="w-10 h-12 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey
