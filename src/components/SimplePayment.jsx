import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn9.svg";
import phn2 from "../assets/images/smallPhn10.svg";
import LeftPhones from "./shared/LeftPhones";


export default function SimplePayment() {
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
                <LeftPhones phn1={phn1} phn2={phn2} />
                

                {/* Right: content */}
                <div className="w-[100%] md:w-[50%] lg:w-[60%] 2xl:w-[70%]">


                    <h2
                        className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight mb-4"
                        style={{ animationDelay: "0.05s" }}
                    >
                        Simple & <span className="text-[#A63F0B]">Transparent</span> Payment
                    </h2>

                    <p
                        className="reveal text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13"
                        style={{ animationDelay: "0.12s" }}
                    >
                        The platform is free for barbershop owners, while customers only pay a
                        <span className="poppins-semibold"> small booking fee</span>. All payments are handled online through secure
                        <span className="poppins-semibold"> escrow</span>, ensuring funds are released only once the job is complete.
                    </p>

                    <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
                        <div className="inline-block w-full rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white md:text-center">
                            <span className="poppins-light lg:text-[28px]">
                                Secure <span className="poppins-semibold">escrow </span> payments released after completion
                            </span>
                        </div>
                    </div>

                    <div
                        className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                        style={{ animationDelay: "0.24s" }}
                    >
                        <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
                            <p className="poppins-light lg:text-[28px] lg:leading-16">
                                Customers 
                                <span className="poppins-semibold"> pay £0.50 </span> service fee per booking
                            </p>
                        </div>

                        <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
                            <p className="poppins-light lg:text-[28px] lg:leading-16">
                                <span className="poppins-semibold">Free platform</span> for barbershop owners
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}