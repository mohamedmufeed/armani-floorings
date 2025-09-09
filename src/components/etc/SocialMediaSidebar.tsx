'use client'

import React, { useEffect, useRef, useState } from 'react'

import { Instagram, Facebook, Youtube  } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const SocialMediaSidebar = () => {
    const [hide, setHide] = useState(false)
    const footerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const footer = document.querySelector('footer') 
        if (!footer) return

        footerRef.current = footer

        const observer = new IntersectionObserver(
            ([entry]) => {
                setHide(entry.isIntersecting) 
            },
            {
                root: null,
                threshold: 0.1,
            }
        )

        observer.observe(footer)

        return () => {
            if (footer) observer.unobserve(footer)
        }
    }, [])

    return (
        <div
            className={`fixed bg-black/70 top-1/2 p-1 rounded-r-3xl transform -translate-y-1/2 z-50 flex flex-col space-y-3 transition-all duration-500 ${
                hide ? 'opacity-0 translate-x-full pointer-events-none' : 'opacity-100'
            }`}
        >
            <a
                href="https://www.instagram.com/armanifloorings/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:scale-110 text-white transition-transform"
                aria-label="Instagram"
            >
                <Instagram size={20} />
            </a>

            <a
                href="https://www.facebook.com/share/1A1xDji2XZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:scale-110 text-white transition-transform"
                aria-label="Facebook"
            >
                <Facebook size={20} />
            </a>

            <a
                href="https://wa.me/+917034136736"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:scale-110 text-white transition-transform"
                aria-label="WhatsApp"
            >
                <WhatsAppIcon  />
            </a>

            <a
                href="https://www.youtube.com/@armanifloorings"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:scale-110 text-white transition-transform"
                aria-label="YouTube"
            >
                <Youtube size={20} />
            </a>
        </div>
    )
}

export default SocialMediaSidebar
