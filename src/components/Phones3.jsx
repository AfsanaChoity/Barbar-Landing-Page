import bgImage from "/curveBg.svg";
import vedio1 from "../assets/vedio/Video_1.mp4";
import vedio2 from "../assets/vedio/Video_2.mp4";
import vedio3 from "../assets/vedio/Video_3.mp4";
import phoneFrame from "../assets/svg/Phone_Mockup.svg";

import React from 'react'

export default function Phones3() {
  return (
    <div className="flex justify-center items-center w-[100%]" style={{
      backgroundImage: `url("/curveBg.svg")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
        
        
       
    }}>

      {/* Phones */}
      <div className="container mx-auto  relative px-[6%] md:px-[2%] xl:px-[4%] 2xl:px-0 flex justify-between  ">

        {/* Left Phone */}
        
        <div className="">
          <img src={phoneFrame} alt="phone" className="absolute w-[80px] h-[200px]  md:w-[210px] md:h-[500px] lg:w-[273px] lg:h-[574px] 2xl:w-[333px] 2xl:h-[674px]"/>
          <video 
          src={vedio2}
          muted
          autoPlay
          loop
          playsInline
          className="w-[80px] h-[160px] md:w-[210px] md:h-[420px] lg:w-[273px] lg:h-[534px] mt-5 md:mt-10 lg:mt-5 2xl:mt-0 2xl:w-[333px] 2xl:h-[674px] object-contain rounded-[16px] md:rounded-[38px] lg:rounded-[38px] xl:rounded-[58px] "
          ></video>
        </div>

        {/* Middle Phone */}
        <div className="relative -top-6 md:-top-20 lg:-top-30 2xl:-top-28">
          <img src={phoneFrame} alt="phone" className="absolute w-[90px] h-[220px] md:w-[240px] md:h-[540px] lg:w-[300px] lg:h-[600px] 2xl:w-[384px] 2xl:h-[778px]"/>
          <video 
          src={vedio1}
          muted
          autoPlay
          loop
          playsInline
          className="w-[90px] h-[180px] md:w-[240px] md:h-[476px] mt-5 md:mt-8 lg:mt-0 lg:w-[300px] lg:h-[600px] 2xl:w-[384px] 2xl:h-[778px] object-contain rounded-[14px] md:rounded-[38px] lg:rounded-[68px] "
          ></video>
        </div>

         {/* Right Phone */}
        <div className="">
          <img src={phoneFrame} alt="phone" className="absolute w-[80px] h-[200px] md:w-[210px] md:h-[500px] lg:w-[273px] lg:h-[574px] 2xl:w-[333px] 2xl:h-[674px]"/>
          <video 
          src={vedio3}
          muted
          autoPlay
          loop
          playsInline
          className="w-[80px] h-[160px] md:w-[210px] md:h-[420px] lg:w-[273px] lg:h-[534px] mt-5 md:mt-10 lg:mt-5 2xl:mt-0 2xl:w-[333px] 2xl:h-[674px] object-contain rounded-[16px] md:rounded-[38px] lg:rounded-[38px] xl:rounded-[58px] "
          ></video>
        </div>

      </div>

    </div>
  )
}
