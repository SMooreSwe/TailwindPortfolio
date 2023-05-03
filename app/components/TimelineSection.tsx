'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { isWhiteSpaceLike } from 'typescript'

type TimelineProps = {
  name: string,
  key: string,
}

const TimelineSection = (props: TimelineProps) => {
  const { name } = props
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <section>
      <h2 className="Projects__timeline-header" ref={ref} style={{
          transform: isInView ? "none" : "translateY(150%)",
          opacity: isInView ? 1 : 0,
          transition: "ease-in 1s 0.5s"
        }}>{name}</h2>
    </section>
  )
}

export default TimelineSection