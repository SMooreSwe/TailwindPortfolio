'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const MyNameIs = () => {
  return (
    <TypeAnimation
        sequence={[
            'Hi, my name is...',
            2000,
        ]}
        speed={20}
        cursor={false}
        className='text-md mx-auto'
        repeat={1}/>
  )
}

export default MyNameIs