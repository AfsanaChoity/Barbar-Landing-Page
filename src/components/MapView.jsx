// import React from "react";
// import imgMap from "../assets/images/mapPhone.svg";
// import pin0 from "../assets/images/Pin.svg";
// import pin1 from "../assets/images/Pin (1).svg";
// import pin2 from "../assets/images/Pin (2).svg";
// import pin3 from "../assets/images/Pin (3).svg";


// export default function MapView() {
//   const pins = [
//     {
//       id: 0,
//       img: pin0,
//       title: "Bar Bertime",
//       count: "20",
//       badgeBg: "bg-red-600",
//       pos: { left: "24%", top: "28%" },
//       size: "w-36 h-36",
//     },
//     {
//       id: 1,
//       img: pin1,
//       title: "Hair Salon",
//       count: "10",
//       badgeBg: "bg-green-500",
//       pos: { left: "40%", top: "42%" },
//       size: "w-24 h-24",
//     },
//     {
//       id: 2,
//       img: pin2,
//       title: "Skin Fade",
//       count: "15",
//       badgeBg: "bg-yellow-400",
//       pos: { left: "60%", top: "28%" },
//       size: "w-44 h-44",
//     },
//     {
//       id: 3,
//       img: pin3,
//       title: "Beard Trim",
//       count: "12",
//       badgeBg: "bg-sky-600",
//       pos: { left: "80%", top: "38%" },
//       size: "w-28 h-28",
//     },
//   ];

//   return (
//     <div className="p-4 ">
//       {/* tiny CSS for the float animations (kept inside the component so no extra files needed) */}
//       <style>{`
//         @keyframes float {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-12px); }
//           100% { transform: translateY(0); }
//         }
//         @keyframes float-slow {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//           100% { transform: translateY(0); }
//         }
//         .floating { animation: float 3s ease-in-out infinite; will-change: transform; }
//         .floating-slow { animation: float-slow 3.2s ease-in-out infinite; will-change: transform; }
//       `}</style>

//       <div className="relative">
//         {/* Map / phone image */}
//         <img src={imgMap} alt="map phone" className="w-full h-auto block" />

//         {/* Overlay container for pins (absolute over the image) */}
//         <div className="absolute inset-0 pointer-events-none">
//           {pins.map((p) => (
//             <div
//               key={p.id}
//               className="absolute transform -translate-x-20 2xl:-translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto"
//               style={{ left: p.pos.left, top: p.pos.top }}
//             >
//               <div className="relative inline-block">
//                 {/* Inner wrapper is the element we animate so the outer transform isn't overridden */}
//                 <div
//                   className="relative inline-block floating"
//                   style={{ animationDelay: `${p.id * 0.18}s` }} // small stagger by id
//                 >
//                   {/* small top badge with count - give it a slightly different float */}
//                   <div
//                     className={`absolute -top-5  lg:-top-10 xl:-top-12  2xl:right-0 text-[10px] lg:text-xl  xl:text-2xl 2xl:text-[32px] px-1 py-0.5 md:px-2 md:py-1 rounded-[5px] text-white poppins-medium floating-slow bg-[#2F2E2E]`}
//                     // keep the original classes you used, only adding floating-slow
//                   >
//                     <span className="text-[#D17C51]">{p.count}</span>Que
//                   </div>

//                   {/* circular image (keeps your original image behavior) */}
//                   <div className="">
//                     <img src={p.img} alt={p.title} className="w-[30%] h-[30%] lg:w-[50%] lg:h-[60%] xl:w-[70%] xl:h-[70%] 2xl:w-[80%] 2xl:h-[80%] object-cover" />
//                   </div>

                 
//                 </div>
//               </div>

//               {/* label text under each pin */}
//               <div className="">
//                 <div className="text-xs md:text-2xl 2xl:text-[40px] poppins-semibold text-black -ml-14 2xl:-ml-0">{p.title}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import imgMap from "../assets/images/mapPhone.svg";
import pin0 from "../assets/images/Pin.svg";
import pin1 from "../assets/images/Pin (1).svg";
import pin2 from "../assets/images/Pin (2).svg";
import pin3 from "../assets/images/Pin (3).svg";

