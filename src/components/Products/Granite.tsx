import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io"
import { montserrat } from "./Marble"
import granite from "../../assets/grante.webp"
import granite2 from "../../assets/armani-2.webp"
import granite3 from "../../assets/armani-3.webp"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
const Granite = () => {
const granateImages = [
  { src: granite, alt: "White granite flooring with subtle gray veins" },
  { src: granite2, alt: "Polished black granite flooring with reflective surface" },
  { src: granite3, alt: "Brown granite flooring featuring golden mineral streaks" },
  { src: granite, alt: "Green granite flooring with natural earthy textures" },
  { src: granite, alt: "Smooth cream-colored granite flooring with fine grains" },
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

            gsap.utils.toArray(".granite-image").forEach((imgEl) => {
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
        <div className={`relative overflow-hidden px-0 md:px-10  ${montserrat.className}`}>
            <h1 className="absolute text-[27vw] sm:text-[27vw] md:text-[22vw] lg:text-[16vw] xl:text-[12vw] font-bold text-black/5 uppercase top-3/12 left-2/6 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap hidden sm:block lg:block md:block">
                Granite
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div ref={paragraphRef} className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-semibold mb-4">Granite</h1>
                    <div className="px-8">
                        <p className="mb-2 ">
                            Discover a handpicked range of Indian and imported marbles—blending natural beauty, rich textures, and exceptional value
                        </p>
                    </div>

                    <IoIosArrowRoundForward size={24} />
                </div>
                {/* first row */}
                {granateImages.slice(0, 2).map((img, idx) => (
                    <div key={`first-${idx}`} className="hidden md:block z">
                        <div className="granite-image w-full h-80 overflow-hidden rounded-xs">
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
                {granateImages.slice(2).map((img, idx) => (
                    <div key={`second-${idx}`}>
                        <div className="granite-image w-full h-80 overflow-hidden rounded-xs">
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

export default Granite