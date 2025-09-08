import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io"
import { montserrat } from "./Marble"
import tiles from "../../assets/TileStone1.jpg"
import tiles2 from "../../assets/armani-2.webp"
import tiles3 from "../../assets/armani-3.webp"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
const Tiles = () => {
const tileImages = [
  { src: tiles, alt: "Best premium white tile flooring in Kottakkal with subtle gray veins for modern interiors" },
  { src: tiles2, alt: "Best polished black tile flooring in Malappuram with reflective surface for a sleek look" },
  { src: tiles3, alt: "Best brown tile flooring in Kottakkal with golden patterns for a warm, rich finish" },
  { src: tiles, alt: "Best green textured tile flooring in Malappuram with natural stone-like appearance" },
  { src: tiles, alt: "Best cream-colored tile flooring in Kottakkal with smooth fine grain finish" },
];



    const paragraphRef = useRef(null)
    useEffect(() => {
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

            gsap.utils.toArray(".tiles-image").forEach((imgEl) => {
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

        }

    }, [])
    return (
        <div className={`relative overflow-hidden px-0 md:px-10 py-36 ${montserrat.className}`}>
            <h1 className="absolute text-[27vw] sm:text-[27vw] md:text-[22vw] lg:text-[16vw] xl:text-[12vw] font-bold text-black/5 uppercase top-3/12 left-2/6 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap hidden sm:block lg:block md:block">
               Tiles
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div ref={paragraphRef} className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-semibold mb-4">Tiles</h1>
                    <div className="px-8">
                        <p className="mb-2 ">
                          Explore a curated collection of stylish and durable tiles—offering vibrant designs, versatile finishes, and lasting performance for every space
                        </p>
                    </div>

                    <IoIosArrowRoundForward size={24} />
                </div>
                {/* first row */}
                {tileImages.slice(0, 2).map((img, idx) => (
                    <div key={`first-${idx}`} className="hidden md:block z">
                        <div className="tiles-image w-full h-80 overflow-hidden rounded-xs">
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
                {tileImages.slice(2).map((img, idx) => (
                    <div key={`second-${idx}`}>
                        <div className="tiles-image w-full h-80 overflow-hidden rounded-xs">
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

export default Tiles