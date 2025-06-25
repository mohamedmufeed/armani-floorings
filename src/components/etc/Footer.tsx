import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../assets/Armani Logo For Dev.png';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#EEFAFF] px-6 md:px-10 py-12 text-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Company Info */}
            <div className="space-y-4">
              <Image
                src={Logo}
                alt="Armani Floorings Logo"
                width={Logo.width}
                height={Logo.height}
                className="w-60 h-auto"
              />
              <p className="text-sm leading-relaxed max-w-sm">
                Armani Floorings offers quality flooring with expert craftsmanship in Arichol, Kottakkal, delivering elegance and lasting durability.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-[#0A8DC1] pb-1 inline-block">
                Quick Links
              </h2>
              <nav className="grid grid-cols-2 gap-y-2 gap-x-4">
                <a href="/" className="text-sm hover:text-[#0A8DC1] transition-colors">Home</a>
                <a href="/gallery" className="text-sm hover:text-[#0A8DC1] transition-colors">Gallery</a>
                <a href="/products" className="text-sm hover:text-[#0A8DC1] transition-colors">Products</a>
                <a href="/blog" className="text-sm hover:text-[#0A8DC1] transition-colors">Blog</a>
              </nav>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-[#0A8DC1] pb-1 inline-block">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/armanifloorings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0A8DC1]  transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/share/1A1xDji2XZ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0A8DC1]  transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://wa.me/+917034136736"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0A8DC1]  transition-all"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@armanifloorings"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0A8DC1]  transition-all"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-[#EEFAFF] px-6 md:px-10 py-4">
        <div className="border-t border-gray-300"></div>
        <p className="text-xs mt-4 text-gray-500 text-start">
          © {new Date().getFullYear()} <span className="text-[#0A8DC1]">Armani Floorings</span>. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
