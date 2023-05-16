'use client'

import { useInView } from 'framer-motion'
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
    <section className='project-section'>
      <h2 className="Projects__timeline-header" ref={ref} style={{
      transform: isInView ? "none" : "translateY(-100%)",
      opacity: isInView ? 1 : 0,
      transition: "ease-in 1s 0.5s"
      }}>{name}</h2>
    <div className='project-section__content'>
      <img src="/project-example.jpg" alt="view of [project Project]" className='object-contain' />
      <aside className='lg:my-auto lg:text-lg xl:text-xl'>{blurb}</aside>
    </div>
      
    </section>
  )
}

export default TimelineSection