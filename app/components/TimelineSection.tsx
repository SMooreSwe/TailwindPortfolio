'use client'

import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type TimelineProps = {
  name: string,
  blurb: string,
  key: string,
}

const TimelineSection = (props: TimelineProps) => {
  const { name, blurb } = props
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <AnimatePresence>
      <motion.section 
        className='project-section'
        initial={{opacity: 0, x: '-100vh'}}
        animate={{ opacity: 1, x: '0'}}
        transition={{delay: 0.3, duration: 1}}
      >
        <h2 className="Projects__timeline-header" ref={ref} style={{
        transform: isInView ? "none" : "translateY(-100%)",
        scale: isInView ? 1 : 0,
        opacity: isInView ? 1 : 0,
        transition: "ease-in 1s 0.5s"
        }}>{name}</h2>
      <div className='project-section__content'>
        <img src="/project-example.jpg" alt="view of [project Project]" className='object-contain' />
        <aside className='lg:my-auto lg:text-lg xl:text-xl'>{blurb}</aside>
      </div>
      </motion.section>
    </AnimatePresence>
  )
}

export default TimelineSection