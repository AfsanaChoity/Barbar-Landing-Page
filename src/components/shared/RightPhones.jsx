import React from 'react'

export default function RightPhones({ phn1, phn2 }) {
    return (
        <div className="relative mt-10 md:mt-0 flex gap-3 md:gap-5 justify-center  items-center" style={{ minHeight: 320 }}>
            <div className="absolute top-26 md:-left-6  w-[280px] h-[200px] md:w-[322px] md:h-[214px] rounded-tl-[132px] rounded-bl-[132px] rounded-br-[132px] bg-[#E9874E] opacity-90 shadow-2xl -z-10  shadow-gray-600" />

            {/* FRONT phone (comes from bottom) */}
            <div className="ml-4 md:mt-10 w-[114px]">
                <div className="phone-front" style={{ position: "relative", borderRadius: 14 }}>
                    <img src={phn2} alt="app preview phone 1" className="w-[114px] h-[242px] " />
                    <div className="shine" />
                    <div className="halo" />
                </div>
            </div>

            {/* BACK phone (comes from top) */}
            <div className=" w-[114px] mb-10 md:mb-0">
                <div className="phone-back" style={{ position: "relative", borderRadius: 14 }}>
                    <img src={phn1} alt="app preview phone 2" className="w-[114px] h-[242px]" />
                    <div className="shine" />
                    <div className="halo" />
                </div>
            </div>
        </div>
    )
}
