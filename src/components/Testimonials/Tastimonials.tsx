import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import CenterPath from "./CenterPath";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
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
  
  }, [])

  return (
    <div className={`relative overflow-hidden px-1 md:px-10 py-28 ${montserrat.className} testimonials-section`}>

      

  <CenterPath triggerClass="testimonials-section"  />

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
              <div className="w-full md:w-1/2 lg:w-2/5 rounded-2xl shadow-md overflow-hidden">
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
