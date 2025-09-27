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
            <div className="flex flex-col md:flex-row items-center gap-20">

                {/* Text Section */}
                <div className=" text-center ">
                    <h2 className="text-2xl md:text-[44px] xl:text-[64px] poppins-bold mb-8">ABOUT OWNER</h2>
                    <p className="poppins-light text-xl md:text-3xl xl:text-[38px] my-4">Get found where clients search - Google, Instagram</p>
                    <div className="flex justify-center mt-6">
                        <button onClick={handleGetFoundClick} className="cursor-pointer flex items-center gap-2 border poppins-regular md:text-[20px]  py-[14px] px-[26px] rounded-lg">
                            Get found <img src={arrow} alt="" className="w-8 md:w-10" />
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="">
                    {/* Background Div */}
                    <div className=" bg-[#E9874E]  h-[180px] md:w-[617px] md:h-[386px] mt-10 md:mt-0">

                        {/* Image Above the Background Div */}
                        <div className=" z-20 ml-10  transform -translate-y-16 md:-translate-y-16">
                            <img
                                src={image}
                                alt="Client Barber"
                                className="w-[250px] h-[200px] md:w-[472px] md:h-[281px] rounded-[20px] object-cover"
                            />
                        </div>

                        {/* Map Image at the Right Side */}
                        <div className=" ml-14 md:ml-[40%] transform -translate-y-36 md:-translate-y-46  ">
                            <div className="mb-4">



                            </div>
                            <div className="flex justify-end mr-4 ">
                                <img
                                    src={map}
                                    alt="map"
                                    className=" h-[200px] md:w-[318px] md:h-[460px] rounded-[20px] "
                                />
                            </div>
                        </div>

                    </div>




                </div>


            </div>

            {/* Scrolling phones */}
            <div className="mt-20 md:mt-60" id="scrolling-phones" ref={phonesRef}>
                <ScrollingPhones items={items} text="OWNER" />
            </div>
        </div>
    );
}
