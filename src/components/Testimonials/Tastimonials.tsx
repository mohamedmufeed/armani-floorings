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
    title: "Best Flooring Solutions in Kottakkal",
    content:
      "Armani Floorings in Kottakkal transformed my home with premium marble and tile flooring. The team helped me choose the perfect material for every room. Highly recommended for quality and style!",
  },
  {
    name: "Aisha Rahman",
    date: "02 June 2025",
    title: "Premium & Durable Flooring in Malappuram",
    content:
      "I had a great experience with Armani Floorings in Malappuram. Their premium flooring options are both stylish and long-lasting. The team is professional and friendly!",
  },
  {
    name: "Faheem Ali",
    date: "10 June 2025",
    title: "Modern & Elegant Floors in Kottakkal",
    content:
      "I wanted modern flooring for my office, and Armani Floorings delivered. The floors are smooth, elegant, and hassle-free. Truly the best flooring service in Kottakkal!",
  },
  {
    name: "Sarah John",
    date: "15 June 2025",
    title: "Affordable Premium Flooring in Malappuram",
    content:
      "Looking for budget-friendly yet premium floors? Armani Floorings in Malappuram offers stylish and high-quality flooring options at great prices. Highly recommended!",
  },
  {
    name: "Imran Khan",
    date: "20 June 2025",
    title: "Luxury Flooring in Kottakkal",
    content:
      "Our villa looks amazing thanks to Armani Floorings in Kottakkal. Their luxury flooring combines style and comfort perfectly. Best choice for premium homes!",
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
