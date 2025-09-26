import React, { useRef } from "react";
import image from "../assets/images/client.png";
import map from "../assets/images/map.png";
import arrow from "../assets/svg/rightArrow.svg"
import { IoIosSearch } from "react-icons/io";

import phn1 from "../assets/images/client/phn1.svg";
import phn2 from "../assets/images/client/phn2.svg";
import phn3 from '../assets/svg/phone2.svg'
import phn4 from "../assets/images/client/phn4.svg";
import phn5 from "../assets/images/client/phn5.svg";
import phn6 from "../assets/images/client/phn6.svg";
import phn7 from "../assets/images/client/phn7.svg";
import ScrollingPhones from "./ScrollingPhones";

const items = [
  { id: "1", image: phn1, description: "Book appointments, finding available barbers." },
  { id: "2", image: phn2, description: "See your barber’s location and status live in the app." },
  { id: "3", image: phn3, description: "Book your schedule and see barbers timings" },
  { id: "4", image: phn4, description: "Real-Time booking Updates Also can chat" },
  { id: "5", image: phn5, description: "Save, rebook your favorite barbers, booking reminders." },
  { id: "6", image: phn6, description: "Leave ratings, reviews, and share feedback." },
  { id: "7", image: phn7, description: "Pay securely with Apple Pay, Google Pay, or cards." },
];


export default function AboutClients() {
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
            <div className="flex items-center justify-between ">
            {/* Text Section */}
            <div className=" w-1/2 text-center ">
                <h2 className="text-[64px] poppins-bold mb-8">ABOUT CLIENTS</h2>
                <p className="poppins-light text-[38px] my-4">Get found where clients search - Google, Instagram</p>
                <div className="flex justify-center mt-6">
                    <button onClick={handleGetFoundClick} className="cursor-pointer flex  gap-2 border poppins-regular text-[20px]  py-[14px] px-[26px] rounded-lg">
                        Get found <img src={arrow} alt="" />
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-1/2 relative">
                {/* Background Div */}
                <div className="absolute bg-[#E9874E] w-[617px] h-[386px] -right-10 top-28"></div>

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
                        <div class="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search Barbers"
                                class="w-full py-3 pl-4 pr-16 border border-[#343232] rounded-[20px] text-[24px] poppins-light bg-white text-black"
                            />
                            <IoIosSearch class="absolute right-4 text-[#343232] text-[28px]" />
                        </div>


                    </div>
                    <img
                        src={map}
                        alt="map"
                        className="w-[388px] h-[280px] rounded-[20px]"
                    />
                </div>
            </div>

        </div>

        {/* Scrolling phones */}
        <div className="mt-80" id="scrolling-phones" ref={phonesRef}>
        <ScrollingPhones items={items} text="CLIENTS"/>
        </div>
        </div>
    );
}
