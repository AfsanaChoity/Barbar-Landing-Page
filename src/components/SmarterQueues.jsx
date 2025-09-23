import React from 'react'
import img1 from '../assets/images/Queue-bro.svg'
export default function SmarterQueues() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-30'>
        
        {/* image */}
        <div className=''>
            <img src={img1} alt="image" />
        </div>

        {/* content */}
        <div className=' w-[90%] space-y-6 flex flex-col justify-center'>
            <h1 className='caladea-bold text-[60px]'>
                Smarter Queues, Powered by AI
            </h1>

            <h3 className='poppins-medium text-[36px] text-[#010101]'>
                Flow
            </h3>
            <ol className='poppins-medium text-[28px] list-decimal pl-8 text-[#010101]'>
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
