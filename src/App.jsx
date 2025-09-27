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
import LogoVideoModal2 from './components/Modal2';
import { TfiAlignJustify } from "react-icons/tfi";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


// --- mobileMenuItems: keys are section ids and labels are styled ---
const mobileMenuItems = [
  {
    label: (<a href="#" style={{ color: '#E9874E' }}>Home</a>),
    key: 'home',
  },
  {
    label: (<a href="#services" style={{ color: '#E9874E' }}>Services</a>),
    key: 'services',
  },
  {
    label: (<a href="#map" style={{ color: '#E9874E' }}>Map</a>),
    key: 'map',
  },
  {
    label: (<a href="#features" style={{ color: '#E9874E' }}>Features</a>),
    key: 'features',
  },
  {
    label: (<a href="#founders" style={{ color: '#E9874E' }}>Founders</a>),
    key: 'founders',
  },
];


export default function App() {
  const [open, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(true);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [current, setCurrent] = useState("home");

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
        <div className='w-full '>
          <img src={vector8} alt="bg1" className="absolute inset-0 w-full object-cover pointer-events-none z-10 h-[820px] md:h-full  " />
          <img src={vector9} alt="bg2" className="absolute inset-0 w-full object-cover pointer-events-none z-0  h-[920px] md:h-full lg:mt-[160px] mt-[38px] xl:mt-[117px] 2xl:mt-[97px]"
          />
        </div>

        {/* navbar */}
        <nav className=''>
          <div className='flex items-center justify-between p-4 gap-2 '>
            {/* logo */}
            <div className='z-20  -translate-y-8 md:-translate-y-0'>
              <button
                onClick={() => setOpen(true)}
                className='cursor-pointer'
              >
                <img src={logo} alt="logo" className='h-[209px] w-[96px]' />
              </button>
            </div>

            {/* content */}
            <div className='flex items-center justify-between w-full transform -translate-y-18 lg:-translate-y-8 z-20'> {/* Shift items up */}

              {/* shop name */}
              <div className=' flex-1'>
                <h3 className='text-[#161A1A] text-[18px] md:text-xl xl:text-2xl urbanist-extrabold'>Barbers Time</h3>
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

              <div className='flex items-center gap-2'>
                {/* Button */}
              <div className=''>
                <a href='#stay-with-us' className='urbanist-bold text-xs md:text-[20px] xl:text-[22px] border  border-black rounded-[100px] px-2 py-2 md:px-4 md:py-4 xl:px-[38px] xl:py-[18px]'>Stay With Us</a>
              </div>

              {/* mobile hamburger */}
              <div className="md:hidden">
                <Dropdown
                  menu={{
                    items: mobileMenuItems,           
                    onClick: ({ key }) => {
                     
                      setCurrent(key);
                      
                      const map = { '0': 'home', '1': 'services', '2': 'map', '3': 'features', '4': 'founders' };
                      const id = map[key] ?? key;
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      else window.location.hash = `#${id}`;
                    }
                  }}
                  trigger={['click']}
                  placement="bottomRight"
                  getPopupContainer={() => document.body} 
                >
                  <button type="button" aria-label="Open menu" className="rounded flex items-center">
                    <TfiAlignJustify style={{ fontSize: 20 }} />
                  </button>
                </Dropdown>
              </div>
              </div>


            </div>
          </div>

        </nav>




        {/* Content+ image */}

        <div className='flex flex-col md:flex-row  md:justify-between'>

          {/* content */}
          <div className='relative  z-30 w-[277px] lg:w-[697px] ml-[10%] -mt-20 '>
            <h1 className='text-[#000000] text-[26px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px] poppins-bold '>
              Get Notified When We Launch
            </h1>

            {/* Input */}
            <div className="mt-10 flex items-center lg:w-[360px] xl:w-[437px]  2xl:w-[537px] md:h-[60px] rounded-full border border-black overflow-hidden">
              <input
                type="email"
                placeholder="Enter email address"
                className="text-sm md:text-[16px]  flex-1 px-2 py-3 lg:px-4 lg:py-3 outline-none poppins-medium text-black placeholder:text-black/80"
              />
              <button className="bg-black text-white px-6 py-4  lg:px-10 lg:py-5 rounded-full poppins-regular text-xs md:text-[16px]">
                Notify me
              </button>
            </div>

            {/* Available on */}
            <div className=" space-y-4 mt-8 ">
              {/* Title */}
              <div className=''>
                <h3 className="text-white text-2xl lg:text-[30px] poppins-medium">Available on</h3>
              </div>

              {/* Buttons */}
              <div className="flex flex-col xl:flex-row gap-4 ">
                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg w-[211px] "
                >
                  <img src={apple} alt="apple" />
                  <span className="text-[20px] poppins-regular">App Store</span>
                </a>

                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg w-[211px] "
                >
                  <img src={playstore} alt="playstore" />
                  <span className="text-[20px] poppins-regular">Google Play</span>
                </a>
              </div>
            </div>


          </div>

          {/* phones */}
          <div className="relative z-30  md:w-[620px] md:h-[560px] md:mr-[6%] pt-140 md:pt-0" ref={phonesRef}>

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
              className="phone absolute right-0 bottom-0 w-[160px] md:w-[260px] xl:w-[280px]
          z-30 -translate-x-[6px]
          md:translate-x-[6px] -translate-y-[70px]
          phone-delay-2 "
            />

            {/* CENTER phone — middle layer, slightly behind (arrives second) */}
            <img
              src={phn2}
              alt="phone middle"
              className="phone absolute left-[40%] bottom-[22px] -translate-x-[30%] md:-translate-x-1/2 translate-y-[20px]
          w-[160px] md:w-[260px] xl:w-[280px] z-20
          phone-delay-1"
            />

            {/* LEFT phone — back layer, more tilt (arrives first from bottom) */}
            <img
              src={phn3}
              alt="phone left"
              className="phone absolute -left-[20%] bottom-[46px]
          w-[160px] md:w-[260px] xl:w-[280px]  z-10 translate-x-[50%]  md:translate-x-[0%] translate-y-[120px]
          phone-delay-0"
            />
          </div>



        </div>

      </div>



      {/* core feacture setion */}
      <section id='features' className='mt-20 md:mt-50'>
        <CoreFeatures />
      </section>

      {/* 3 phones section */}
      <section className=' mt-20 lg:mt-120 '>
        <Phones3 />
      </section>

      {/* Map View Section */}
      <section id='map' className='container mx-auto mt-30 md:mt-40 xl:mt-80 scroll-mt-40'>
          <MapView />
      </section>



      {/* Meet Section */}
      <section className='container mx-auto mt-16 lg:mt-30 px-4 xl:px-0'>
        <MeetAskRey />
      </section>

      {/* Smarter Queues Section */}
      <section className='container mx-auto mt-16 lg:mt-30 px-4 xl:px-0'>
        <SmarterQueues />
      </section>

      {/* About Clients Section */}
      <section className='container mx-auto md:mt-50 px-4 xl:px-0'>
        <AboutClients />
      </section>

      {/* About barber Section */}
      <section className='container mx-auto mt-10 md:mt-50 px-4 xl:px-0'>
        <AboutBarber />
      </section>

      {/* About Owner Section */}
      <section className='container mx-auto mt-10 md:mt-50 px-4 xl:px-0'>
        <Owner />
      </section>

      {/* Build By Barber */}
      {/* <section id='services' className='container mx-auto mt-20'>
        <BuiltByBarber />
      </section> */}

      {/* Hire barber */}
      {/* <section className='container mx-auto mt-20'>
        <HireBarber />
      </section> */}

      {/* Book Your haircut  */}
      {/* <section className='container mx-auto mt-20'>
        <BookHaircut />
      </section> */}

      {/* Effortless Shop */}
      {/* <section className='container mx-auto mt-20'>
        <EffortlessShop />
      </section> */}

      {/* Simple & transparent Payment */}
      {/* <section className='container mx-auto mt-20'>
        <SimplePayment />
      </section> */}

      {/* Live Location */}
      {/* <section className='container mx-auto mt-20'>
        <LiveLocation />
      </section> */}

      {/* Call Chat */}
      {/* <section className='container mx-auto mt-40'>
        <CallChat />
      </section> */}

      {/* See what’s Trending - */}
      {/* <section className='container mx-auto mt-40'>
        <SeeTranding />
      </section> */}

      {/* Meet Founders Section */}
      {/* <section id='founders' className='container mx-auto mt-20'> 
        <MeetFounders />
      </section> */}


      {/* footer */}
      {/* <section id='stay-with-us' className='mt-20'>
        <Footer />
      </section> */}

      {/* render the controlled modal once, near root */}
      <LogoVideoModal
        isOpen={open}
        onClose={() => setOpen(false)}

      />

      {/* Modal2 */}

      <LogoVideoModal2
        isOpen={openModal2}
        onClose={() => setOpenModal2(false)}
      />
    </div>
  );
}
