import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn6.png";
import phn2 from "../assets/images/smallPhn5.png";
import LeftPhones from "./shared/LeftPhones";


export default function BookHaircut() {
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
                {/* Left: phones */}
                <LeftPhones phn1={phn1} phn2={phn2}/>
                

                {/* Right: content */}
                <div className="w-[100%]  md:w-[50%] lg:w-[60%] ">


                    <h2
                        className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight  mb-4"
                        style={{ animationDelay: "0.05s" }}
                    >
                        Book Your <span className="text-[#A63F0B]">Haircut</span>, Stress-Free
                    </h2>

                    <p
                        className="reveal poppins-light text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13"
                        style={{ animationDelay: "0.12s" }}
                    >
                        Choose your barber, lock in a time, and enjoy a{" "}
                        <span className="poppins-semibold">smooth experience</span>. With mutual{" "}
                        <span className="poppins-semibold">reviews</span> and direct{" "}
                        <span className="poppins-semibold">chat</span>, both customers and barbers{" "}
                        <span className="poppins-semibold">stay </span> connected and accountable.
                    </p>

                    <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
                        <div className="inline-block w-full rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white md:text-center">
                            <span className="poppins-semibold lg:text-[28px]">
                                Mutual reviews{" "}
                                <span className="poppins-light">
                                    between barbers and customers
                                </span>
                            </span>
                        </div>
                    </div>

                    <div
                        className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                        style={{ animationDelay: "0.24s" }}
                    >
                        <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
                            <p className="poppins-semibold lg:text-[28px] lg:leading-16">
                                Easy booking{" "}
                                <span className="poppins-light">in just a few taps</span>
                            </p>
                        </div>

                        <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
                            <p className="poppins-light lg:text-[28px] lg:leading-16">
                                <span className="poppins-semibold">Direct chat</span> with your barber
                                anytime
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
