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
            <div className="flex flex-col md:flex-row items-center gap-20 ">
            {/* Text Section */}
            <div className="  text-center ">
                <h2 className="text-2xl md:text-[44px] xl:text-[64px] poppins-bold mb-8">ABOUT CLIENTS</h2>
                <p className="poppins-light text-xl md:text-3xl xl:text-[38px] my-4">Get found where clients search - Google, Instagram</p>
                <div className="flex  justify-center mt-6">
                    <button onClick={handleGetFoundClick} className="cursor-pointer flex items-center gap-2 border poppins-regular md:text-[20px]  py-[14px] px-[26px] rounded-lg">
                        Get found <img src={arrow} alt="" className="w-8 md:w-10" />
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="">
                {/* Background Div */}
                <div className=" bg-[#E9874E] h-[180px] md:w-[617px] md:h-[386px] mt-10 md:mt-0">

                    {/* Image Above the Background Div */}
                <div className=" z-20 ml-10  md:-ml-20 transform -translate-y-16 md:-translate-y-16">
                    <img
                        src={image}
                        alt="Client Barber"
                        className="w-[250px] md:w-[472px] md:h-[281px] rounded-[20px] object-cover"
                    />
                </div>

                {/* Map Image at the Right Side */}
                <div className=" ml-14 md:ml-[40%] transform -translate-y-36 md:-translate-y-46  ">
                    <div className="mb-4">
                        <div class="relative flex items-center justify-center ">
                            <input
                                type="text"
                                placeholder="Search Barbers"
                                class="py-2 md:py-3 pl-4 md:pr-16 border border-[#343232] rounded-[20px] md:text-[24px] poppins-light bg-white text-black"
                            />
                            <IoIosSearch class="absolute right-14 text-[#343232] md:text-[28px]" />
                        </div>


                    </div>
                    <div className="flex justify-center">
                        <img
                        src={map}
                        alt="map"
                        className="w-[200px] md:w-[318px] md:h-[260px] rounded-[20px] "
                    />
                    </div>
                </div>

                </div>

                

                
            </div>

        </div>

        {/* Scrolling phones */}
        <div className="mt-10 md:mt-40" id="scrolling-phones" ref={phonesRef}>
        <ScrollingPhones items={items} text="CLIENTS"/>
        </div>
        </div>
    );
}
