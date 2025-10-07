import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn12.png";
import phn2 from "../assets/images/smallPhn11.png";
import RightPhones from "./shared/RightPhones";

export default function LiveLocation() {
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
      
      <div className=" flex flex-col md:flex-row md:gap-20 xl:gap-[20%] md:items-center ">

        {/* Left: content */}
        <div className="w-[100%]  md:w-[50%] lg:w-[60%]  ">
          <h2
            className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight mb-4"
            style={{ animationDelay: "0.05s" }}
          >
            Live <span className="text-[#A63F0B]"> Location</span>  & <br />
            Join <span className="text-[#A63F0B]"> Queue</span>
          </h2>

          <p
            className="reveal poppins-light text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13"
            style={{ animationDelay: "0.12s" }}
          >
            Stay in the know with <span className="poppins-semibold">live updates</span> on your barber's location and status. No more
            waiting around - get precise start-time alerts and join the queue instantly with a
            quick <span className="poppins-semibold">QR scan</span>.
          </p>

          <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
            <div className="inline-block w-full rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white md:text-center">
              <span className="poppins-light lg:text-[28px]">
                Real-time barber <span className="poppins-semibold">location <span className="poppins-light">&</span> status</span>
              </span>
            </div>
          </div>

          <div
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            style={{ animationDelay: "0.24s" }}
          >
            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-semibold lg:text-[28px] lg:leading-16">
                Start-time alerts <span className="poppins-light">for zero guesswork</span>
              </p>
            </div>

            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-light lg:text-[28px] lg:leading-16">
                QR scan to join the <span className="poppins-semibold">queue </span> instantly
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