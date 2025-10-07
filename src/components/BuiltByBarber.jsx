import { useEffect, useRef } from "react";
import barber from "../assets/images/barber.svg";
import phn1 from "../assets/images/smallPhn2.png";
import phn2 from "../assets/images/smallPhn1.png";
import LeftPhones from "./shared/LeftPhones";


export default function BuiltByBarber() {
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

      <div className="flex items-baseline mb-10 justify-center">
            <img src={barber} alt="barber icon" className="w-[160px] h-[182px]" />
            <h4 className="poppins-semibold text-2xl md:text-3xl xl:text-[55px] -ml-6 relative -top-0.5">Services</h4>
          </div>


      <div className=" flex flex-col-reverse md:flex-row md:justify-between md:items-center ">
        
        {/* Left: phones */}
        <LeftPhones phn1={phn1} phn2={phn2}/>

        {/* Right: content */}
        <div className="w-[100%]  md:w-[50%] lg:w-[60%] ">
          

          <h2 className="reveal poppins-semibold text-3xl lg:text-[56px] 2xl:text-[96px] leading-tight  mb-4" style={{ animationDelay: "0.05s" }}>
            Built by a <span className="text-[#A63F0B]">Barber</span>,  for everyone
          </h2>

          <p className="reveal poppins-light text-sm leading-6 lg:text-[24px] mb-6  lg:leading-13" style={{ animationDelay: "0.12s" }}>
            Save time with <span className="poppins-semibold">accurate wait</span> times and <span className="poppins-semibold">instant booking</span>. Feel confident by <span className="poppins-semibold">browsing real work, profiles, </span> and <span className="poppins-semibold">ratings</span>. Keep things running smoothly with <span className="poppins-semibold">live queue</span> visibility that helps shops flow better.
          </p>

          <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
            <div className="inline-block w-full  rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white md:text-center">
              <span className="poppins-semibold lg:text-[28px]">Accurate wait <span className="poppins-light">times & </span> instant booking</span>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" style={{ animationDelay: "0.24s" }}>
            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
             <p className="poppins-semibold lg:text-[28px] lg:leading-16">Profiles, ratings, <span className="poppins-light">and</span> real work previews</p>
            </div>

            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-light lg:text-[28px] lg:leading-16">
                <span className="poppins-semibold">Live queue</span> visibility for smoother shop flow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
