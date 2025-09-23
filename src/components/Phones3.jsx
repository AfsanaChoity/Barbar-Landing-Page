import React, { useEffect, useRef } from "react";
import bgImage from "../assets/svg/curveBg.svg";
import vedio1 from "../assets/vedio/Video_1.mp4";
import vedio2 from "../assets/vedio/Video_2.mp4";
import vedio3 from "../assets/vedio/Video_3.mp4";
import phoneFrame from "../assets/svg/Phone_Mockup.svg";

export default function Phones3() {
  // adjust these once to change all phones
  const PHONE_W = 333; // px
  const PHONE_H = 674; // px

  const Mid_PHONE_W = 384; // px
  const Mid_PHONE_H = 778; // px

  // refs to force play
  const refs = [useRef(null), useRef(null), useRef(null)];
  // switch to true while debugging to show native video controls
  const debugControls = false;

  useEffect(() => {
    // try to play each video; log failures so you can debug
    refs.forEach((r, i) => {
      const vid = r.current;
      if (!vid) return;
      // ensure attributes are set (muted needed for autoplay on most browsers)
      vid.muted = true;
      vid.playsInline = true;
      vid.loop = true;
      vid.autoplay = true;
      vid.preload = "auto";

      // try to play programmatically
      const p = vid.play();
      if (p !== undefined) {
        p.catch((err) => {
          // autoplay may fail — show console hint and enable controls for manual testing
          console.warn(`Video ${i + 1} play() failed:`, err);
        });
      }
    });
  }, []);

  // shared style for each phone container and internal video sizing
  const phoneStyle = {
    width: `${PHONE_W}px`,
    height: `${PHONE_H}px`,
  };

   const mid_phoneStyle = {
    width: `${Mid_PHONE_W}px`,
    height: `${Mid_PHONE_H}px`,
  };

  const videoInnerStyles = {
    // tweak these percentages to exactly match your svg phone screen area
    width: "90%",  // Adjusted to fit within the screen area of the phone
    height: "96%", // Adjusted to fit within the screen area of the phone
    objectFit: "cover",  // Ensures the video covers the area without distorting
    borderRadius: "38px", // To match the phone's rounded corners
    // marginTop: "2%", // Position video nicely within the frame
  };

  return (
    <div className="relative w-full">
      {/* background wave */}
      <div className="w-full">
        <img src={bgImage} alt="bg" className="w-full block" />
      </div>

      {/* phones wrapper (shown on md and up like your earlier layout) */}
      <div className="hidden md:flex items-end justify-center w-full absolute inset-0 pointer-events-none ">
        <div className="relative  flex justify-center items-end">
          {/* left phone (behind) */}
          <div
            className="relative z-10 transform -translate-x-50 top-30"
            style={phoneStyle}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                ref={refs[0]}
                className="pointer-events-auto"
                style={videoInnerStyles}
                muted
                playsInline
                loop
                preload="auto"
                controls={debugControls}
              >
                <source src={vedio2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* phone frame on top */}
            <img
              src={phoneFrame}
              alt="phone left"
              className="relative w-full h-auto pointer-events-auto -z-10"
            />
          </div>

          {/* center phone (front, larger visually but same actual size) */}
          <div className="relative z-30 mx-6 top-20" style={mid_phoneStyle}>
            <div className="absolute inset-0 flex items-center justify-center ">
              <video
                ref={refs[1]}
                className="pointer-events-auto"
                style={videoInnerStyles}
                muted
                playsInline
                loop
                preload="auto"
                controls={debugControls}
              >
                <source src={vedio1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <img
              src={phoneFrame}
              alt="phone center"
              className="relative w-full h-auto pointer-events-auto -z-10"
            />
          </div>

          {/* right phone (behind) */}
          <div
            className="relative z-20 transform translate-x-50 top-30"
            style={phoneStyle}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                ref={refs[2]}
                className="pointer-events-auto"
                style={videoInnerStyles}
                muted
                playsInline
                loop
                preload="auto"
                controls={debugControls}
              >
                <source src={vedio3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <img
              src={phoneFrame}
              alt="phone right"
              className="relative w-full h-auto pointer-events-auto -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
