import { Montserrat } from "next/font/google"
import { FaCalendarAlt } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice } from "react-icons/hi2";





const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})

const whyChooseUsData = [
    {
        id: 1,
        title: "45 years of excellence",
        description: "Perfection is not attainable, but if we chase perfection, we can catch excellence.",
        icon: <LuCalendarCheck2 size={40}  />, // You can customize the icon style
    },
    {
        id: 2,
        title: "Free Consultation",
        description: "We assure you that it is our desire",
        icon: <BsBoxSeam size={40} />,
    },
    {
        id: 3,
        title: "Customer Service",
        description: "We are dedicated to serve our customers",
        icon: <IoChatbubbleOutline size={40} />,
    },
    {
        id: 4,
        title: "Wide variety of collections",
        description: "Explore your true style.",
        icon: <FaCalendarAlt size={40} />,
    },
    {
        id: 5,
        title: "Quality of trust",
        description: "Trust is earned when action meets words.",
        icon: <IoHomeOutline size={40} />,
    },
    {
        id: 6,
        title: "Superior quality",
        description: "Quality is not an act, it is a habit. Trust us in our quality you cannot think else.",
        icon: <HiOutlineBuildingOffice size={40} />,
    },
];

const WhyChoose = () => {
    return (
        <div className={`relative overflow-hidden px-0 md:px-10 py-16 ${montserrat.className}`}>
            <div>
                <h1 className="text-[#0A8DC1] text-3xl md:text-4xl font-semibold">
                    Why Choose Us
                </h1>
            </div>
            <div className=" mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {whyChooseUsData.map(({ id, title, description, icon }) => (
                    <div key={id} className="text-center">
                        <div className="mx-auto mb-5 w-35 h-35 rounded-full bg-[#91C8DD] flex items-center justify-center">
                            {icon}
                        </div>
                        <h3 className="font-semibold text-xl mb-2">{title}</h3>
                        <p className="text-sm text-gray-800">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose