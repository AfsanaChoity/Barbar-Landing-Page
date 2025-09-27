import React from 'react'
import img1 from '../assets/images/Queue-bro.svg'
export default function SmarterQueues() {
  return (
    <div className=' flex flex-col-reverse md:flex-row md:gap-20 xl:gap-30'>
        
        {/* image */}
        <div className=''>
            <img src={img1} alt="image" />
        </div>

        {/* content */}
        <div className=' w-[90%] space-y-6 flex flex-col justify-center'>
            <h1 className='caladea-bold text-2xl lg:text-[40px] 2xl:text-[60px]'>
                Smarter Queues, Powered by AI
            </h1>

            <h3 className='poppins-medium text-2xl lg:text-[30px] 2xl:text-[36px] text-[#010101]'>
                Flow
            </h3>
            <ol className='poppins-medium lg:text-xl 2xl:text-[28px] list-decimal pl-8 text-[#010101]'>
                <li>Learns cutting times per barber & per style</li>
                <li>Improves accuracy over time</li>
                <li>Works with live queue data</li>
                <li>Get notification when your turn for services</li>
                <li>Can see barber schedule</li>
            </ol>
            
        </div>

        
    </div>
  )
}
