'use client'
import React from 'react'
import Typing from './Typing'
import { AnimatePresence, motion } from 'framer-motion'
import MyNameIs from './MyNameIs'

const Titles = () => {
  return (
    <AnimatePresence>
        <motion.div 
            initial={{scale: 0, opacity: 0, x: '-20vw', display: 'none'}}
            animate={{scale: 1, opacity: 1, x: '0'}}
            transition={{delay: 0.2}}
            className='pl-[5%] md:pl-[8%] lg:pl-[20%] lg:mt-12 mb-[6%] lg:mb-4'>
                <MyNameIs/>
        </motion.div>
        <motion.h1 
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{delay: 0.7}}
            className='font-heading text-4xl md:text-6xl lg:text-8xl text-buttons font-bold main__name mx-auto'>Stephen Moore
        </motion.h1>
        <motion.div
             initial={{scale: 0, opacity: 0}}
             animate={{scale: 1, opacity: 1}}
             transition={{delay: 1.4}}
             className='content-fit mx-auto overflow-hidden'
            >
            <Typing/>
        </motion.div>
    </AnimatePresence>
  )
}

export default Titles