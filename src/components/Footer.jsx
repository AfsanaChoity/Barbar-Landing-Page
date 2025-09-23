import React from "react";
import logo from '../assets/logo.svg';

export default function Footer({ logoSrc }) {
  return (
    <footer
      className="w-full bg-[#F8C0A3]  py-16"
      
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT COLUMN */}
        <div className="flex gap-6 items-start">
          {/* logo must be provided via prop */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-40 sm:w-48 md:w-56 object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1b1b1b]">
              Ready for a smarter cut ?
            </h2>

            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase">Get Early Access</h4>
              <p className="mt-3 text-sm leading-6 text-[#3a3a3a] max-w-md">
                Join the community where queues move faster, matches are better,
                and every cut feels confident.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <ul className="mt-3 text-sm space-y-2 text-[#264c56]">
                <li>
                  For Info - <a href="mailto:info@barberstime.com" className="underline">info@barberstime.com</a>
                </li>
                <li>
                  For Sale - <a href="mailto:sales@barberstime.com" className="underline">sales@barberstime.com</a>
                </li>
                <li>
                  For Marketing - <a href="mailto:marketing@barberstime.com" className="underline">marketing@barberstime.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1b1b1b]">Stay in the loop</h2>
            <p className="mt-3 text-sm text-[#3a3a3a] max-w-md">
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
                className="flex-1 rounded-md px-4 py-3 shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-[#f5e6df]"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-md bg-[#8a3b19] text-white font-medium shadow-sm"
              >
                Notify me
              </button>
            </form>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Join the Waitlist</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {/* App Store Button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-[#7c6b60] rounded-md px-4 py-3"
              >
                {/* simple Apple icon */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.365 1.43c0 1.02-.35 2.05-1.03 2.88-.73.91-1.96 1.86-3.08 1.86-.08-1.12.37-2.4 1.04-3.23.65-.8 1.78-1.72 2.9-1.72.03 0 .08 0 .17.01z" fill="#000" />
                  <path d="M20.3 7.68c-.99.44-2.06.69-3.13.64-1.11-.06-2.21-.47-3.25-.95-1.22-.55-2.53-1.14-3.99-1.04-2.04.13-3.35 1.36-4.56 2.2-1.55 1.06-2.95 2.21-3.88 3.66-.8 1.25-1.36 3.1-1.03 4.63.34 1.6 1.34 2.92 2.36 3.88 1.1 1.06 2.4 1.63 3.83 1.65 1.16.02 2.36-.42 3.37-.86 1.09-.49 2.06-.94 3.4-.94 1.32 0 2.3.43 3.39.91 1.06.46 2.37.95 3.64.83 1.64-.15 2.84-1.02 3.71-2.14.79-1 1.17-2.04 1.3-2.45-.95-.39-2.62-1.16-3.78-1.62-.59-.24-1.56-.62-2.16-.91-.64-.32-1.1-.53-1.9-.98-.97-.55-1.72-1.17-2.18-1.56.12-.14.63-.76 1.5-1.6 1.08-1.09 1.86-2.12 2.39-3.11.54-1.01.85-1.95.85-2.5 0-.07 0-.11-.01-.12z" fill="#000" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-[#7c6b60] rounded-md px-4 py-3"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 2v20l15-10L3 2z" fill="#4285F4" />
                  <path d="M21 12l-4-3v6l4-3z" fill="#34A853" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Google Play</div>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center md:text-left text-sm text-[#5b4b46]">
              © 2025 Barbers Time. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
