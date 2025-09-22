import React from 'react';
import logo from './assets/logo.svg';
import vector8 from './assets/svg/Vector8.svg'
import vector9 from './assets/svg/Vector9.svg'

export default function App() {
  return (
    <div className=''>

      {/* Hero section */}

      <div className=''>

        {/* bg images */}
       <div className=' w-full '>
         <img src={vector8} alt="bg1" className="absolute inset-0 w-full object-cover pointer-events-none z-10 h-[700px] sm:h-[520px] md:h-full "/>
         <img src={vector9} alt="bg2" className="absolute inset-0 w-full object-cover pointer-events-none z-0 h-[700px] sm:h-[520px] md:h-full mt-[77px]"
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
      </div>





    </div>
  );
}
