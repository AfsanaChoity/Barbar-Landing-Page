import React, { useEffect, useRef } from "react";
import barber from "../assets/images/barber.svg";
import phn1 from "../assets/images/smallPhn.svg";
import phn2 from "../assets/images/smallPhn1.svg";

/**
 * BuiltByBarber — entrance made much slower:
 * - phoneB (back) arrives first (no delay) over 2.6s -> 2.6s -> 2600ms
 * - phoneA (front) arrives after a larger delay (1200ms) and over 2600ms
 * - stronger bounce preserved; idle breathing durations increased
 * - animations only run when the section is in view (IntersectionObserver)
 */

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
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-6 py-16">
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
          box-shadow: 0 22px 48px rgba(12,12,12,0.18);
          transform-origin: center;
        }

        .in-view .phone-front {
          animation:
            enterFromBottom 2600ms cubic-bezier(.25,.95,.22,1) 500ms both,
            slowBreathFront 9.5s ease-in-out 3000ms infinite;
          box-shadow: 0 28px 56px rgba(12,12,12,0.20);
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: phones */}
        <div className="relative flex justify-center md:justify-start items-center" style={{ minHeight: 320 }}>
          <div className="absolute -left-6 top-8 w-64 h-64 rounded-full bg-[#E8A07A] opacity-90 shadow-md -z-10" />

          {/* FRONT phone (comes from bottom) */}
          <div className="relative z-10" style={{ width: 180, marginLeft: 18 }}>
            <div className="phone-front" style={{ position: "relative", borderRadius: 14 }}>
              <img src={phn1} alt="app preview phone 1" className="phone-size" />
              <div className="shine" />
              <div className="halo" />
            </div>
          </div>

          {/* BACK phone (comes from top) */}
          <div className="absolute z-0" style={{ right: -12, top: 36, width: 180 }}>
            <div className="phone-back" style={{ position: "relative", borderRadius: 14, transform: "scale(0.96)" }}>
              <img src={phn2} alt="app preview phone 2" className="phone-size" />
              <div className="shine" />
              <div className="halo" />
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="px-2 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <img src={barber} alt="barber icon" className="w-12 h-12" />
            <h4 className="text-lg font-medium text-gray-800">Services</h4>
          </div>

          <h2 className="reveal text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4" style={{ animationDelay: "0.05s" }}>
            Built by a <span className="text-[#B75A2F]">Barber</span>, <br className="hidden md:block" /> for everyone
          </h2>

          <p className="reveal text-sm md:text-base text-gray-600 max-w-xl mb-6" style={{ animationDelay: "0.12s" }}>
            Save time with <strong>accurate wait</strong> times and <strong>instant booking</strong>. Feel confident by browsing real work, profiles, and ratings. Keep things running smoothly with <strong>live queue</strong> visibility that helps shops flow better.
          </p>

          <div className="reveal mb-5" style={{ animationDelay: "0.18s" }}>
            <div className="inline-block w-full md:w-[520px] rounded-full border border-gray-200 shadow-lg px-6 py-4 bg-white text-center">
              <span className="text-base md:text-lg font-medium text-gray-800">Accurate wait times &amp; instant booking</span>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" style={{ animationDelay: "0.24s" }}>
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Profiles, ratings, and real work previews</h3>
              <p className="text-sm text-gray-500">Browse portfolios, read ratings, and preview real work before booking.</p>
            </div>

            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Live queue visibility</h3>
              <p className="text-sm text-gray-500">See the shop’s live queue so booking and walk-ins flow smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
