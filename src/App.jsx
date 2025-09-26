import React, { useEffect, useRef, useState } from 'react';
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
import LogoVideoModal from './components/Modal';
import MeetFounders from './components/MeetFounders';
import MapView from './components/MapView';
import BuiltByBarber from './components/BuiltByBarber';
import HireBarber from './components/HireBarber';
import BookHaircut from './components/BookHaircut';
import EffortlessShop from './components/EffortlessShop';
import SimplePayment from './components/SimplePayment';
import LiveLocation from './components/LiveLocation';
import CallChat from './components/CallChat';
import SeeTranding from './components/SeeTranding';
import AboutBarber from './components/AboutBarber';
import Owner from './components/Owner';


export default function App() {
  const [open, setOpen] = useState(true);

  // for animation
  const heroRef = useRef(null);
  const phonesRef = useRef(null);

  useEffect(() => {
    const phonesNode = phonesRef.current;
    if (!phonesNode) return;
    const phones = phonesNode.querySelectorAll('img.phone');
    if (!phones || phones.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When hero enters view: restart animation
            phones.forEach((p) => {
              p.classList.remove('phone-enter');
              // force reflow so animation can restart reliably
              // eslint-disable-next-line no-unused-expressions
              p.offsetWidth;
              p.classList.add('phone-enter');
            });
          } else {
            // Remove animation classes when leaving so it will replay next time
            phones.forEach((p) => p.classList.remove('phone-enter'));
          }
        });
      },
      { threshold: 0.3 } // trigger when ~30% of hero is visible — tweak if you want
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className=''>

      {/* Hero section */}

      <div className='' ref={heroRef}>

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
              <button
                onClick={() => setOpen(true)}
                className='cursor-pointer'
              >
                <img src={logo} alt="logo" className='h-[209px] w-[96px]' />
              </button>
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
                  <a href="#"><li className="mx-4 cursor-pointer">Home</li></a>
                  <a href="#services"><li className="mx-4 cursor-pointer">Services</li></a>
                  <a href="#map"><li className="mx-4 cursor-pointer">Map</li></a>
                  <a href="#features"><li className="mx-4 cursor-pointer">Features</li></a>
                  <a href="#founders"><li className="mx-4 cursor-pointer">Founders</li></a>
                  
                
                </ul>
              </div>

              {/* Button */}
              <div className=''>
                <a href='#stay-with-us' className='urbanist-bold md:text-[20px] xl:text-[22px] border  border-black rounded-[100px] px-[38px] py-[18px]'>Stay With Us</a>
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
    <div className="relative z-30 w-[620px] h-[560px] mr-[6%] hidden md:block" ref={phonesRef}>

      {/* Updated style: slower entrance + bigger delays */}
      <style>{`
        /* keyframes: drop in from below, larger overshoot, gentler settle */
        @keyframes phoneIn {
          0%   { transform: translateY(300px) scale(.98); opacity: 0; }
          60%  { transform: translateY(-30px) scale(1.03); opacity: 1; }
          80%  { transform: translateY(12px) scale(.995); }
          100% { transform: translateY(0) scale(1); }
        }

        .phone-enter {
          animation-name: phoneIn;
          animation-duration: 2600ms;                       /* slower overall */
          animation-timing-function: cubic-bezier(.22,1.1,.24,1); /* smooth bounce */
          animation-fill-mode: both; /* keep final state */
          will-change: transform, opacity;
        }

        /* increased sequencing delays for a clearer staggered entrance */
        .phone-delay-0 { animation-delay: 0.5s; }    /* first to appear (phn3) */
        .phone-delay-1 { animation-delay: 1.5s; }    /* second (phn2) */
        .phone-delay-2 { animation-delay: 2.3s; }    /* last (phn1) */
      `}</style>

      {/* RIGHT phone — front/top layer (arrives last) */}
      <img
        src={phn1}
        alt="phone right"
        className="phone absolute right-0 bottom-0 w-[260px] xl:w-[280px]
          z-30
          translate-x-[6px] -translate-y-[90px]
          phone-delay-2"
      />

      {/* CENTER phone — middle layer, slightly behind (arrives second) */}
      <img
        src={phn2}
        alt="phone middle"
        className="phone absolute left-[40%] bottom-[22px] -translate-x-1/2 -translate-y-[10px]
          w-[260px] xl:w-[280px] z-20
          phone-delay-1"
      />

      {/* LEFT phone — back layer, more tilt (arrives first from bottom) */}
      <img
        src={phn3}
        alt="phone left"
        className="phone absolute -left-[20%] bottom-[46px]
          w-[260px] xl:w-[280px]  z-10 translate-y-[80px]
          phone-delay-0"
      />
    </div>



        </div>

      </div>



      {/* core feacture setion */}
      <section id='features' className='mt-50'>
        <CoreFeatures />
      </section>

      {/* 3 phones section */}

      <section className='mt-140'>
        <Phones3 />
      </section>

      {/* Map View Section */}
      <section id='map' className='container mx-auto mt-80'>

        <MapView />
      </section>



      {/* Meet Section */}
      <section className='container mx-auto mt-40'>
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

      {/* About barber Section */}
      <section className='container mx-auto mt-40'>
        <AboutBarber />

      </section>

      {/* About Owner Section */}
      <section className='container mx-auto mt-40'>
        <Owner />

      </section>

      {/* Build By Barber */}
      <section id='services' className='container mx-auto mt-20'>
        <BuiltByBarber />
      </section>

      {/* Hire barber */}
      <section className='container mx-auto mt-20'>
        <HireBarber />
      </section>

      {/* Book Your haircut  */}
      <section className='container mx-auto mt-20'>
        <BookHaircut />
      </section>

      {/* Effortless Shop */}
      <section className='container mx-auto mt-20'>
        <EffortlessShop />
      </section>

      {/* Simple & transparent Payment */}
      <section className='container mx-auto mt-20'>
        <SimplePayment />
      </section>

      {/* Live Location */}
      <section className='container mx-auto mt-20'>
        <LiveLocation />
      </section>

      {/* Call Chat */}
      <section className='container mx-auto mt-40'>
        <CallChat />
      </section>

      {/* See what’s Trending - */}
      <section className='container mx-auto mt-40'>
        <SeeTranding />
      </section>

      {/* Meet Founders Section */}
      <section id='founders' className='container mx-auto mt-20'> 
        <MeetFounders />
      </section>


      {/* footer */}
      <section id='stay-with-us' className='mt-20'>
        <Footer />
      </section>

      {/* render the controlled modal once, near root */}
      <LogoVideoModal
        isOpen={open}
        onClose={() => setOpen(false)}

      />
    </div>
  );
}
