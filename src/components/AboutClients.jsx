import React, { useRef } from "react";
import image from "../assets/images/client.png";
import map from "../assets/images/map.png";
import { IoIosSearch } from "react-icons/io";

import phn1 from "../assets/images/client/phn1.png";
import phn2 from "../assets/images/client/phn2.png";
import phn3 from "../assets/images/client/phn3.png";
import phn4 from "../assets/images/client/phn4.png";
import phn5 from "../assets/images/client/phn5.png";
import phn6 from "../assets/images/client/phn6.png";
import phn7 from "../assets/images/client/phn7.png";
import ScrollingPhones from "./ScrollingPhones";
import About from "./shared/About";

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
            <div>
                <About heading="ABOUT CLIENTS" subheading="Find out what the clients can do in the app" onButtonClick={handleGetFoundClick}/>
            </div>

            {/* Image Section */}
            <div className="">
                {/* Background Div */}
                <div className=" bg-[#E9874E] h-[180px] xl:w-[617px] xl:h-[386px] mt-10 md:mt-0">

                    {/* Image Above the Background Div */}
                <div className=" z-20 ml-10  md:-ml-16 transform -translate-y-16 md:-translate-y-16">
                    <img
                        src={image}
                        alt="Client Barber"
                        className="w-[250px] xl:w-[472px] xl:h-[281px] rounded-[20px] object-cover"
                    />
                </div>

                {/* Map Image at the Right Side */}
                <div className=" ml-14 md:ml-[40%] transform -translate-y-36 xl:-translate-y-46  ">
                    <div className="mb-4">
                        <div class="relative flex items-center justify-center">
                            <input
                                type="text"
                                placeholder="Search Barbers"
                                class="py-2 xl:py-3 pl-4 xl:pr-16 border border-[#343232] rounded-[10px]  xl:rounded-[20px] md:text-sm xl:text-[24px] poppins-light bg-white text-black"
                            />
                            <IoIosSearch class="absolute right-[14%] text-[#343232] xl:text-[28px]" />
                        </div>


                    </div>
                    <div className="flex justify-center">
                        <img
                        src={map}
                        alt="map"
                        className="w-[200px] md:w-[418px] md:h-[160px] lg:w-[318px] xl:h-[260px] rounded-[20px] "
                    />
                    </div>
                </div>

                </div>

                

                
            </div>

        </div>

        {/* Scrolling phones */}
        <div className="mt-20 md:mt-30" id="scrolling-phones" ref={phonesRef}>
        <ScrollingPhones items={items} text="CLIENTS"/>
        </div>
        </div>
    );
}
