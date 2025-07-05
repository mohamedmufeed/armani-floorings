'use client'
import Image from "next/image"
import Granaite from "../../assets/grante.webp"
import Tile from "../../assets/TileStone1.jpg"
import { Montserrat } from 'next/font/google'
import Marble from "../../assets/marblw.jpeg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";



gsap.registerPlugin(ScrollTrigger)


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})


const ProductDetails = [
  {
    img: Marble,
    alt: "Premium Marble Flooring by Armani Floorings",
    name: "Marble",
    subheading: "Timeless Elegance in Every Slab",
    description: "At Armani Floorings, we offer a curated selection of premium marble perfect for timeless and elegant interiors.",
    detail: "Marble is the epitome of luxury and refinement. Ideal for living rooms, foyers, and upscale interiors, it adds a classic aesthetic with a polished finish that lasts for generations."
  },
  {
    img: Granaite,
    alt: "Durable Granite Flooring for Kitchens and Bathrooms",
    name: "Granite",
    subheading: "Strength Meets Sophistication",
    description: "Granite options that combine strength with style for a long-lasting impact.",
    detail: "Known for its durability and natural patterns, granite is a perfect choice for kitchens, bathrooms, and outdoor areas. Its resistance to heat and scratches makes it both practical and stylish."
  },
  {
    img: Tile,
    alt: "Wood-inspired Stylish Tiles by Armani Floorings",
    name: "Tiles",
    subheading: "Versatile, Stylish, and Easy to Maintain",
    description: "Bring warmth and elegance with our wood-inspired tile solutions.",
    detail: "Our tile range offers a blend of textures and finishes—from wood to stone aesthetics—making it suitable for any space. It’s easy to clean, highly adaptable, and available in various colors and sizes."
  }
];



const Products = () => {
    const cardsRef = useRef<HTMLDivElement[]>([])
    const headingRef = useRef<HTMLDivElement>(null)
    const subHeadingRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if (headingRef.current) {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                scale: 0.9,
                y: -30,
                duration: 1,
                ease: "power3.out"
            });
        }

        if (subHeadingRef.current) {
            gsap.from(subHeadingRef.current, {
                scrollTrigger: {
                    trigger: subHeadingRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });
        }

        cardsRef.current.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 50,
                duration: 1.5,
                delay: index * 0.1,
                ease: 'power3.out',
            })
        })
    }, [])

    return (
        <div className={`relative overflow-hidden px-0 md:px-10 py-16 ${montserrat.className}`}>

            <h1 className="absolute text-[25vw] sm:text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[12vw] font-bold text-black/5 uppercase top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap">
                Products
            </h1>

            <div className="relative z-10">
                <div className="mb-12 sm:text-start">
                    <h1 className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold" ref={headingRef}>
                        Our Products
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-full" ref={subHeadingRef}>
                        At Armani Floorings, we offer a curated selection of premium flooring solutions crafted to elevate any space. From luxurious marble and granite to modern tiles and wooden textures, our products combine durability, aesthetics, and innovation.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 xl:gap-20">
                    {ProductDetails.map((product, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el
                            }}
                            className="relative rounded-lg overflow-hidden shadow-lg h-full group"
                        >

                            <div className="h-64 sm:h-72 md:h-80 lg:h-60 xl:h-64 relative">
                                <Image
                                    src={product.img}
                                    alt={product.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover rounded-t-xl"
                                />
                            </div>



                            <div className="bg-[#0A8DC1] text-white p-5 h-full">
                                <h2 className="font-bold text-xl">{product.name}</h2>
                                <p className="mt-4 text-sm">{product.description}</p>
                            </div>


                            <div className="absolute inset-0 bg-black/60 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center text-center">
                                <h3 className="text-xl font-semibold mb-4">{product.subheading}</h3>
                                <p className="text-sm mb-4 max-w-xs">{product.detail}</p>
                                <button className="text-white font-semibold px-5 py-2 mt-4 flex items-center gap-4 transition-all duration-300 rounded-full cursor-pointer">
                                    Explore {product.name}
                                    <FaArrowRightLong className="text-white text-sm mt-[1px]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Products
