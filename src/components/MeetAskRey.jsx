import React from 'react'
import img1 from '../assets/images/Chat bot-amico.svg'
export default function MeetAskRey() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* content */}
        <div className=' w-[75%] space-y-6'>
            <h1 className='caladea-bold text-2xl lg:text-[40px] 2xl:text-[60px]'>
                Meet Ask Rey (AI) -Your Personal Barber Matchmaker
            </h1>

            <h3 className='poppins-medium text-2xl lg:text-[30px] 2xl:text-[36px] text-[#010101]'>
                Flow
            </h3>
            <ol className='poppins-medium lg:text-xl 2xl:text-[28px] list-decimal pl-8 text-[#010101]'>
                <li>Upload/Snap a haircut photo</li>
                <li>AI finds matching barbers nearby</li>
                <li>Open profiles • galleries • ratings</li>
                <li>Book with confidence</li>
            </ol>
            <p className='poppins-semibold md:text-xl 2xl:text-[25px]'>
                NO MORE RANDOM GUESSING WHICH BARBER IS GOOD FOR YOU
            </p>
        </div>

        {/* image */}
        <div className=''>
            <img src={img1} alt="image" />
        </div>
    </div>
  )
}
