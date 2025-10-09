import React, { useRef } from "react";
import image from "../assets/images/barber/Barber.png";
import map from "../assets/images/barber/BarberPhn.png";
import phn1 from "../assets/images/barber/phn1.png";
import phn2 from "../assets/images/barber/phn2.png";
import phn3 from "../assets/images/barber/phn3.png";
import phn4 from "../assets/images/barber/phn4.png";
import phn5 from "../assets/images/barber/phn5.png";
import ScrollingPhones from "./ScrollingPhones";
import About from "./shared/About";



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
            <div className="flex flex-col-reverse md:flex-row items-center gap-20 ">


                {/* Image Section */}
                <div className="">
                    {/* Background Div */}
                    <div className=" bg-[#E9874E] rounded-[20px] h-[180px] xl:w-[617px] xl:h-[386px] mt-10 md:mt-0">

                        {/* Image Above the Background Div */}
                        <div className=" z-20 ml-10  transform -translate-y-16 md:-translate-y-16">
                            <img
                                src={image}
                                alt="Client Barber"
                                className="w-[250px] xl:w-[472px] xl:h-[281px] rounded-[20px] object-cover"
                            />
                        </div>

                        {/* Map Image at the Right Side */}
                        <div className=" ml-14 md:ml-[40%] transform -translate-y-36 lg:-translate-y-46  ">
                            <div className="mb-4">
                                


                            </div>
                            <div className="flex justify-end mr-4 ">
                                <img
                                    src={map}
                                    alt="map"
                                    className=" h-[200px] xl:w-[228px] xl:h-[460px] rounded-[20px] "
                                />
                            </div>
                        </div>

                    </div>




                </div>

                {/* Text Section */}
               
            <div>
                <About heading="ABOUT BARBER" subheading="Find out what the barbers can do in the app" onButtonClick={handleGetFoundClick}/>
            </div>

            </div>

            {/* Scrolling phones */}
            <div className="mt-20 md:mt-30 xl:mt-50" id="scrolling-phones" ref={phonesRef}>
                <ScrollingPhones items={items} text="BARBER" />
            </div>
        </div>
    );
}
