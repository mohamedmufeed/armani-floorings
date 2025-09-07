import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const testimonials = [
  {
    name: "Mohamed Mufeed",
    date: "19 May 2025",
    title: "Choosing the Right Flooring for Every Room",
    content:
      "Flooring truly transformed my space! Armani Floorings helped us choose the perfect materials to match our style and needs. The quality and finish exceeded expectations!",
  },
  {
    name: "Aisha Rahman",
    date: "02 June 2025",
    title: "Exceptional Service and Durability",
    content:
      "Armani Floorings exceeded my expectations. The team was friendly and professional, and the materials used were top-notch. I’m impressed with how durable and beautiful  look!",
  },
  {
    name: "Faheem Ali",
    date: "10 June 2025",
    title: "Perfect for Modern Interiors",
    content:
      "I was looking for modern, minimalist flooring for my startup office. Armani Floorings delivered just that. Clean lines, smooth finish, and hassle-free installation!",
  },
  {
    name: "Sarah John",
    date: "15 June 2025",
    title: "Stylish & Affordable",
    content:
      "I wanted a stylish yet budget-friendly flooring option. Armani Floorings delivered exactly that – high-quality floors at a great price!",
  },
  {
    name: "Imran Khan",
    date: "20 June 2025",
    title: "Luxury with Comfort",
    content:
      "Their flooring gave my villa a premium look while still being comfortable for daily living. Highly recommend Armani Floorings!",
  },
];

const Testimonials = () => {
  const headingRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement | null>(null)
  useEffect(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        y: -30,
        duration: 1,
        ease: "power3.out",
      })
    }
    if (cardsRef.current) {
      cardsRef.current.forEach((card, index) => {
        if (!card) return
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: index % 2 == 0 ? 100 : -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
      })
    }
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top center",
          end: "bottom bottom",
          scrub: true
        }
      })
    }
  }, [])

  return (
    <div className={`relative overflow-hidden px-1 md:px-10 py-28 ${montserrat.className} testimonials-section`}>

      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 300 200 C 500 300, 200 600, 600 600 S 300 1200, 600 1600"
          stroke="#0A8DC1"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <div className="relative z-10 mb-10">
        <h1 className="absolute text-[27vw] sm:text-[27vw] md:text-[22vw] lg:text-[16vw] xl:text-[12vw] font-bold text-black/5 uppercase top-2/2 left-6/12 -translate-x-1/2 -translate-y-1/12 z-0 pointer-events-none whitespace-nowrap">
          Testimonials
        </h1>

        <h1
          className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold relative z-10"
          ref={headingRef}
        >
          What Our Clients Say
        </h1>
      </div>

      <div>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className="w-full md:w-2/3 lg:w-1/2 rounded-2xl shadow-md overflow-hidden">
                <div className="bg-[#73cbee] rounded-t-2xl p-6 flex justify-between items-center shadow-md">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-white text-sm">{testimonial.date}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                </div>

                <div className="bg-[#F6F6F6] rounded-b-2xl p-6 shadow-md">
                  <h4 className="text-xl font-semibold mb-2">{testimonial.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                  <button className="text-[#0A8DC1] mt-4 font-medium hover:underline">
                    View More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
