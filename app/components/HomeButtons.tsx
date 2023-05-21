'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import HomeButtonContent from './HomeButtonContent'

const HomeButtons = () => {
  return (
    <AnimatePresence>
        <motion.div 
            className='flex flex-col gap-2 overflow-hidden'
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{delay: 1.6}}
        >
        <HomeButtonContent/>
    </motion.div>
    </AnimatePresence>
  )
}

export default HomeButtons