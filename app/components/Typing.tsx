'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Typing = () => {
  return (
    <TypeAnimation
        sequence={[
            'I used to be a Lawyer.',
            1000,
            'I am now a Full Stack Developer.',
            1000,
        ]}
        speed={40}
        deletionSpeed={90}
        className='text-md mx-auto'
        repeat={Infinity}/>
  )
}

export default Typing