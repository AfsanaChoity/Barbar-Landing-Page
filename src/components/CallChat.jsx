import React, { useEffect, useRef } from "react";

import phn1 from "../assets/images/smallPhn14.png";
import phn2 from "../assets/images/smallPhn13.png";
import LeftPhones from "./shared/LeftPhones";


export default function CallChat() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add("in-view");
                    } else {
                        el.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.45 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="">
           


            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
                
                {/* Left: phones (moved to the left to match the image) */}
                <LeftPhones phn1={phn1} phn2={phn2} />
                

                {/* Right: content (moved to the right to match the image) */}
                <div className="w-[100%]  md:w-[50%] lg:w-[60%]  ">


                    <h2
                        className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight mb-4"
                        style={{ animationDelay: "0.05s" }}
                    >
                        <span className="text-[#A63F0B]">Call <span className="text-black">&</span> Chat</span>-<br />
                        right in the app
                    </h2>

                    <p
                        className="reveal poppins-light text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13"
                        style={{ animationDelay: "0.12s" }}
                    >
                        No more landline chasing. Customers can call or chat with your shop
                        <span className="poppins-semibold"> directly</span> in the app to ask <span className="poppins-semibold">prices</span>, <span className="poppins-semibold">availability</span>, or <span className="poppins-semibold">aftercare</span> and you can
                        reply from anywhere.
                    </p>

                    <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
                        <div className="inline-block w-full rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white md:text-center">
                            <span className="poppins-semibold lg:text-[28px]">
                                One number, zero hassle <span className="poppins-light">– All enquiries in one app.</span>
                            </span>
                        </div>
                    </div>

                    <div
                        className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4"
                        style={{ animationDelay: "0.24s" }}
                    >
                        <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6 lg:col-span-2">
                            <p className="poppins-semibold lg:text-[28px] lg:leading-16">
                                Protect your clientele.
                                <span className="poppins-light"> Clients contact the shop, not barbers.
                                </span>
                            </p>
                        </div>

                        <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6 lg:col-span-3">
                            <p className="poppins-light text-sm lg:text-[28px] lg:leading-16">
                                Fewer cold calls <span className="poppins-semibold">→ lower costs</span>
                                <br />Enquiries on <span className="poppins-semibold"> any device </span>
                                <br />Faster replies <span className="poppins-semibold">→ more bookings</span>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}