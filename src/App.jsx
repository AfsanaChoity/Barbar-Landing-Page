import React from 'react';
import logo from './assets/logo.svg';
import vector8 from './assets/svg/Vector8.svg'
import vector9 from './assets/svg/Vector9.svg'
import playstore from './assets/svg/playstore.svg'
import apple from './assets/svg/apple.svg'
import phn1 from './assets/svg/phone1.svg'
import phn2 from './assets/svg/phone2.svg'
import phn3 from './assets/svg/phone3.svg'
import CoreFeatures from './components/CoreFeatures';
import Phones3 from './components/Phones3';
import MeetAskRey from './components/MeetAskRey';
import SmarterQueues from './components/SmarterQueues';
import AboutClients from './components/AboutClients';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className=''>

      {/* Hero section */}

      <div className=''>

        {/* bg images */}
        <div className=' w-full '>
          <img src={vector8} alt="bg1" className="absolute inset-0 w-full object-cover pointer-events-none z-10 sm:h-[520px] md:h-full  " />
          <img src={vector9} alt="bg2" className="absolute inset-0 w-full object-cover pointer-events-none z-0  sm:h-[520px] md:h-full mt-[77px]"
          />
        </div>

        {/* navbar */}
        <nav className=''>
          <div className='flex items-center justify-between p-4 gap-2 '>
            {/* logo */}
            <div className='z-20'>
              <img src={logo} alt="logo" className='h-[209px] w-[96px]' />
            </div>

            {/* content */}
            <div className='flex items-center justify-between w-full transform -translate-y-8 z-20'> {/* Shift items up */}

              {/* shop name */}
              <div className=''>
                <h3 className='text-[#161A1A] md:text-xl xl:text-2xl urbanist-extrabold'>Barbers Time</h3>
              </div>

              {/* lists */}
              <div className='hidden md:block'>
                <ul className='urbanist-semibold md:text-[20px] xl:text-[22px] flex'>
                  <li className="mx-4">Home</li>
                  <li className="mx-4">Services</li>
                  <li className="mx-4">Map</li>
                  <li className="mx-4">Features</li>
                  <li className="mx-4">Founders</li>
                </ul>
              </div>

              {/* Button */}
              <div className=''>
                <button className='urbanist-bold md:text-[20px] xl:text-[22px] border  border-black rounded-[100px] px-[38px] py-[18px]'>Stay With Us</button>
              </div>

            </div>
          </div>
        </nav>

        {/* Content+ image */}

        <div className='flex justify-between'>

          {/* content */}
          <div className='relative  z-30 w-[697px] ml-[10%] -mt-20 '>
            <h1 className='text-[#000000] lg:text-[80px] poppins-bold '>
              Get Notified When we Launch
            </h1>

            {/* Input */}
            <div className="mt-10 flex items-center  w-[637px] h-[60px] rounded-full border border-black overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 outline-none poppins-medium text-black placeholder:text-black/80"
              />
              <button className="bg-black text-white px-10 py-4 rounded-full poppins-regular">
                Notify me
              </button>
            </div>

            {/* Available on */}
            <div className="flex flex-col items-center space-y-4 mt-8">
              {/* Title */}
              <h3 className="text-white text-[30px] poppins-medium">Available on</h3>

              {/* Buttons */}
              <div className="flex space-x-4">
                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
                >
                  <img src={apple} alt="apple" />
                  <span className="text-[20px] poppins-regular">App Store</span>
                </a>

                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
                >
                  <img src={playstore} alt="playstore" />
                  <span className="text-[20px] poppins-regular">Google Play</span>
                </a>
              </div>
            </div>


          </div>

          {/* phones */}
          <div className="relative z-30 w-[620px] h-[560px] mr-[6%] hidden md:block">
            {/* RIGHT phone — front/top layer */}
            <img
              src={phn1}
              alt="phone right"
              className="absolute right-0 bottom-0 w-[260px] xl:w-[280px]
                z-30
                translate-x-[6px] -translate-y-[50px]"
            />

            {/* CENTER phone — middle layer, slightly behind */}
            <img
              src={phn2}
              alt="phone middle"
              className="absolute left-[40%] bottom-[22px] -translate-x-1/2 translate-y-[20px]
               w-[260px] xl:w-[280px] z-20
               "
            />

            {/* LEFT phone — back layer, more tilt */}
            <img
              src={phn3}
              alt="phone left"
              className="absolute -left-[20%] bottom-[46px]
               w-[260px] xl:w-[280px]  z-10 translate-y-[80px]
               "
            />
          </div>





        </div>



      </div>



      {/* core feacture setion */}
      <section className='mt-50'>
        <CoreFeatures />
      </section>

      {/* 3 phones section */}

      <section  className='mt-120'>
        <Phones3 />
      </section>

      {/* Map Section */}
      <section>

      </section>

      {/* Meet Section */}
      <section className='container mx-auto mt-80'>
        <MeetAskRey />
      </section>

      {/* Smarter Queues Section */}
      <section className='container mx-auto mt-20'>
        <SmarterQueues />
      </section>

    {/* About Clients Section */}
    <section className='container mx-auto mt-20'>
      <AboutClients />

    </section>

    {/* footer */}
    <section className='mt-60'>
      {/* <Footer /> */}
    </section>

    </div>
  );
}
