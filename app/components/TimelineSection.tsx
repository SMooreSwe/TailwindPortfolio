'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

type TimelineProps = {
  name: string,
  key: string,
}

const TimelineSection = (props: TimelineProps) => {
  const { name } = props
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true})

  return (
    <>
    <section className="Projects__timeline-section" ref={ref} style={{
          transform: isInView ? "none" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "ease-in 2s 1s"
        }}>
     <h2>{name}</h2> 
    </section>
    </>
  )
}

export default TimelineSection