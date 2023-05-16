'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

type HeaderProps = {
    message: string
}

const PageHeader = ({ message } : HeaderProps) => {
  return (
    <AnimatePresence>
        <motion.header 
            className='font-heading text-buttons w-fit mx-auto text-3xl md:text-4xl lg:text-5xl mt-[1vh] lg:mt-6 mb-[3vh] lg:mb-10'
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{delay: 1.6}}
        >
            {message}
        </motion.header>
    </AnimatePresence>
  )
}

export default PageHeader