'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Montserrat } from "next/font/google"
import { FaLocationDot, FaRegClock } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactFormData, ContactFormErrors } from '@/types/contactTypes';

gsap.registerPlugin(ScrollTrigger);




const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const Contact = () => {

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };



  useEffect(() => {
  if (headingRef.current) {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: -40,
      duration: 1.2,
      ease: 'power3.out',
    });
  }

  if (mapRef.current) {
    gsap.from(mapRef.current, {
      scrollTrigger: {
        trigger: mapRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 1.4,
      ease: 'power3.out',
    });
  }

  if (infoRef.current) {
    gsap.from(infoRef.current, {
      scrollTrigger: {
        trigger: infoRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -50,
      duration: 1.4,
      ease: 'power3.out',
    });
  }

  if (formRef.current) {
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: 50,
      duration: 1.4,
      ease: 'power3.out',
    });
  }
}, []);



  return (
    <div className={`relative overflow-hidden px-4 md:px-10 py-16 ${montserrat.className}`}>
      <div ref={headingRef}>
        <h1 className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold">
          Contact Us
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-10 ml-1">
          Explore The Location
        </h2>
      </div>


      <div  ref={mapRef} className="mt-10 w-full max-w-7xl mx-auto aspect-[16/9]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4589.589964144738!2d76.0213209757051!3d11.004816989158181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b54262f6fcd3%3A0xc855079b6fd93422!2sArmani%20floorings!5e1!3m2!1sen!2sin!4v1750242133029!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Armani Floorings Location Map"
          className="w-full h-full rounded-lg shadow-md"
        />
      </div>

   
      <div className="relative overflow-hidden h-full mt-20">
        <h1 className="absolute text-[25vw] sm:text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[12vw] font-bold text-black/5 uppercase top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap">
          Contact
        </h1>


        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mt-5 mb-10">
            Have a question or project in mind? We're here to help.
          </h3>

          <div ref={infoRef} className="flex flex-col md:flex-row justify-between gap-10">

            <div className="flex-1 space-y-6 p-6">
              <div className="flex items-start gap-4 p-4  rounded-lg transition-colors duration-200">
                <FaLocationDot className=" text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Address</h4>
                  <p className="text-gray-700">Arichol, Kottakkal, Malappuram Dist, Kerala, India, PIN 676503</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4  rounded-lg transition-colors duration-200">
                <FaPhoneAlt className=" text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-gray-700">
                    <span className="hover: transition-colors cursor-pointer">
                      +91 98765 43210
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4  rounded-lg transition-colors duration-200">
                <MdEmail className=" text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-700">
                    <span className="hover: transition-colors cursor-pointer">
                      contact@armanifloorings.com
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4  rounded-lg transition-colors duration-200">
                <FaRegClock className=" text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Opening Hours</h4>
                  <p className="text-gray-700">Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="flex-1 rounded-lg">
              <div ref={formRef}  className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">

                {isSubmitted && (
                  <div className="mb-6 p-4  rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-medium">Message sent successfully!</p>
                    </div>
                    <p className=" text-sm mt-1">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                <h4 className="text-xl font-semibold mb-6 text-gray-800">Send a Message</h4>

                <div className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full border-b-1 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-t px-4 py-3 focus:outline-none focus:border-[#0A8DC1] transition duration-200 `}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      className={`w-full border-b-1 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-t px-4 py-3 focus:outline-none focus:border-[#0A8DC1] transition duration-200 `}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message here..."
                      className={`w-full border-b-1 ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-t px-4 py-3 focus:outline-none focus:border-[#0A8DC1] transition duration-200  resize-vertical min-h-[100px]`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    <div className="text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <span className="font-medium">Privacy Notice:</span> By submitting, you agree to the processing of your personal data by Armani Floorings as described in the Privacy Statement.
                    </p>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-[#0A8DC1] text-white px-6 py-3 rounded-md font-medium transition duration-200 ${isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-[#0878a8] hover:shadow-lg transform hover:-translate-y-0.5'
                      }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Submit Message'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact