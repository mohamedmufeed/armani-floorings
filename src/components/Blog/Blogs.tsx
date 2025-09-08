import { Montserrat } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

gsap.registerPlugin(ScrollTrigger)

const blogs = [
  {
    title: "What is the difference between tile and marble",
    date: "Apr 30, 2025",
    text: "When it comes to flooring, marble and tiles are two of the most popular choices homeowners and designers consider. But how do you choose the right one for your space? Understanding their differences in appearance, durability, cost, and maintenance can help you make a smarter investment for your home or business     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur expedita veniam laudantium? Tempora placeat cupiditate saepe commodi dolorum eum ratione similique consectetur? Porro laudantium officiis ex facilis ad temporibus unde!"
  },
  {
    title: "Is wooden flooring a good choice for Indian homes?",
    date: "May 10, 2025",
    text: "Wooden flooring brings warmth and elegance, but is it practical for Indian weather conditions and lifestyle? Learn about pros, cons, maintenance, and alternatives before making a decision. " 
  },
  
]
const Blogs = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const contentRefs = useRef<HTMLDivElement[]>([])
  const [expandBlogIndex, setExpandBlogIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    const content = contentRefs.current[index]
    if (!content) return

    const isExpanded = expandBlogIndex === index

    if (isExpanded) {
      gsap.to(content, {
        height: 80,
        duration: 0.6,
        ease: "power2.inOut",
      })
      setExpandBlogIndex(null)
    } else {
      gsap.fromTo(
        content,
        { height: content.clientHeight },
        {
          height: content.scrollHeight,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            content.style.height = "auto" 
          },
        }
      )
      setExpandBlogIndex(index)
    }
  }

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

    const blogCards = gsap.utils.toArray<HTMLElement>(".blog-card")
    gsap.from(blogCards, {
      scrollTrigger: {
        trigger: blogCards[0],
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    })
  }, [])

  return (
    <div
      className={`relative overflow-hidden px-2 sm:px-6 md:px-10 py-16 ${montserrat.className}`}
    >
      <div className="relative z-10 mb-10">
        <h1 className="absolute text-[27vw] sm:text-[27vw] md:text-[22vw] lg:text-[16vw] xl:text-[12vw] font-bold text-black/5 uppercase top-2/2 left-3/12 -translate-x-1/2 -translate-y-1/12 z-0 pointer-events-none whitespace-nowrap">
          Blogs
        </h1>

        <h1
          ref={headingRef}
          className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold relative z-10"
        >
          Our Blogs
        </h1>
      </div>

      {/* Blogs List */}
      <div className="relative z-10 space-y-14 sm:p-5 md:p-5 lg:p-5">
        {blogs.map((blog, index) => {
          const isExpanded = expandBlogIndex === index
          return (
            <div key={index} className="blog-card space-y-4 border-b pb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-500 font-medium">{blog.date}</p>
                <div
                  ref={(el) => {
                    if (el) contentRefs.current[index] = el
                  }}
                  className="overflow-hidden"
                  style={{ height: "80px" }}
                >
                  <p className="text-gray-700 text-base leading-relaxed">
                    {blog.text}
                  </p>
                </div>
              </div>

              <div className="flex justify-end px-4 sm:px-10 ">
                {blog.text.length >= 160 && (
                  <button
                    className="text-[#0A8DC1] font-medium hover:underline transition-all duration-200"
                    onClick={() => toggleExpand(index)}
                  >
                    {isExpanded ? "Read Less ↑" : "Read More →"}
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blogs
