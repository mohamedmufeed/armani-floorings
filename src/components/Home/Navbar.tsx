'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "../../assets/Armani Logo For Dev.png"
import { Questrial } from 'next/font/google'
import { Menu, X } from 'lucide-react' // optional icon library

const questrial = Questrial({ subsets: ['latin'], weight: '400' })

const Navbar = () => {
    const navItems = ["Home", "Products", "Gallery", "Blog", "Testimonials", "Contact Us"]
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className='w-full '>
            <div className=' mx-auto flex justify-between items-center p-4'>

                {/* Logo */}
                <div className='flex items-center'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        width={Logo.width}
                        height={Logo.height}
                    />
                </div>

                {/* Desktop Nav */}
                <div className='hidden md:flex space-x-6 px-0 sm:px-10 lg:px-10'>
                    {navItems.map((item, index) => (
                        <p
                            key={index}
                            className={`
        ${questrial.className}
        text-md font-bold text-black
        transform transition-all duration-200
        hover:scale-105 hover:text-[#0A8DC1] hover:font-semibold
        cursor-pointer
      `}
                        >
                            {item}
                        </p>
                    ))}
                </div>



                {/* Mobile Menu Icon */}
                <div className='md:hidden'>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className='md:hidden px-4 pb-4'>
                    <div className='flex flex-col space-y-3 bg-white'>
                        {navItems.map((item, index) => (
                            <h1 key={index} className={`
                        ${questrial.className}
        text-base text-gray-700
        hover:scale-105
        hover:font-semibold
        hover:text-[#0A8DC1]
        transition-all duration-200 cursor-pointer
      `}>
                                {item}
                            </h1>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
