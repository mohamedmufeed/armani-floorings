'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../assets/Armani Logo For Dev.png"
import { Menu, X } from 'lucide-react'


const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact Us", path: "/#footer-section" }
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className='w-full '>
            <div className='mx-auto flex justify-between items-center p-4'>
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
                        <Link
                            key={index}
                            href={item.path}
                            className={`
            
                                text-md font-medium text-white
                                transform transition-all duration-200
                                hover:scale-105 hover:text-[#0A8DC1] hover:font-semibold
                                cursor-pointer
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className='md:hidden text-white'>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                
                <div className='md:hidden   w-full px-4  '>
                    <div className='flex flex-col space-y-3 bg-white/10 backdrop-blur-sm px-4 py-10 rounded-2xl text-center'>
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className={`
                                    text-lg text-white
                                    hover:scale-105
                                    font-medium
                                    hover:font-semibold
                                    hover:text-[#0A8DC1]
                                    transition-all duration-200 cursor-pointer 
                                `}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
