import React, { useEffect, useRef } from "react";
import phn1 from "../assets/images/smallPhn14.svg";
import phn2 from "../assets/images/smallPhn13.svg";

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
    <section ref={sectionRef} className=" container mx-auto  py-16">
      <style>{`
        .phone-size { width: 180px; height: auto; display: block; }

        /* --- Entrance animations (SLOWER now) --- */

        @keyframes enterFromBottom {
          0%   { transform: translateY(420px) scale(0.88) rotate(10deg); opacity: 0; }
          55%  { transform: translateY(-36px) scale(1.16) rotate(-6deg); opacity: 1; }
          78%  { transform: translateY(18px) scale(1.06) rotate(3deg); }
          92%  { transform: translateY(-8px) scale(1.02) rotate(-2deg); }
          100% { transform: translateY(0) scale(1) rotate(0); }
        }

        @keyframes enterFromTop {
          0%   { transform: translateY(-460px) scale(0.88) rotate(-10deg); opacity: 0; }
          48%  { transform: translateY(46px) scale(1.18) rotate(8deg); opacity: 1; }
          72%  { transform: translateY(-20px) scale(1.08) rotate(-3deg); }
          90%  { transform: translateY(10px) scale(1.03) rotate(2deg); }
          100% { transform: translateY(-18px) scale(1) rotate(0); } /* final: slightly up */
        }

        /* longer idle breathing */
        @keyframes slowBreathFront {
          0%   { transform: translateY(0) scale(1); }
          50%  { transform: translateY(-12px) scale(1.01); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes slowBreathBack {
          0%   { transform: translateY(-18px) scale(1); }
          50%  { transform: translateY(-30px) scale(1.01); }
          100% { transform: translateY(-18px) scale(1); }
        }

        @keyframes shineSweep {
          0% { transform: translateX(-140%) skewX(-10deg); opacity: 0; }
          30% { opacity: 0.6; }
          55% { transform: translateX(110%) skewX(-10deg); opacity: 0.95; }
          85% { opacity: 0.45; }
          100% { transform: translateX(220%) skewX(-10deg); opacity: 0; }
        }

        /* default: no animation until section gets .in-view */
        .phone-front, .phone-back {
          animation: none;
          will-change: transform, opacity;
          border-radius: 14px;
          overflow: hidden;
        }

        /* When section is visible: play entrance (back first), then long idle breathing */
        .in-view .phone-back {
          animation:
            enterFromTop 3000ms cubic-bezier(.2,.9,.25,1) 0ms both,
            slowBreathBack 10s ease-in-out 2600ms infinite;
          
          transform-origin: center;
        }

        .in-view .phone-front {
          animation:
            enterFromBottom 2600ms cubic-bezier(.25,.95,.22,1) 500ms both,
            slowBreathFront 9.5s ease-in-out 3000ms infinite;
          
          transform-origin: center;
        }

        .shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: screen;
          background: linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 28%, rgba(255,255,255,0.20) 42%, rgba(255,255,255,0) 70%);
          transform: translateX(-140%) skewX(-10deg);
          animation: shineSweep 2.6s linear 900ms infinite;
        }

        .halo {
          position: absolute;
          left: 50%;
          top: 98%;
          width: 84%;
          height: 26%;
          transform: translateX(-50%);
          background: radial-gradient(closest-side, rgba(231,140,100,0.16), rgba(231,140,100,0.06) 40%, rgba(0,0,0,0) 70%);
          filter: blur(10px);
          z-index: -10;
          border-radius: 999px;
        }

        .phone-front:hover, .phone-back:hover {
          animation-play-state: paused;
          cursor: pointer;
        }
        .phone-front:hover .shine, .phone-back:hover .shine { animation-play-state: paused; }

        @media (max-width: 640px) {
          .phone-size { width: 150px; }
          .shine { display: none; }
          @keyframes enterFromBottom { 0% { transform: translateY(320px) scale(0.90); } }
          @keyframes enterFromTop { 0% { transform: translateY(-320px) scale(0.90); } }
        }

        @keyframes fadeSlideUp { 0% { opacity:0; transform: translateY(8px);} 100% { opacity:1; transform: translateY(0);} }
        .reveal { animation: fadeSlideUp 700ms ease forwards; opacity: 0; }
      `}</style>


      <div className="flex gap-60 items-center">
        {/* Left: content */}
        <div className="w-[60%] ">
          <h2
            className="reveal poppins-semibold md:text-[96px] leading-tight  mb-4"
            style={{ animationDelay: "0.05s" }}
          >
            Live <span className="text-[#A63F0B]"> Location</span>  & <br />
            Join <span className="text-[#A63F0B]"> Queue</span>
          </h2>

          <p
            className="reveal poppins-light text-[24px] mb-6 leading-13"
            style={{ animationDelay: "0.12s" }}
          >
            Stay in the know with <span className="poppins-semibold">live updates</span> on your barber's location and status. No more
            waiting around - get precise start-time alerts and join the queue instantly with a
            quick <span className="poppins-semibold">QR scan</span>.
          </p>

          <div className="reveal mb-8" style={{ animationDelay: "0.18s" }}>
            <div className="inline-block w-full rounded-[20px] border border-[#6F6F6F] shadow-lg px-6 py-6 bg-white text-center">
              <span className="poppins-light text-[28px]">
                Real-time barber <span className="poppins-semibold">location <span className="poppins-light">&</span> status</span>
              </span>
            </div>
          </div>

          <div
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            style={{ animationDelay: "0.24s" }}
          >
            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-semibold text-[28px] leading-16">
                Start-time alerts <span className="poppins-light">for zero guesswork</span>
              </p>
            </div>

            <div className="rounded-[20px] bg-white border border-[#666666] shadow-lg p-6">
              <p className="poppins-light text-[28px] leading-16">
                QR scan to join the <span className="poppins-semibold">queue </span> instantly
              </p>
            </div>
          </div>
        </div>

        {/* Right: phones */}
        <div
          className="relative flex  justify-center md:justify-start items-center"
          style={{ minHeight: 320 }}
        >
          <div className="absolute -left-6 top-8 w-[322px] h-[214px] rounded-tl-[132px] rounded-tr-[132px] rounded-br-[132px] bg-[#E9874E] opacity-90 shadow-2xl -z-10  shadow-gray-600" />

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