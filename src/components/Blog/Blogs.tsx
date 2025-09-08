import { Montserrat } from "next/font/google"
import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

gsap.registerPlugin(ScrollTrigger)

const blogs = [
  {
    title: "What is the Difference Between Tiles and Marble for Your Home in Kottakkal?",
    date: "Sep 8, 2025",
    text: `When it comes to flooring, marble and tiles are two popular options. If you’re in Kottakkal and confused about which one to choose, here’s a simple guide:

Appearance: Marble gives a luxurious, natural look with unique veins, while tiles come in various designs and colors.

Durability: Marble is durable but can scratch; tiles are more resistant to wear and tear.

Maintenance: Tiles are easier to clean; marble needs polishing.

Cost: Tiles are generally cheaper, marble is a premium option.

User Doubts Answered:
- "Can I use marble in my kitchen?" → Yes, but consider regular maintenance.
- "Are tiles slippery?" → Some tiles have anti-slip textures; ask our experts.

Visit Armani Floorings in Kottakkal for premium marble and tile options.`
  },
  {
    title: "Is Wooden Flooring a Good Choice for Indian Homes?",
    date: "Sep 8, 2025",
    text: `Wooden flooring brings warmth and elegance. But is it ideal for Indian weather?

Pros: Elegant, comfortable, adds value to your home.
Cons: Sensitive to moisture, can scratch easily, needs regular maintenance.
Alternatives: Laminated wood or vinyl flooring that mimics wood but is more durable in humid climates.

User Questions Answered:
- "Will wood flooring last in Kerala’s humidity?" → Only if treated properly; otherwise, tiles or marble are better.
- "Can I clean it with water?" → Minimal water; use specialized cleaners.`
  },
  {
    title: "How to Choose the Best Marble Tiles in Kottakkal for Your Home",
    date: "Sep 8, 2025",
    text: `Marble tiles can transform your home, but choosing the right type is key.

1. Type of Marble: White, black, beige, or green marble – choose according to room size and décor.
2. Finish: Polished, honed, or tumbled – affects appearance and slip resistance.
3. Thickness & Size: Thicker tiles are durable; larger tiles create a modern look.

User FAQs:
- "Which marble is best for living rooms?" → Light-colored polished marble creates elegance.
- "Can I use marble in bathrooms?" → Yes, prefer honed for slip resistance.

Visit Armani Floorings in Kottakkal to see our premium marble tile collection.`
  },
  {
    title: "Top 5 Tips for Maintaining Granite Floors in Kottakkal Homes",
    date: "Sep 8, 2025",
    text: `Granite flooring is durable, but proper care ensures long-lasting beauty:

1. Clean spills immediately to avoid stains.
2. Use mild detergent and avoid acidic cleaners.
3. Polish granite every 6–12 months.
4. Avoid dragging heavy furniture.
5. Seal granite surfaces for extra protection.

User FAQs:
- "How often should I polish granite floors?" → Every 6–12 months depending on foot traffic.
- "Can granite floors be used in kitchens?" → Yes, granite is perfect for high-traffic and kitchen areas.

Visit Armani Floorings in Kottakkal for premium granite options.`
  },
  {
    title: "Affordable vs Premium Tiles in Kottakkal – Which Should You Choose?",
    date: "Sep 8, 2025",
    text: `Choosing between affordable and premium tiles can be tricky. Here’s a simple guide:

- Affordable Tiles: Budget-friendly, available in many designs, durable for moderate use.
- Premium Tiles: Higher quality, polished finish, more elegant, longer-lasting.

User Doubts Answered:
- "Are premium tiles worth the extra cost?" → Yes, especially for living rooms and offices where aesthetics matter.
- "Can I mix affordable and premium tiles?" → Yes, use premium in main areas and affordable in secondary spaces.

Armani Floorings in Kottakkal offers both options with expert guidance.`
  }
];

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
                    {blog.text.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
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
