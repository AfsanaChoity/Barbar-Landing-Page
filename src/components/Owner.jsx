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
import About from "./shared/About";


const items = [
    { id: "1", image: phn1, description: "Can see total customer, barbers, recent barber request." },
    { id: "2", image: phn2, description: "Manage barber schedules, shifts, and availability." },
    { id: "3", image: phn3, description: "Owner can hire the barbers." },
    { id: "4", image: phn4, description: "Set up client loyalty programs." },
    // { id: "5", image: phn5, description: "Owner also can subscription plans." },
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


                <div>
                    <About heading="ABOUT OWNER" subheading="Find out what the owners can do in the app" onButtonClick={handleGetFoundClick} />
                </div>

                {/* Image Section */}
                <div className="">
                    {/* Background Div */}
                    <div className=" bg-[#E9874E] rounded-[20px]  h-[180px] xl:w-[617px] xl:h-[386px] mt-10 md:mt-0">

                        {/* Image Above the Background Div */}
                        <div className=" z-20 ml-10  transform -translate-y-16 md:-translate-y-16">
                            <img
                                src={image}
                                alt="Client Barber"
                                className="w-[250px] h-[200px] xl:w-[472px] xl:h-[281px] rounded-[20px] object-cover"
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
                                    className=" h-[200px] xl:w-[318px] xl:h-[460px] rounded-[20px] "
                                />
                            </div>
                        </div>

                    </div>




                </div>


            </div>

            {/* Scrolling phones */}
            <div className="mt-20 md:mt-30 xl:mt-50" id="scrolling-phones" ref={phonesRef}>
                <ScrollingPhones items={items} text="OWNER" />
            </div>
        </div>
    );
}
