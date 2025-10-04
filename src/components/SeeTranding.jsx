import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn17.svg";
import phn2 from "../assets/images/smallPhn18.svg";
import RightPhones from "./shared/RightPhones";

export default function SeeTranding() {
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
        <div className="w-[100%] md:w-[50%] lg:w-[60%] 2xl:w-[70%] ">
          <h2
            className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight mb-4"
            style={{ animationDelay: "0.05s" }}
          >
            See what’s <span className="text-[#A63F0B]"> Trending</span>  - <br />
            Today
 
          </h2>

          <p
            className="reveal poppins-light text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13"
            style={{ animationDelay: "0.12s" }}
          >
            From fresh fades to seasonal styles, the feed shows real cuts in <span className="poppins-semibold">real time</span> from local barbers. Get <span className="poppins-semibold"> inspired </span>, pick a look, and <span className="poppins-semibold">book</span> on the spot.

          </p>

          

          <div
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            style={{ animationDelay: "0.24s" }}
          >
            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-semibold lg:text-[28px] lg:leading-16">
                Up-to-date trends <br/> <span className="poppins-light">Scroll the latest looks from your area and beyond.</span>
              </p>
            </div>

            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-semibold lg:text-[28px] lg:leading-16">
                From feed to chair <br /> <span className="poppins-light"> Tap a post to view the barber’s profile and book instantly. </span> 
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