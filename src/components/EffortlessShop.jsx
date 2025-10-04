import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn8.svg";
import phn2 from "../assets/images/smallPhn7.svg";
import RightPhones from "./shared/RightPhones";

export default function EffortlessShop() {
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
      {/* --- keep all your styles as is (unchanged) --- */}

      <div className=" flex flex-col md:flex-row md:gap-20 xl:gap-[20%] md:items-center ">

        {/* Left: content */}
        <div className="w-[100%]  md:w-[50%] lg:w-[60%]">

          <h2
            className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight  mb-4"
            style={{ animationDelay: "0.05s" }}
          >
            Effortless Shop <br />
            <span className="text-[#A63F0B]">Management</span>
          </h2>

          <p
            className="reveal poppins-light text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13"
            style={{ animationDelay: "0.12s" }}
          >
            Give customers confidence with an always up-to-date shop page. Manage
            both walk-ins and <span className="poppins-semibold">digital queues</span>{" "}
            with ease, and <span className="poppins-semibold">boost loyalty</span> by
            offering custom rewards to keep clients coming back.
          </p>

          <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
            <div className="inline-block w-full  rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white md:text-center">
              <span className="poppins-light lg:text-[28px]">
                <span className="poppins-semibold">Queue</span> management for walk-ins &{" "}
                <span className="poppins-semibold">online bookings</span>
              </span>
            </div>
          </div>

          <div
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            style={{ animationDelay: "0.24s" }}
          >
            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-light lg:text-[28px] lg:leading-16">
                <span className="poppins-semibold">Auto-updated</span> shop page with
                hired barbers
              </p>
            </div>

            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-light lg:text-[28px] lg:leading-16"> Custom
                <span className="poppins-semibold"> rewards</span> to grow client
                loyalty
              </p>
            </div>
          </div>
        </div>

        {/* Right: phones */}
        <RightPhones phn1={phn1} phn2={phn2}/>
        
      </div>
    </section>
  );
}
