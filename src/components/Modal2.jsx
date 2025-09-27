import React, { useEffect } from "react";
import videoSrc from "../assets/vedio/Logo_design_WithMusic.mp4";
import welcome from "../assets/gif/welcome1.gif"

export default function LogoVideoModal2({
    isOpen = false,
    onClose = () => { },
}) {



    useEffect(() => {
        const styleId = "logo-video-modal-styles";
        if (!document.getElementById(styleId)) {
            const s = document.createElement("style");
            s.id = styleId;
            s.innerHTML = `
        @keyframes bgShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes confettiFloat { 0% { transform: translateY(0); opacity: 1 } 100% { transform: translateY(-120px); opacity: 0.15 } }

        .lv-modal-bg {
          background: linear-gradient(180deg, #E8BA9F 30%, #E9874E 50%);
          background-size: 400% 400%;
          animation: bgShift 8s ease-in-out infinite;
        }

        .lv-confetti {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            radial-gradient(rgba(255,80,40,0.25) 1px, transparent 1px);
          background-size: 26px 26px, 40px 40px;
          mix-blend-mode: multiply;
          opacity: 0.9;
          animation: confettiFloat 6s linear infinite;
        }

        .lv-modal-card { border-radius: 14px; }
        .lv-inner-shadow { box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
        .lv-close-btn { transition: transform .12s ease; }
        .lv-close-btn:hover { transform: scale(1.06); }
      `;
            document.head.appendChild(s);
        }
    }, []);

    

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 ">
                    {/* backdrop */}
                    <div className="absolute inset-0 bg-black/40 " onClick={onClose} aria-hidden />

                    {/* animated modal card */}
                    <div

                        className="relative w-full max-w-2xl lv-modal-card lv-inner-shadow overflow-hidden"
                    >
                        <div className="absolute z-20 top-0">
                            <img src={welcome} alt="" className="w-[357px] h-[357px]" />
                        </div>

                        <div className="absolute z-20 right-0 top-0">
                            <img src={welcome} alt="" className="w-[271px] h-[394px]" />
                        </div>

                        <div className="absolute z-20 left-0 bottom-0">
                            <img src={welcome} alt="" className="w-[230px] h-[415px]" />
                        </div>
                        <div className="absolute z-20 right-0 bottom-0">
                            <img src={welcome} alt="" className="w-[230px] h-[415px]" />
                        </div>

                        <div className="absolute inset-0 lv-modal-bg " />

                        <div className="lv-confetti" />

                        <div className="relative p-6 md:p-10">
                            <button
                                onClick={onClose}
                                className="cursor-pointer absolute top-4 right-4 z-50 rounded-full bg-white/40 backdrop-blur-sm p-2 lv-close-btn"
                                aria-label="Close modal"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>



                            <h2 className="urbanist-medium mb-6 text-[28px] md:text-[48px] text-center text-[#161A1A]">Welcome To</h2>


                            <div className="mt-4 flex justify-center">
                                <div className="relative z-30">
                                    <video

                                        src={videoSrc}
                                        className="w-[300px] h-[300px] object-cover mx-auto"
                                        muted
                                        autoPlay
                                        loop
                                        playsInline

                                    />
                                </div>
                            </div>

                            <h3 className="text-center urbanist-extrabold text-[28px] md:text-[48px]  mt-6 mb-4 text-[#161A1A]">Barber Time</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

