import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn8.svg";
import phn2 from "../assets/images/smallPhn7.svg";

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
    <section ref={sectionRef} className=" container mx-auto  py-16">
      {/* --- keep all your styles as is (unchanged) --- */}

      <div className="flex gap-60 items-center">
        {/* Left: content */}
        <div className="w-[60%] ">
          <h2
            className="reveal poppins-semibold md:text-[96px] leading-tight  mb-4"
            style={{ animationDelay: "0.05s" }}
          >
            Effortless Shop <br />
            <span className="text-[#A63F0B]">Management</span>
          </h2>

          <p
            className="reveal poppins-light text-[24px] mb-6 leading-13"
            style={{ animationDelay: "0.12s" }}
          >
            Give customers confidence with an always up-to-date shop page. Manage
            both walk-ins and <span className="poppins-semibold">digital queues</span>{" "}
            with ease, and <span className="poppins-semibold">boost loyalty</span> by
            offering custom rewards to keep clients coming back.
          </p>

          <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
            <div className="inline-block w-full  rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white text-center">
              <span className="poppins-light text-[28px]">
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
              <p className="poppins-light text-[28px] leading-16">
                <span className="poppins-semibold">Auto-updated</span> shop page with
                hired barbers
              </p>
            </div>

            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-light text-[28px] leading-16"> Custom
                <span className="poppins-semibold"> rewards</span> to grow client
                loyalty
              </p>
            </div>
          </div>
        </div>

        {/* Right: phones */}
        <div
          className="relative flex  justify-center md:justify-start items-center"
          style={{ minHeight: 320 }}
        >
          <div className="absolute -left-6 top-8 w-[322px] h-[214px] rounded-tl-[132px] rounded-tr-[132px] rounded-br-[132px] bg-[#E9874E] opacity-90 shadow-2xl -z-10  shadow-gray-600" />

          {/* FRONT phone (comes from bottom) */}
          <div
            className="relative z-10"
            style={{ width: 114, marginLeft: 18, top: -44 }}
          >
            <div
              className="phone-front"
              style={{ position: "relative", borderRadius: 14 }}
            >
              <img
                src={phn2}
                alt="app preview phone 1"
                className="w-[114px] h-[242px] "
              />
              <div className="shine" />
              <div className="halo" />
            </div>
          </div>

          {/* BACK phone (comes from top) */}
          <div
            className="absolute z-0"
            style={{ right: -132, top: -14, width: 114 }}
          >
            <div
              className="phone-back"
              style={{
                position: "relative",
                borderRadius: 14,
                transform: "scale(0.96)",
              }}
            >
              <img
                src={phn1}
                alt="app preview phone 2"
                className="w-[114px] h-[242px]"
              />
              <div className="shine" />
              <div className="halo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
