'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import bannerImage from "../assets/3d-rendering-modern-luxury-hotel-office-reception-lounge-hall.jpg"
import Navbar from '@/components/etc/Navbar'
import { DM_Sans } from 'next/font/google'
import gsap from 'gsap'
import Products from '@/components/Home/Products'
import Journey from '@/components/Home/Journey'
import WhyChoose from '@/components/Home/WhyChoose'
import Testimonials from '@/components/Home/Testimonials'
import SocialMediaSidebar from '@/components/etc/SocialMediaSidebar'
import Contact from '@/components/Home/Contact'
import Footer from '@/components/etc/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['700'],
})

const Page = () => {

  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // gasp animation
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } })

    timeline
      .from(headingRef.current, { x: -150, opacity: 0, duration: 1.8 })
      .from(paragraphRef.current, { x: 150, opacity: 0, duration: 1 }, '-=0.7')
      .to(buttonRef.current, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
  }, [])


  return (
    <div>
      <div className='hidden sm:block md:block lg:block' >
        <SocialMediaSidebar />
      </div>

      <section className="relative w-full h-screen">

        <div className="absolute inset-0 z-0">
          <Image
            src={bannerImage}
            alt="Banner"
            fill
            className="object-cover w-full h-full brightness-65"
            priority
          />
        </div>

        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4 md:px-8">
          <h1
            ref={headingRef}
            className={`text-4xl md:text-6xl font-bold mb-4 ${dmSans.className}`}
          >
            Elegant Flooring Solutions
            <span className="block mt-2 sm:mt-5">
              That Redefine Your Space
            </span>
          </h1>

          <p
            ref={paragraphRef}
            className="max-w-2xl text-md md:text-lg mb-6"
          >
            Discover a wide range of premium tiles and flooring materials designed to bring luxury and durability into every corner of your home or office.
          </p>

          <button
            ref={buttonRef}
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
            style={{ transform: 'translateY(30px)', opacity: 1 }}

          >
            Learn More
          </button>
        </div>
      </section>

      {/* products  */}

      <section className='p-5 sm:p-10'>
        <Products />
      </section>

      {/* journey */}
      <section className='p-5 sm:p-10'>
        <Journey />
      </section>

      {/* why choose us */}

      <section className='p-5 sm:p-10'>
        <WhyChoose />
      </section>

      {/* Testimonials section */}

      <section className='p-5 sm:p-10'>
        <Testimonials />
      </section>

      {/* contact section */}

      <section className='p-5 sm:p-10'>
        <Contact />
      </section>


      <section >
        <Footer/>
      </section>

    </div>
  )
}

export default Page
