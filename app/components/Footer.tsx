'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <AnimatePresence>
        <motion.footer 
            initial={{opacity: 0, y: '30vh'}}
            animate={{opacity: 1, y: '0'}}
            transition={{duration: 0.7}}
            className='footer fixed w-screen sm:h-32 md:h-24 bottom-0 flex flex-col items-center justify-center gap-1 pb-2 px-4 overflow-hidden'>
        <FooterContent/>
        </motion.footer>
    </AnimatePresence>
  )
}

export default Footer