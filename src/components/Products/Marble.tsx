'use client'
import { Montserrat } from "next/font/google"
import Image from "next/image"
import marble from "../../assets/marblw.jpeg"
import { IoIosArrowRoundForward } from "react-icons/io";
import marble2 from "../../assets/armani-2.webp"
import marble3 from "../../assets/armani-3.webp"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})
const Marble = () => {
   const marbleImages = [
  { src: marble, alt: "Best premium white marble flooring in Kottakkal with subtle veins" },
  { src: marble2, alt: "Best classic black marble flooring in Malappuram with polished finish" },
  { src: marble3, alt: "Best brown marble flooring in Kottakkal with golden patterns for a luxurious look" },
  { src: marble, alt: "Best green marble flooring in Malappuram with natural textures" },
  { src: marble, alt: "Best cream-colored marble flooring in Kottakkal with smooth surface" },
];

    const headingRef = useRef(null)
    const paragraphRef = useRef(null)
    useEffect(() => {
        if (headingRef.current) {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0.9,
                y: -30,
                duration: 1.5,
                ease: "power3.out"
            })
        }

        if (paragraphRef.current) {
            gsap.from(paragraphRef.current, {
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                x: 50,
                clipPath: "inset(0 0 100% 0)",
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            });

        }

            gsap.utils.toArray(".marble-image").forEach((imgEl) => {
                gsap.from(imgEl as HTMLElement, {
                    scrollTrigger: {
                        trigger: imgEl as HTMLElement,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    scale: 0.9,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power3.out"
                });
            });
    }, [])

    return (
        <div className={`relative overflow-hidden px-0 md:px-10 py-16 ${montserrat.className}`}>
            <h1 className="absolute text-[27vw] sm:text-[27vw] md:text-[22vw] lg:text-[16vw] xl:text-[12vw] font-bold text-black/5 uppercase top-3/12 left-2/6 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap hidden sm:block lg:block md:block">
                Marble
            </h1>
            <div>
                <h1 ref={headingRef} className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold">
                    Our Products
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20">

                <div ref={paragraphRef} className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-semibold mb-4">Marbles</h1>
                    <div className="px-8">
                        <p className="mb-2 ">
                            Explore an exclusive collection of Indian and imported marbles crafted in
                            stunning colours, elegant patterns, and tailored to every budget
                        </p>
                    </div>

                    <IoIosArrowRoundForward size={24} />
                </div>
                {/* first row */}
                {marbleImages.slice(0, 2).map((img, idx) => (
                    <div key={`first-${idx}`} className="hidden md:block z">
                        <div className="marble-image w-full h-80 overflow-hidden rounded-xs">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                                width={400}
                                height={256}
                            />
                        </div>
                    </div>
                ))}
                {/* second row */}
                {marbleImages.slice(2).map((img, idx) => (
                    <div key={`second-${idx}`}>
                        <div className="marble-image w-full h-80 overflow-hidden rounded-xs">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                                width={400}
                                height={256}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Marble