export default function MapView() {
  const pins = [
    {
      id: 0,
      img: pin0,
      title: "Bar Bertime",
      count: "20",
      badgeBg: "bg-red-600",
      pos: { left: "25%", top: "28%" },
      size: "w-40 h-36",
    },
    {
      id: 1,
      img: pin1,
      title: "Hair Salon",
      count: "10",
      badgeBg: "bg-green-500",
      pos: { left: "44%", top: "42%" },
      size: "w-30 h-27",
    },
    {
      id: 2,
      img: pin2,
      title: "Skin Fade",
      count: "15",
      badgeBg: "bg-yellow-400",
      pos: { left: "60%", top: "28%" },
      size: "w-48 h-45",
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
    <div>
      <div className="p-4 ">
      {/* tiny CSS for the float animations + mobile overrides */}
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

        /* ----------------------
           MOBILE (max-width: 767px) overrides only
           keep md+ untouched
           ---------------------- */
        @media (max-width: 767px) {
          /* unify pin transform so we can control centering per pin */
          .pin { transform: translate(50%, -10%) !important; } 

          /* per-pin position adjustments for mobile */
          .pin-0 { left: 44% !important; top: 24% !important; }
          .pin-1 { left: 58% !important; top: 40% !important; }
          .pin-2 { left: 76% !important; top: 24% !important; }
          .pin-3 { left: 92% !important; top: 30% !important; }

          /* reduce image sizes on mobile for neat layout */
          .pin .pin-img {
            width: 38px !important;
            height: 35px !important;
            display: inline-block;
          }
          .pin .pin-img img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
          }

          /* badge adjustments (top/right offsets + font-size) */
          .pin .pin-badge {
            position: absolute;
            top: -18px !important;
            right: -6px !important;
            padding: 2px 6px !important;
            border-radius: 6px !important;
            font-size: 10px !important;
            line-height: 1 !important;
          }
          /* label/title adjustments */
          .pin .pin-title {
            font-size: 8px !important;
            margin-top: -6px !important;
            margin-left: -12px !important; /* center-align label under the small icon */
            white-space: nowrap;
          }
        }
      `}</style>

      <div className="relative">
        {/* Map / phone image */}
        <img src={imgMap} alt="map phone" className="w-full h-auto block" />

        {/* Overlay container for pins (absolute over the image) */}
        <div className="absolute inset-0 pointer-events-none">
          {pins.map((p) => (
            <div
              key={p.id}
              // add pin and pin-<id> classes so CSS can target mobile precisely
              className={`absolute transform -translate-x-20 2xl:-translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto pin pin-${p.id}`}
              style={{ left: p.pos.left, top: p.pos.top }}
            >
              <div className="relative inline-block">
                {/* Inner wrapper is the element we animate so the outer transform isn't overridden */}
                <div
                  className="relative inline-block floating"
                  style={{ animationDelay: `${p.id * 0.18}s` }} // small stagger by id
                >
                  {/* small top badge with count - added class pin-badge for mobile overrides */}
                  <div
                    className={`pin-badge absolute -top-5 lg:-top-10 xl:-top-12 2xl:right-0 text-[10px] lg:text-xl xl:text-2xl 2xl:text-[32px] px-1 py-0.5 md:px-2 md:py-1 rounded-[5px] text-white poppins-medium floating-slow bg-[#2F2E2E]`}
                    style={{}}
                  >
                    <span className="text-[#D17C51]">{p.count}</span>Que
                  </div>

                  {/* circular image (keeps your original image behavior) */}
                  <div className={`pin-img ${p.size}`}>
                    <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>

              {/* label text under each pin - add pin-title class for mobile override */}
              <div className="">
                <div className=" md:text-2xl 2xl:text-[38px] poppins-semibold text-black  2xl:ml-4 pin-title">
                  {p.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* content */}
    <div className="text-center space-y-2 md:space-y-6 px-4 xl:px-0">
          <h2 className="text-2xl lg:text-[64px] poppins-semibold">Map View</h2>
          <p className="poppins-light text-sm lg:text-[28px] xl:text-[36px] text-black/60">See Que of your barber shops so you know how busy they are in real time. </p>
          <h3 className="poppins-semibold lg:text-[36px]">NO MORE LONG QUE WAITING</h3>
    </div>

    </div>
  );
}
