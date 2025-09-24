import React from "react";
import logo from '../assets/logo.svg';
import apple from '../assets/svg/blackApple.svg'
import playStore from '../assets/svg/playstore.svg'

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#F8C0A3] py-20"

    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-20">
        {/* LEFT COLUMN */}
        <div className=" col-span-1 ">
          {/* logo must be provided via prop */}
          <div className="items-start">
            <img
              src={logo}
              alt="logo"
              className="w-[186px] h-[412px] object-contain"
            />
          </div>

          

        </div>

        {/* Middle Column */}
        <div className="col-span-2">
          <h2 className="caladea-bold text-[36px]  text-[#030605]">
            Ready for a smarter cut ?
          </h2>

          <div className="mt-6">
            <h4 className="poppins-medium text-xl uppercase">Get Early Access</h4>
            <p className="mt-3  leading-6 poppins-light text-xl">
              Join the community where queues move faster, matches are better, and every cut feels confident.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="caladea-bold text-[36px]  text-[#030605]">Contact Us</h3>
            <ul className="mt-3  space-y-2  poppins-light text-xl">
              <li>
                For Info - <a href="mailto:info@barberstime.com" className="text-[#1E94AE]">info@barberstime.com</a>
              </li>
              <li>
                For Sale - <a href="mailto:sales@barberstime.com" className="text-[#1E94AE]">sales@barberstime.com</a>
              </li>
              <li>
                For Marketing - <a href="mailto:marketing@barberstime.com" className="text-[#1E94AE]">marketing@barberstime.com</a>
              </li>
            </ul>
          </div>
        </div>

        


        {/* RIGHT COLUMN */}
        <div className="flex flex-col  col-span-2 ">
          <div>
            <h2 className="caladea-bold text-[36px]  text-[#030605]">Stay in the loop</h2>
            <p className="mt-3 poppins-regular text-[22px]">
              We'll email you when we launch in your area.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-3 max-w-md"
            >
              <input
                aria-label="Your email"
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md px-4 py-3 shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-[#f5e6df] bg-white"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-md bg-[#A63F0B] text-white poppins-medium "
              >
                Notify me
              </button>
            </form>
          </div>

          <div className="mt-14">
            <h3 className="caladea-bold text-[36px]  text-[#030605]">Join the Waitlist</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {/* App Store Button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-black rounded-md px-4 py-3"
              >
                {/* simple Apple icon */}
               <div>
                <img src={apple} alt="" />
               </div>
                <div className="text-left">
                  <div className="text-xl poppins-regular">App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-black rounded-md px-4 py-3"
              >
               <div>
                <img src={playStore} alt="" />
               </div>

                <div className="text-left">
                  <div className="text-xl poppins-regular">Google Play</div>
                </div>
              </a>
            </div>


          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-[#5C5C5C] poppins-regular text-[16px]">
        © 2025 Barbers Time. All rights reserved.
      </div>
    </footer>
  );
}
