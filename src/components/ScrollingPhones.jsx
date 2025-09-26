// import React, { useEffect, useRef, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// /**
//  * items: Array of { id, image, description }
//  * Usage: <ClientsCarousel items={items} />
//  */
// export default function ScrollingPhones({ items = [], text }) {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);

//   const [containerWidth, setContainerWidth] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(4); // default to 4
//   const [index, setIndex] = useState(0);

//   // gap in px between cards
//   const gap = 28;

//   // responsive items per view
//   useEffect(() => {
//     function calc() {
//       const w = typeof window !== "undefined" ? window.innerWidth : 1200;

//       if (w < 640) setItemsPerView(1);
//       else if (w < 1024) setItemsPerView(2);
//       else setItemsPerView(4); // always show 4 on >=1024px (desktop)

//       if (containerRef.current) {
//         setContainerWidth(containerRef.current.clientWidth);
//       }
//     }
//     calc();
//     window.addEventListener("resize", calc);
//     return () => window.removeEventListener("resize", calc);
//   }, []);

//   // clamp index whenever itemsPerView/container changes
//   const maxIndex = Math.max(0, items.length - itemsPerView);
//   useEffect(() => {
//     setIndex((i) => Math.min(i, maxIndex));
//   }, [itemsPerView, containerWidth, items.length, maxIndex]);

//   // resize observer to keep accurate width
//   useEffect(() => {
//     if (!containerRef.current || typeof ResizeObserver === "undefined") return;
//     const ro = new ResizeObserver(() => {
//       setContainerWidth(containerRef.current.clientWidth);
//     });
//     ro.observe(containerRef.current);
//     return () => ro.disconnect();
//   }, []);

//   // slide width (px)
//   const slideWidth =
//     containerWidth && itemsPerView
//       ? Math.floor((containerWidth - gap * (itemsPerView - 1)) / itemsPerView)
//       : 0;

//   // transform style
//   const trackStyle = {
//     transform: `translateX(-${index * (slideWidth + gap)}px)`,
//     transition: "transform 420ms cubic-bezier(.22,.9,.3,1)",
//     width: `${items.length * slideWidth + (items.length - 1) * gap}px`,
//   };

//   // nav handlers
//   const prev = () => setIndex((i) => Math.max(0, i - 1));
//   const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
//   const jumpTo = (i) => setIndex(Math.min(Math.max(0, i), maxIndex));

//   // keyboard
//   const onKeyDown = (e) => {
//     if (e.key === "ArrowLeft") prev();
//     if (e.key === "ArrowRight") next();
//   };

//   // touch / swipe
//   const touchStart = useRef(0);
//   const touchCurrent = useRef(0);
//   const isSwiping = useRef(false);
//   const onTouchStart = (e) => {
//     isSwiping.current = true;
//     touchStart.current = e.touches[0].clientX;
//   };
//   const onTouchMove = (e) => {
//     if (!isSwiping.current) return;
//     touchCurrent.current = e.touches[0].clientX;
//   };
//   const onTouchEnd = () => {
//     if (!isSwiping.current) return;
//     const dx = touchCurrent.current - touchStart.current;
//     const threshold = Math.max(30, slideWidth * 0.18);
//     if (dx > threshold) prev();
//     else if (dx < -threshold) next();
//     isSwiping.current = false;
//     touchStart.current = 0;
//     touchCurrent.current = 0;
//   };

//   if (!items || items.length === 0) {
//     return <div className="py-10 text-center text-gray-500">No items to show.</div>;
//   }

//   return (
//     <section className="relative py-6">
//       {/* title + arrows */}
//       <div className="flex items-center justify-between px-6 mb-4">
//         <h2 className="caladea-bold tracking-tight text-[55px]">{text}</h2>

//         <div className="hidden sm:flex items-center gap-2">
//           <button
//             onClick={prev}
//             disabled={index === 0}
//             aria-label="Previous"
//             className={`p-2 shadow ${index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
//           >
//             <IoIosArrowBack className="text-lg" />
//           </button>
//           <button
//             onClick={next}
//             disabled={index >= maxIndex}
//             aria-label="Next"
//             className={`p-2  shadow ${index >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
//           >
//             <IoIosArrowForward className="text-lg" />
//           </button>
//         </div>
//       </div>

//       {/* carousel container — note: NO horizontal padding so 4 cards fit exactly */}
//       <div
//         ref={containerRef}
//         className="overflow-hidden"           // removed px-6 here so cards fit perfectly
//         onKeyDown={onKeyDown}
//         tabIndex={0}
//         role="region"
//         aria-roledescription="carousel"
//         aria-label="Clients carousel"
//         onTouchStart={onTouchStart}
//         onTouchMove={onTouchMove}
//         onTouchEnd={onTouchEnd}
//       >
//         <div
//           ref={trackRef}
//           className="flex items-stretch"
//           style={{
//             gap: `${gap}px`,
//             ...trackStyle,
//           }}
//         >
//           {items.map((it) => (
//             <article
//               key={it.id}
//               className="flex-shrink-0 bg-white rounded-2xl border border-gray-200 shadow-sm"
//               style={{
//                 width: `${slideWidth}px`,
//                 flex: `0 0 ${slideWidth}px`,
//               }}
//             >
//               <div className="p-6 flex flex-col items-center">
//                 <div className="w-full max-w-[220px] mx-auto">
//                   <img
//                     src={it.image}
//                     alt={it.description ? it.description.slice(0, 60) : "client image"}
//                     className="w-full h-auto object-contain rounded-lg"
//                   />
//                 </div>

