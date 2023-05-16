'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Logo = () => {
  return (
    <AnimatePresence>
        <motion.img 
            src="/portfolioprofilecrop.jpg" 
            alt="a picture of me!" 
            className='blob mt-2 w-20 h-20 object-cover self-center aspect-square border-solid border-4 border-secondary'
            initial={{scale: 4.2, x: '40vw', y: '40vh'}}
            animate={{
                scale: 1,
                x: '0',
                y: '0'}
            }
        />
    </AnimatePresence> 
  )
}

export default Logo