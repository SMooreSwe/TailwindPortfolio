'use client'

import { TimelineProps } from '@/types'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'



const TimelineSection = (props: TimelineProps) => {
  const { name, blurb, src, links } = props
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  
  const link = links[0]
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
        <img src={src} alt={`view of ${name}`} className='object-contain' />
        <div className='flex flex-col gap-4 lg:my-auto '>
          <aside className='text-sm lg:text-lg xl:text-xl'>{blurb}</aside>
          <Link href={link.href} target="_blank">
            <button className='main__button flex gap-1 mx-auto text-sm'><FontAwesomeIcon icon={faMagnifyingGlass} className="w-[0.7rem] h-[0.7rem] mt-[0.2rem]" />{link.text}</button>
          </Link>
        </div>
      </div>
      </motion.section>
    </AnimatePresence>
  )
}

export default TimelineSection