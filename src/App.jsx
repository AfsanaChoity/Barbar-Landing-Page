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
import phoneframe from "./assets/svg/Phone_Mockup.svg";
import phoneframe2 from "./assets/Hiring.png";
import { Button, Input } from 'antd';


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
  const [openModal2, setOpenModal2] = useState(false);
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
          <img src={vector8} alt="bg1" className="absolute inset-0 w-full object-cover pointer-events-none z-10 h-[820px] lg:h-full  " />
          <img src={vector9} alt="bg2" className="absolute inset-0 w-full object-cover pointer-events-none z-0  h-[920px] lg:h-full mt-[38px] lg:mt-[150px]  xl:mt-[117px] 2xl:mt-[97px]"
          />
        </div>

        {/* navbar */}
        <nav className=' relative z-30'>
          <div className='flex items-center justify-between px-4 pt-8 md:pt-4 lg:pt-0 gap-2 '>
            {/* logo */}
            <div className='z-20  -translate-y-8 lg:-translate-y-0 '>
              <button
                onClick={() => setOpen(true)}
                className='cursor-pointer'
              >
                {/* <img src={logo} alt="logo" className='h-[209px] w-[96px]' /> */}
                <img src={logo} alt="logo" className='' />
              </button>
            </div>

            {/* content */}
            <div className=' flex justify-between items-center w-full transform -translate-y-18 lg:-translate-y-8 z-20'> {/* Shift items up */}

              {/* shop name */}
              <div className='flex-1 md:flex-none   '>
                <h3 className='text-[#161A1A] text-[18px] md:text-xl xl:text-2xl urbanist-extrabold'>Barbers Time</h3>
              </div>

              {/* lists */}
              <div className='hidden lg:block'>
                <ul className='urbanist-semibold  lg:text-[20px] xl:text-[22px] flex'>
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
                  <a href='#stay-with-us' className='urbanist-bold text-xs lg:text-[20px] xl:text-[22px] border  border-black rounded-[100px] px-2 py-2 md:px-4 lg:py-4 xl:px-[38px] xl:py-[18px]'>Stay With Us</a>
                </div>

                {/* mobile hamburger */}
                <div className="lg:hidden">
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
                    align={{ offset: [0, 10] }}

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

        <div className='container mx-auto -mt-10 px-4 lg:px-10 xl:px-0 flex flex-col md:flex-row  lg:justify-between'>

          {/* content */}
          <div className='relative  z-30  '>
            <h1 className='text-[#000000] lg:mt-4 xl:mt-0  text-[26px] lg:text-[44px] xl:text-[60px] 2xl:text-[80px] poppins-bold '>
              Get Notified When We Launch
            </h1>

            {/* Input */}
            <div className="mt-10 border rounded-full w-[280px] lg:w-[70%] xl:w-[50%]">

              <Space.Compact style={{ width: '100%' }}>
                <Input placeholder="Enter email address" className=' poppins-medium !bg-transparent !border-none !rounded-tl-full !rounded-bl-full ' />
                <Button type="primary" className='!rounded-full !bg-black poppins-regular !py-4 lg:!py-5 xl:!py-6 lg:!px-8'>Notify me</Button>
              </Space.Compact>
            </div>

            {/* Available on */}
            <div className=" space-y-4 mt-8  ">
              {/* Title */}
              <div className=' '>
                <h3 className="text-white  text-2xl lg:text-[30px] poppins-medium">Available on</h3>
              </div>

              {/* Buttons */}
              <div className="flex flex-col xl:flex-row gap-4 ">
                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg w-[180px] md:w-[211px] "
                >
                  <img src={apple} alt="apple" className='w-8 md:w-10 xl:w-14' />
                  <span className="md:text-[20px] poppins-regular">App Store</span>
                </a>

                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-black text-white md:Z px-4 py-2 rounded-lg w-[180px] md:w-[211px] "
                >
                  <img src={playstore} alt="playstore" className='w-6 md:w-8 xl:w-12' />
                  <span className="md:text-[20px] poppins-regular">Google Play</span>
                </a>
              </div>
            </div>


          </div>

          {/* phones */}
          <div className="relative flex  z-30" ref={phonesRef}>

            {/* Updated style: slower entrance + bigger delays */}

 <style>{`
    @keyframes phoneIn {
      0%   { transform: translateY(300px); opacity: 0; }
      60%  { transform: translateY(-30px); opacity: 1; }
      80%  { transform: translateY(12px); }
      100% { transform: translateY(0); }
    }

    .phone-enter {
      animation-name: phoneIn;
      animation-duration: 3000ms;
      animation-timing-function: cubic-bezier(.22,1.1,.24,1);
      animation-fill-mode: both;
      will-change: transform, opacity;
      /* GPU / rendering hints */
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translateZ(0);
      /* make sure no CSS blur/filter accidentally applied */
      filter: none;
      image-rendering: auto;
    }

    .phone-delay-0 { animation-delay: 0.5s; }
    .phone-delay-1 { animation-delay: 2s; }
    .phone-delay-2 { animation-delay: 3.5s; }

    /* optional: ensure the img fills integer px sizes */
    .phone-enter img {
      display: block;
      width: 100%;
      height: auto;
      max-width: 280px; /* change if needed */
    }
  `}</style>
            {/* RIGHT phone — front/top layer (arrives last) */}
            <div>
              <img
                src={phn3}
                alt="phone right"
                className='phone-enter relative top-28 2xl:top-40 -right-20 phone-delay-0 2xl:w-[440px]' />
            </div>
  
            {/* CENTER phone — middle layer, slightly behind (arrives second) */}
            <div>
              <img
                src={phn2}
                alt="phone middle"
                className='phone-enter relative top-14 2xl:top-20 -right-10 phone-delay-1 2xl:w-[440px]' />
            </div>

            {/* LEFT phone — back layer, more tilt (arrives first from bottom) */}
            <div>
              <img
                src={phn1}
                alt="phone left" 
                className='phone-enter relative top-0 right-0  phone-delay-2 2xl:w-[440px]' />
            </div>

          </div>



        </div>

      </div>



      {/* core feacture setion */}
      {/* <section id='features' className='mt-20 md:mt-30 lg:mt-50'>
        <CoreFeatures />
      </section> */}

      {/* 3 phones section */}
      {/* <section className=' mt-20 lg:mt-120 '>
        <Phones3 />
      </section> */}

      {/* Map View Section */}
      {/* <section id='map' className='container mx-auto mt-30 md:mt-40 xl:mt-80 scroll-mt-40'>
        <MapView />
      </section> */}



      {/* Meet Section */}
      {/* <section className='container mx-auto mt-16 lg:mt-30 px-4 xl:px-0'>
        <MeetAskRey />
      </section> */}

      {/* Smarter Queues Section */}
      {/* <section className='container mx-auto mt-16 lg:mt-30 px-4 xl:px-0'>
        <SmarterQueues />
      </section> */}

      {/* About Clients Section */}
      {/* <section className='container mx-auto md:mt-50 px-4 xl:px-0'>
        <AboutClients />
      </section> */}

      {/* About barber Section */}
      {/* <section className='container mx-auto mt-10 md:mt-50 px-4 xl:px-0'>
        <AboutBarber />
      </section> */}

      {/* About Owner Section */}
      {/* <section className='container mx-auto mt-10 md:mt-50 px-4 xl:px-0'>
        <Owner />
      </section> */}

      {/* Build By Barber */}
      {/* <section id='services' className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <BuiltByBarber />
      </section> */}

      {/* Hire barber */}
      {/* <section className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <HireBarber />
      </section> */}

      {/* Book Your haircut  */}
      {/* <section className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <BookHaircut />
      </section> */}

      {/* Effortless Shop */}
      {/* <section className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <EffortlessShop />
      </section> */}

      {/* Simple & transparent Payment */}
      {/* <section className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <SimplePayment />
      </section> */}

      {/* Live Location */}
      {/* <section className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <LiveLocation />
      </section> */}

      {/* Call Chat */}
      {/* <section className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <CallChat />
      </section> */}

      {/* See what’s Trending - */}
      {/* <section className='container mx-auto mt-14 md:mt-24 px-4 md:px-8 xl:px-0'>
        <SeeTranding />
      </section> */}

      {/* Meet Founders Section */}
      {/* <section id='founders' className='container mx-auto md:mt-20 px-4 xl:px-0'>
        <MeetFounders />
      </section> */}


      {/* footer */}
      {/* <section id='stay-with-us' className='mt-4 md:mt-20'>
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
