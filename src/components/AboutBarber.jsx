import React, { useRef } from "react";
import image from "../assets/images/barber/Barber.png";
import map from "../assets/images/barber/BarberPhn.svg";
import arrow from "../assets/svg/rightArrow.svg"
import { IoIosSearch } from "react-icons/io";

import phn1 from "../assets/images/barber/phn1.svg";
import phn2 from "../assets/images/barber/phn2.svg";

import phn3 from "../assets/images/barber/phn3.svg";
import phn4 from "../assets/images/barber/phn4.svg";
import phn5 from "../assets/images/barber/phn5.svg";
import ScrollingPhones from "./ScrollingPhones";


const items = [
  { id: "1", image: phn1, description: "Keep client preferences, notes and favourite." },
  { id: "2", image: phn2, description: "Build a portfolio with reviews, ratings & post for jobs" },
  { id: "3", image: phn3, description: "Get automated reminders for upcoming bookings." },
  { id: "4", image: phn4, description: "Track earnings, sales, tips, and payment history." },
  { id: "5", image: phn5, description: "Can block fake or inappropriate accounts" },
  
];


export default function AboutBarber() {
    const phonesRef = useRef(null);
    
      const handleGetFoundClick = () => {
        // prefer ref, fallback to id selector
        const el = phonesRef.current ?? document.getElementById("scrolling-phones");
        if (!el) return;
    
        // Smooth scroll into view
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      };

    return (
        <div>
            <div className="flex items-center  justify-between gap-20">
            

            {/* Image Section */}
            <div className="w-1/2 relative">
                {/* Background Div */}
                <div className="absolute bg-[#E9874E] w-[844px] h-[386px] rounded-[20px] -right-10 top-28"></div>

                {/* Image Above the Background Div */}
                <div className="relative z-20">
                    <img
                        src={image}
                        alt="Client Barber"
                        className="w-[572px] h-[381px] rounded-[20px] object-cover"
                    />
                </div>

                {/* Map Image at the Right Side */}
                <div className="absolute top-58 right-10 z-30">
                    <div className="mb-4">
                       


                    </div>
                    <img
                        src={map}
                        alt="map"
                        className="w-[235px] h-[478px] rounded-[20px]"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className=" w-1/2 text-center ">
                <h2 className="text-[64px] poppins-bold mb-8">ABOUT BARBER</h2>
                <p className="poppins-light text-[38px] my-4">Get found where clients search - Google, Instagram</p>
                <div className="flex justify-center mt-6">
                    <button onClick={handleGetFoundClick} className="cursor-pointer flex  gap-2 border poppins-regular text-[20px]  py-[14px] px-[26px] rounded-lg">
                        Get found <img src={arrow} alt="" />
                    </button>
                </div>
            </div>

        </div>

        {/* Scrolling phones */}
        <div className="mt-100" id="scrolling-phones" ref={phonesRef}>
        <ScrollingPhones items={items} text="BARBER"/>
        </div>
        </div>
    );
}
