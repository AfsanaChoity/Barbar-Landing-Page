import React from "react";
import image from "../assets/images/client.png";
import map from "../assets/images/map.png";
import arrow from "../assets/svg/rightArrow.svg"
import { IoIosSearch } from "react-icons/io";

export default function AboutClients() {
    return (
        <div className="flex items-center justify-between ">
            {/* Text Section */}
            <div className=" w-1/2 text-center ">
                <h2 className="text-[64px] poppins-bold mb-8">ABOUT CLIENTS</h2>
                <p className="poppins-light text-[38px] my-4">Get found where clients search - Google, Instagram</p>
                <div className="flex justify-center mt-6">
                    <button className="flex  gap-2 border poppins-regular text-[20px]  py-[14px] px-[26px] rounded-lg">
                        Get found <img src={arrow} alt="" />
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-1/2 relative">
                {/* Background Div */}
                <div className="absolute bg-[#E9874E] w-[617px] h-[386px] right-0 top-28"></div>

                {/* Image Above the Background Div */}
                <div className="relative z-20">
                    <img
                        src={image}
                        alt="Client Barber"
                        className="w-[572px] h-[381px] rounded-[20px] object-cover"
                    />
                </div>

                {/* Map Image at the Right Side */}
                <div className="absolute top-58 right-10 z-30">
                    <div className="mb-4">
                        <div class="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search Barbers"
                                class="w-full py-3 pl-4 pr-16 border border-[#343232] rounded-[20px] text-[24px] poppins-light bg-white text-black"
                            />
                            <IoIosSearch class="absolute right-4 text-[#343232] text-[28px]" />
                        </div>


                    </div>
                    <img
                        src={map}
                        alt="map"
                        className="w-[388px] h-[280px] rounded-[20px]"
                    />
                </div>
            </div>

        </div>
    );
}
