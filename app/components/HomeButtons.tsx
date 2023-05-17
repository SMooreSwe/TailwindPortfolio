'use client'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import SocialButtons from './SocialButtons'

const HomeButtons = () => {
  return (
    <AnimatePresence>
        <motion.div 
            className='flex flex-col gap-2 overflow-hidden'
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{delay: 1.6}}
        >
        <Link href={'/projects'}>
        <button className='main__button flex gap-1 mx-auto'><FontAwesomeIcon icon={faRectangleList} className="w-4 h-4 mt-[0.38rem]" />See my Projects</button>
        </Link>
        <div className='social-container mt-[4%] overflow-hidden'>
        <p className='w-fit mx-auto pt-2 align-middle'>Connect on:</p>
        <SocialButtons/>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default HomeButtons