import React from "react";
import imgMap from "../assets/images/mapPhone.svg";
import pin0 from "../assets/images/Pin.svg";
import pin1 from "../assets/images/Pin (1).svg";
import pin2 from "../assets/images/Pin (2).svg";
import pin3 from "../assets/images/Pin (3).svg";

// MapView.jsx
// Only change: badge & image are wrapped in a small floating animation.
// Everything else kept as you had it.

export default function MapView() {
  const pins = [
    {
      id: 0,
      img: pin0,
      title: "Bar Bertime",
      count: "20",
      badgeBg: "bg-red-600",
      pos: { left: "24%", top: "28%" },
      size: "w-36 h-36",
    },
    {
      id: 1,
      img: pin1,
      title: "Hair Salon",
      count: "10",
      badgeBg: "bg-green-500",
      pos: { left: "40%", top: "42%" },
      size: "w-24 h-24",
    },
    {
      id: 2,
      img: pin2,
      title: "Skin Fade",
      count: "15",
      badgeBg: "bg-yellow-400",
      pos: { left: "60%", top: "28%" },
      size: "w-44 h-44",
    },
    {
      id: 3,
      img: pin3,
      title: "Beard Trim",
      count: "12",
      badgeBg: "bg-sky-600",
      pos: { left: "80%", top: "38%" },
      size: "w-28 h-28",
    },
  ];

  return (
    <div className="p-4">
      {/* tiny CSS for the float animations (kept inside the component so no extra files needed) */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .floating { animation: float 3s ease-in-out infinite; will-change: transform; }
        .floating-slow { animation: float-slow 3.2s ease-in-out infinite; will-change: transform; }
      `}</style>

      <div className="relative">
        {/* Map / phone image */}
        <img src={imgMap} alt="map phone" className="w-full h-auto block" />

        {/* Overlay container for pins (absolute over the image) */}
        <div className="absolute inset-0 pointer-events-none">
          {pins.map((p) => (
            <div
              key={p.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto"
              style={{ left: p.pos.left, top: p.pos.top }}
            >
              <div className="relative inline-block">
                {/* Inner wrapper is the element we animate so the outer transform isn't overridden */}
                <div
                  className="relative inline-block floating"
                  style={{ animationDelay: `${p.id * 0.18}s` }} // small stagger by id
                >
                  {/* small top badge with count - give it a slightly different float */}
                  <div
                    className={`absolute -top-12 right-0 text-[32px] px-2 py-1 rounded-[5px] text-white poppins-medium floating-slow bg-[#2F2E2E]`}
                    // keep the original classes you used, only adding floating-slow
                  >
                    <span className="text-[#D17C51]">{p.count}</span>Que
                  </div>

                  {/* circular image (keeps your original image behavior) */}
                  <div>
                    <img src={p.img} alt={p.title} className="w-[80%] h-[80%] object-cover" />
                  </div>

                 
                </div>
              </div>

              {/* label text under each pin */}
              <div className="">
                <div className="text-[40px] poppins-semibold text-black">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
