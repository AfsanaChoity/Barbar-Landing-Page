
import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function RightPhones({ phn1, phn2 }) {
    const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.5 }) // trigger when ~50% is visible

  // Each time the section re-enters view, bump the key to remount the anim wrappers.
  // This replays the entrance, with ZERO exit animation.
  const [runId, setRunId] = useState(0)
  useEffect(() => { if (isInView) setRunId(id => id + 1) }, [isInView])

  // timings
  const backEnterDur  = 1.05
  const frontEnterDur = 0.90
  const frontDelay    = 0.15

  return (
    <section
      ref={sectionRef}
      className="relative mt-10 md:mt-0 flex gap-3 md:gap-5 justify-center items-center"
      style={{ minHeight: 320 }}
    >
      {/* background accent */}
      <div className="absolute top-26 md:-left-6 w-[280px] h-[200px] md:w-[322px] md:h-[214px] rounded-tl-[132px] rounded-bl-[132px] rounded-br-[132px] bg-[#E9874E] opacity-90 shadow-2xl -z-10 shadow-gray-600" />

      {/* FRONT phone — enters from bottom, then floats */}
      <motion.div
        key={`front-${runId}`}                        // remount on every enter
        className="ml-4 md:mt-10 w-[114px]"
        initial={{ y: 320, rotate: 0, opacity: 0 }} // hidden
        animate={{ y: 0, rotate: 0, opacity: 1 }}    // land
        transition={{
          duration: frontEnterDur,
          delay: frontDelay,
          easing: 'cubic-bezier(.25,.95,.22,1)',
        }}
        style={{ willChange: 'transform' }}
      >
        {/* float starts AFTER entrance finishes */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            delay: frontEnterDur + frontDelay,
            duration: 2.2,
            repeat: Infinity,
            easing: 'ease-in-out',
          }}
          style={{ willChange: 'transform' }}
        >
          <div style={{ position: 'relative', borderRadius: 14 }}>
            <img
              src={phn2}
              alt="app preview phone 1"
              className="w-[114px] h-[242px] block"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* BACK phone — enters from top, then floats */}
      <motion.div
        key={`back-${runId}`}                         // remount on every enter
        className="w-[114px] mb-10 md:mb-0"
        initial={{ y: -360, rotate: 0, opacity: 0 }}// hidden
        animate={{ y: 0, rotate: 0, opacity: 1 }}     // land
        transition={{
          duration: backEnterDur,
          easing: 'cubic-bezier(.2,.9,.25,1)',
        }}
        style={{ willChange: 'transform' }}
      >
        {/* float starts AFTER entrance finishes */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            delay: backEnterDur,
            duration: 2.6,
            repeat: Infinity,
            easing: 'ease-in-out',
          }}
          style={{ willChange: 'transform' }}
        >
          <div style={{ position: 'relative', borderRadius: 14 }}>
            <img
              src={phn1}
              alt="app preview phone 2"
              className="w-[114px] h-[242px] block"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
