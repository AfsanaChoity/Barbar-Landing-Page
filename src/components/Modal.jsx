import React, { useEffect, useRef, useState } from "react";
import logoSrc from "../assets/logo.svg"
import videoSrc from "../assets/vedio/Logo_design_WithMusic.mp4"

export default function LogoVideoModal({
    isOpen = false,
    onClose = () => { },
}) {

    const videoRef = useRef(null);

    // Inject small CSS animations into the document head so this file is self-contained
    useEffect(() => {
        const styleId = "logo-video-modal-styles"
        if (!document.getElementById(styleId)) {
            const s = document.createElement("style")
            s.id = styleId
            s.innerHTML = `
        @keyframes bgShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes confettiFloat { 0% { transform: translateY(0); opacity: 1 } 100% { transform: translateY(-120px); opacity: 0.15 } }

        /* animated gradient background that looks like the design */
        .lv-modal-bg {
          background: linear-gradient(180deg, #E8BA9F 30%, #E9874E 50%);
          background-size: 400% 400%;
          animation: bgShift 8s ease-in-out infinite;
        }

        /* simple confetti / speckled overlay built from radial-gradients */
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

        /* rounded large modal container look */
        .lv-modal-card { border-radius: 14px; }

        /* subtle inner shadow like the image */
        .lv-inner-shadow {
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }

        /* simple X button style */
        .lv-close-btn { transition: transform .12s ease; }
        .lv-close-btn:hover { transform: scale(1.06); }
      `
            document.head.appendChild(s)
        }
    }, [])

    // Play/pause video when modal opens/closes
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        if (isOpen) {
            v.currentTime = 0;
            // NOTE: browsers may block autoplay with sound. This attempts to play —
            // if browser blocks, user will need to press play (or we can show a play overlay).
            v.muted = false;
            const playPromise = v.play();
            if (playPromise && typeof playPromise.then === "function") {
                playPromise.catch(() => {
                    // autoplay blocked — you can enable controls or show a play button
                    v.controls = true;
                });
            }
        } else {
            v.pause();
            v.currentTime = 0;
            // hide controls if you previously enabled them
            if (v) v.controls = false;
        }
    }, [isOpen]);

    // keyboard: ESC to close
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    // render nothing when closed
    if (!isOpen) return null;

    return (
        <>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                    {/* backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 "
                        onClick={onClose}
                        aria-hidden
                    />

                    {/* animated modal card */}
                    <div className="relative w-full max-w-2xl lv-modal-card lv-inner-shadow overflow-hidden">
                        {/* animated background + confetti overlay */}
                        <div className="absolute inset-0 lv-modal-bg" />
                        <div className="lv-confetti" />

                        {/* card content */}
                        <div className="relative p-6 md:p-10">
                            {/* close button */}
                            <button
                                onClick={onClose}
                                className="cursor-pointer absolute top-4 right-4 z-10 rounded-full bg-white/40 backdrop-blur-sm p-2 lv-close-btn"
                                aria-label="Close modal"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-6">Welcome To</h2>

                            {/* top image (the barber icon) */}

                           

                            {/* video area (centered) */}
                            <div className="mt-4 flex justify-center">
                                <div className="w-full max-w-3xl">
                                    <video
                                        ref={videoRef}
                                        src={videoSrc}
                                        loop
                                        playsInline
                                        className="w-full rounded-md shadow-lg"
                                    />
                                </div>
                            </div>

                             <h3 className="text-center text-2xl md:text-3xl font-black mt-6 mb-4">Barber Time</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
