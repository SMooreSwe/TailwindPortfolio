'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import SocialButtons from '../components/SocialButtons'
import BlurbContent from './BlurbContent'

const Blurb = () => {
  return (
    <AnimatePresence>
      <motion.div 
        className='mt-[5%] text-sm mx-4 my-auto sm:text-base sm:mx-24 md:text-lg lg:mx-auto max-w-[800px] flex flex-col gap-4'
        initial={{opacity: 0, x: '100vh'}}
        animate={{ opacity: 1, x: '0'}}
        transition={{delay: 0.3, duration: 1}}
      >
        <BlurbContent/>
      </motion.div>
    </AnimatePresence>
  )
}

export default Blurb