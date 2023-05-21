'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavList from './NavList'

const NavBar = () => {
  return (
    <AnimatePresence>
    <motion.nav 
        initial={{scale: 0, opacity: 0, y: '-20vh'}}
        animate={{scale: 1, opacity: 1, y: '0'}}
        transition={{duration: 0.7}}
        className="bg-secondary w-[90%] m-6 md:mt-10 lg:mt-12 me-4 pr-2 h-8 rounded-2xl z-50 flex content-center justify-end shadow">
        <NavList/>
        
    </motion.nav>
    </AnimatePresence>
  )
}



export default NavBar