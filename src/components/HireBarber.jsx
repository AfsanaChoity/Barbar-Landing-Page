import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn4.png";
import phn2 from "../assets/images/smallPhn3.png";
import RightPhones from "./shared/RightPhones";


export default function HireBarber() {
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
        <div className="w-[100%]  md:w-[50%] lg:w-[60%] ">
          

          <h2 className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight  mb-4" style={{ animationDelay: "0.05s" }}>
            Hire <span className="text-[#A63F0B]">Barber</span> <br />  Fast
          </h2>

          <p className="reveal poppins-light text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13" style={{ animationDelay: "0.12s" }}>
            Post jobs for <span className="poppins-semibold">free</span> find skilled barbers nearby, and <span className="poppins-semibold">instantly grow</span> your team. When you <span className="poppins-semibold">hire, </span> their profile <span className="poppins-semibold">automatically</span> shows up in your shop’s public listing.</p>
 

          <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
            <div className="inline-block w-full  rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white md:text-center">
              <span className="poppins-semibold lg:text-[28px]"> <span className="poppins-light">Find barbers by</span> skill, rating, <span className="poppins-light">and</span>  availability </span>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" style={{ animationDelay: "0.24s" }}>
            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
             <p className="poppins-semibold lg:text-[28px] lg:leading-16">Free job posts <span className="poppins-light">(no fees like other sites)</span></p>
            </div>

            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-light lg:text-[28px] lg:leading-16">
                <span className="poppins-semibold">Automatic staff listing </span> in your shop’s profile
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
