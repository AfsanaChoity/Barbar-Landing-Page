


import React from "react";

import shift from "../assets/svg/business_center.svg";
import booking from "../assets/svg/business_center1.svg";
import ai from "../assets/svg/business_center2.svg";
import hiring from "../assets/svg/business_center3.svg";
import loyalty from "../assets/svg/business_center4.svg";
import queue from "../assets/svg/business_center5.svg";
import logoVideo from "../assets/vedio/Logodesign_No_Music.mp4"

const leftFeatures = [
    {
        icon: shift,
        title: "Shift Management:",
        desc:
            "Effortlessly post, manage, and track barber shifts to ensure optimal staffing levels in real-time.",
    },
    {
        icon: booking,
        title: "Booking Updates:",
        desc:
            "Automatically update bookings and notify customers of their appointment status for a seamless experience.",
    },
    {
        icon: ai,
        title: "AI-Powered Barber Matching :",
        desc:
            " Upload a photo of your desired haircut, and Rey AI finds the nearest barber with a similar style, ensuring quality service from trusted professionals.",
    },
];

const rightFeatures = [
    {
        icon: hiring,
        title: "Hiring Barbers:",
        desc:
            "Simplify the hiring process by posting available shifts and directly connecting with skilled barbers.",
    },
    {
        icon: loyalty,
        title: "Loyalty Rewards:",
        desc:
            "Customize and manage loyalty programs that reward customers for repeat visits and engagement.",
    },
    {
        icon: queue,
        title: "Queue Management System",
        desc:
            "Rey AI organizes the queue, predicts wait times, and keeps customers informed, making the process smoother and reducing downtime.",
    },
];

function FeatureItem({ icon, title, desc }) {
    return (
        <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="shrink-0  rounded-full bg-white shadow ring-1 ring-black/10 grid place-items-center">
                <img src={icon} alt="" className="w-10 md:w-14 xl:w-full" />
            </div>
            {/* Copy */}
            <div>
                <h4 className="poppins-semibold text-xl xl:text-[26px] text-[#010101]">
                    {title}
                </h4>
                <p className="poppins-light xl:text-[20px] leading-6 text-[#010101] opacity-80">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default function CoreFeatures() {
    return (
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-14 ">
            {/* Heading */}
            <h2 className="text-center poppins-semibold text-[34px] md:text-[64px] text-[#333333] mb-8">
                Core Features
            </h2>

            {/* 3-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10   items-center">
                {/* Left list */}
                <div className="space-y-10 order-2 lg:order-1">
                    {leftFeatures.map((f, i) => (
                        <FeatureItem key={i} {...f} />
                    ))}
                </div>

                {/* Phone mockup (center) */}
                <div className="order-1 lg:order-2">
                    <div className="relative mx-auto w-[200px]  md:w-[300px] xl:w-[380px]   ">
                       <div className="border-4 border-gray-500 rounded-[48px] shadow shadow-black/45">
                         <div className="relative rounded-[44px] bg-black shadow-2xl p-2">
                            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-5 bg-black rounded-b-2xl" />
                            <div className="rounded-[36px] bg-[#EA8653] px-4 py-14">
                                
                                <div className="rounded-3xl shadow-inner overflow-hidden">
                                    <video
                                        src={logoVideo}
                                        className="w-full h-[300px] md:h-[500px] xl:h-[700px] object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                </div>
                            </div>
                        </div>
                       </div>
                        <div className="absolute inset-0 rounded-[48px] -z-10 blur-md opacity-40" />
                    </div>
                </div>


                {/* Right list */}
                <div className="space-y-10 order-3">
                    {rightFeatures.map((f, i) => (
                        <FeatureItem key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
}
