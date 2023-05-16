'use client'
import React from 'react'
import Typing from './Typing'
import { AnimatePresence, motion } from 'framer-motion'

const Titles = () => {
  return (
    <AnimatePresence>
        <motion.p 
            initial={{scale: 0, opacity: 0, x: '-20vw', display: 'none'}}
            animate={{scale: 1, opacity: 1, x: '0'}}
            transition={{delay: 0.5}}
            className='pl-1 mb-[6%] overflow-hidden'>Hi, my name is...</motion.p>
        <motion.h1 
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{delay: 0.8}}
            className='font-heading text-4xl text-buttons font-bold main__name mx-auto overflow-hidden'>Stephen Moore
        </motion.h1>
        <motion.div
             initial={{scale: 0, opacity: 0}}
             animate={{scale: 1, opacity: 1}}
             transition={{delay: 1.3}}
             className='content-fit mx-auto overflow-hidden'
            >
            <Typing/>
        </motion.div>
    </AnimatePresence>
  )
}

export default Titles