//                 <div className="mt-6 w-full">
//                   <div className="bg-[#E9874E] text-white rounded-[20px] px-4 py-3 text-center">
//                     {it.description && (
//                       <p className="poppins-medium text-xl leading-snug">{it.description}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>

//       {/* mobile dots */}
//       <div className="flex justify-center mt-6 sm:hidden">
//         <div className="flex gap-2">
//           {Array.from({ length: maxIndex + 1 }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => jumpTo(i)}
//               aria-label={`Go to page ${i + 1}`}
//               className={`rounded-full transition-all duration-200 ${index === i ? "w-6 h-2 bg-gray-800 rounded-md" : "w-2 h-2 bg-gray-300"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

/**
 * items: Array of objects:
 *  { id, image, description }                // normal card (single block description)
 *  { id, image, variant: "dashboard", descriptionLines: [...] } // special dashboard card
 *
 * Example usage at the bottom.
 */
export default function ScrollingPhones({ items = [], text }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [index, setIndex] = useState(0);

  const gap = 28;

  useEffect(() => {
    function calc() {
      const w = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (w < 640) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else setItemsPerView(4);
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [itemsPerView, containerWidth, items.length, maxIndex]);

  useEffect(() => {
    if (!containerRef.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => setContainerWidth(containerRef.current.clientWidth));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const slideWidth =
    containerWidth && itemsPerView
      ? Math.floor((containerWidth - gap * (itemsPerView - 1)) / itemsPerView)
      : 0;

  const trackStyle = {
    transform: `translateX(-${index * (slideWidth + gap)}px)`,
    transition: "transform 420ms cubic-bezier(.22,.9,.3,1)",
    width: `${items.length * slideWidth + (items.length - 1) * gap}px`,
  };

  // nav + interactions
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const jumpTo = (i) => setIndex(Math.min(Math.max(0, i), maxIndex));
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const touchStart = useRef(0);
  const touchCurrent = useRef(0);
  const isSwiping = useRef(false);
  const onTouchStart = (e) => {
    isSwiping.current = true;
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    if (!isSwiping.current) return;
    touchCurrent.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (!isSwiping.current) return;
    const dx = touchCurrent.current - touchStart.current;
    const threshold = Math.max(30, slideWidth * 0.18);
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    isSwiping.current = false;
    touchStart.current = 0;
    touchCurrent.current = 0;
  };

  if (!items || items.length === 0) {
    return <div className="py-10 text-center text-gray-500">No items to show.</div>;
  }

  return (
    <section className="relative py-6">
      <div className="flex items-center justify-between px-6 mb-4">
        <h2 className="text-2xl font-bold tracking-tight">{text}</h2>

        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            className={`p-2 rounded-md  shadow ${index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
          >
            <IoIosArrowBack className="text-lg" />
          </button>
          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next"
            className={`p-2 rounded-md  shadow ${index >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
          >
            <IoIosArrowForward className="text-lg" />
          </button>
        </div>
      </div>

      {/* Carousel - no extra horizontal padding so 4 cards fit exactly */}
      <div
        ref={containerRef}
        className="overflow-hidden"
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Clients carousel"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div ref={trackRef} className="flex items-stretch" style={{ gap: `${gap}px`, ...trackStyle }}>
          {items.map((it) => {
            const isDashboard = it.variant === "dashboard";
            return (
              <article
                key={it.id}
                className="flex-shrink-0 bg-white rounded-2xl border border-gray-200 shadow-sm"
                style={{ width: `${slideWidth}px`, flex: `0 0 ${slideWidth}px` }}
              >
                <div className="p-6 flex flex-col items-center">
                  {/* image area (same for both) */}
                  <div className={`w-full mx-auto ${isDashboard ? "max-w-[320px]" : "max-w-[220px]"}`}>
                    <img src={it.image} alt={it.description ? it.description.slice(0, 60) : "client image"} className="w-full h-auto object-contain rounded-lg" />
                  </div>

                  {/* normal card: small orange caption */}
                  {!isDashboard && (
                    <div className="mt-6 w-full">
                      <div className="bg-[#EA8653] text-white rounded-[20px] px-4 py-3 text-center">
                        {it.description && <p className="text-sm md:text-base leading-snug poppins-medium  ">{it.description}</p>}
                      </div>
                    </div>
                  )}

                  {/* dashboard variant: big rounded orange panel with heading + numbered list */}
                  {isDashboard && (
                    <div className="mt-6 w-full">
                      <div className="bg-[#EA8653] text-white rounded-2xl px-6 py-6 md:py-8 text-left">
                        {/* large centered heading like your image */}
                        <h3 className="text-xl md:text-[24px] poppins-semibold text-center mb-4">Dashboard</h3>

                        {/* if descriptionLines provided, render numbered list */}
                        {Array.isArray(it.descriptionLines) && it.descriptionLines.length > 0 ? (
                          <ol className="list-decimal list-inside space-y-2 pl-3 md:pl-4">
                            {it.descriptionLines.map((line, idx) => (
                              <li key={idx} className="text-sm md:text-base leading-snug poppins-normal">
                                {line}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          // fallback: render long description text in paragraphs (split by newline)
                          it.description ? (
                            it.description.split("\n").map((p, idx) => (
                              <p key={idx} className="text-sm md:text-base leading-snug mb-2">
                                {p}
                              </p>
                            ))
                          ) : null
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* mobile dots */}
      <div className="flex justify-center mt-6 sm:hidden">
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${index === i ? "w-6 h-2 bg-gray-800 rounded-md" : "w-2 h-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
