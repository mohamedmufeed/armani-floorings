import React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const SocialMediaSidebar = () => {
    return (
        <div
            className="fixed bg-black/70 top-1/2 p-1 rounded-r-3xl transform -translate-y-1/2 z-50 flex flex-col space-y-3"
            style={{}}
        >
            <a
                href="https://www.instagram.com/armanifloorings/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full  hover:scale-110 text-white  "
                aria-label="Instagram"
            >
                <FaInstagram size={20} />
            </a>

            <a
                href="https://www.facebook.com/share/1A1xDji2XZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full  hover:scale-110 text-white  "
                aria-label="Facebook"
            >
                <FaFacebookF size={20} />
            </a>

            <a
                href="https://wa.me/+917034136736"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full  hover:scale-110 text-white  "
                aria-label="WhatsApp"
            >
                <FaWhatsapp size={20} />
            </a>

            <a
                href="https://www.youtube.com/@armanifloorings"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full  hover:scale-110 text-white  "
                aria-label="YouTube"
            >
                <FaYoutube size={20} />
            </a>
        </div>
    )
}

export default SocialMediaSidebar
