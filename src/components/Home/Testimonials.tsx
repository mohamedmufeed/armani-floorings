'use client'
import { Montserrat } from 'next/font/google'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})

const testimonials = [
    {
        name: "Mohamed Mufeed",
        date: "19 May 2025",
        title: "Choosing the Right Flooring for Every Room",
        content:
            "Flooring truly transformed my space! Whether it was our cozy home makeover , Armani Floorings helped us choose the perfect materials to match our style and needs. The quality and finish exceeded expectations!",
    },
    {
        name: "Aisha Rahman",
        date: "02 June 2025",
        title: "Exceptional Service and Durability",
        content:
            "Armani Floorings exceeded my expectations. The team was friendly and professional, and the materials used were top-notch. I’m impressed with how durable and beautiful our new floors look!",
    },
    {
        name: "Faheem Ali",
        date: "10 June 2025",
        title: "Perfect for Modern Interiors",
        content:
            "I was looking for modern, minimalist flooring for my startup office. Armani Floorings delivered just that. Clean lines, smooth finish, and hassle-free installation!",
    },
];


const Testimonials = () => {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const contenthRef = useRef<HTMLHeadingElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const testimonialRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {

        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const testimonial = testimonials[index];

    useEffect(() => {
        if (headingRef.current) {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: -30,
                scale: 0.95,
                duration: 1,
                ease: 'power3.out',
            })
        }

        if (contenthRef.current) {
            gsap.from(contenthRef.current, {
                scrollTrigger: {
                    trigger: contenthRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 30,
                delay: 0.2,
                duration: 1,
                ease: 'power3.out',
            })
        }

        if (buttonRef.current) {
            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 20,
                delay: 0.4,
                duration: 1,
                ease: 'power3.out',
            })
        }

        if (cardRef.current) {
            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: 50,
                duration: 2,
                ease: 'power3.out',
            })
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (testimonialRef.current) {
                gsap.to(testimonialRef.current, {
                    opacity: 0,
                    x: 70,
                    duration: 1,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setIndex((prev) => (prev + 1) % testimonials.length);

                        gsap.fromTo(testimonialRef.current,
                            { opacity: 0, y: -20 },
                            {
                                opacity: 1,
                                x: 0,
                                duration: 1,
                                ease: "power2.inOut"

                            }
                        )
                    }
                })
            }
        }, 4000)

        return ()=>clearInterval(interval)
    }, [])

    return (
        <div className={`relative overflow-hidden px-4 md:px-10 py-28 ${montserrat.className}`}>
            {/* banner */}
            <h1 className="absolute text-[25vw] sm:text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[12vw] font-bold text-black/5 uppercase top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap">
                Testimonials
            </h1>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 mt-2">
                {/* left side */}
                <div className="lg:w-1/2 space-y-4 mt-10 lg:mt-0">
                    <h2 ref={headingRef} className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold">
                        What Our Clients Say
                    </h2>
                    <h1 ref={contenthRef} className="text-3xl md:text-4xl font-bold tracking-wide">
                        Inspiration ideas, and expert tips to elevate your living space
                    </h1>
                    <button ref={buttonRef} className="text-[#0A8DC1] mt-4 sm:mt-6 font-medium hover:underline">
                        Read More →
                    </button>
                </div>

                {/* right side */}
                <div ref={cardRef} className="lg:w-1/2 space-y-4">
                    <div ref={testimonialRef}>
                        <div className="bg-[#91C8DD] rounded-t-2xl p-6 flex justify-between items-center shadow-md">
                            <div>
                                <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                                <p className="text-white text-sm">{testimonial.date}</p>
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full" />
                        </div>

                        <div className="bg-[#F6F6F6] rounded-b-2xl p-6 shadow-md">
                            <h4 className="text-xl font-semibold mb-2">
                                {testimonial.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                {testimonial.content}
                            </p>
                            <button className="text-[#0A8DC1] mt-4 font-medium hover:underline">
                                View More →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials
