import React, { useRef } from "react";
import image from "../assets/images/owner/owner.png";
import map from "../assets/images/owner/ownerPhn.svg";
import arrow from "../assets/svg/rightArrow.svg"
import { IoIosSearch } from "react-icons/io";

import phn1 from "../assets/images/owner/phn1.svg";
import phn2 from "../assets/images/owner/phn2.svg";

import phn3 from "../assets/images/owner/phn3.svg";
import phn4 from "../assets/images/owner/phn4.svg";
import phn5 from "../assets/images/owner/phn5.svg";
import phn6 from "../assets/images/owner/dashboard.png";

import ScrollingPhones from "./ScrollingPhones";


const items = [
  { id: "1", image: phn1, description: "Can see total customer, barbers, recent barber request." },
  { id: "2", image: phn2, description: "Manage barber schedules, shifts, and availability." },
  { id: "3", image: phn3, description: "Owner can hire the barbers." },
  { id: "4", image: phn4, description: "Set up client loyalty programs." },
  { id: "5", image: phn5, description: "Owner also can subscription plans." },
  {
    id: "6",
    image: phn6,
    variant: "dashboard",
    descriptionLines: [
      "View key metrics, appointments, and shifts in one place.",
      "Monitor barbershop activity, customer queues, and performance live.",
      "Effortlessly post shifts, approve bookings, and track payments.",
    ],
  },
];



export default function Owner() {

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
            
             {/* Text Section */}
            <div className=" w-1/2 text-center ">
                <h2 className="text-[64px] poppins-bold mb-8">ABOUT OWNER</h2>
                <p className="poppins-light text-[38px] my-4">Get found where clients search - Google, Instagram</p>
                <div className="flex justify-center mt-6">
                    <button onClick={handleGetFoundClick} className="cursor-pointer flex gap-2 border poppins-regular text-[20px]  py-[14px] px-[26px] rounded-lg">
                        Get found <img src={arrow} alt="" />
                    </button>
                </div>
            </div>

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

           

        </div>

        {/* Scrolling phones */}
        <div className="mt-100" id="scrolling-phones" ref={phonesRef}>
        <ScrollingPhones items={items} text="OWNER"/>
        </div>
        </div>
    );
}
