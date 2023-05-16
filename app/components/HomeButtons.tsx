'use client'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const HomeButtons = () => {
  return (
    <AnimatePresence>
        <motion.div 
            className='flex flex-col gap-2 overflow-hidden'
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{delay: 1.5}}
        >
        <Link href={'/projects'}>
        <button className='main__button flex gap-1 mx-auto'><FontAwesomeIcon icon={faRectangleList} className="w-4 h-4 mt-[0.38rem]" />See my Projects</button>
        </Link>
        <div className='social-container mt-[4%] overflow-hidden'>
        <p className='w-fit mx-auto pt-2 align-middle'>Connect on:</p>
        <div className='flex gap-2 mt-2 justify-center'>
            <Link href={'https://github.com/SMooreSwe'} target="_blank">
            <button className='social__button flex gap-1'><img src="/icons8-github-50.png" alt="github" className="w-6 h-6  lg:w-12 lg:h-12"/></button>
            </Link>
            <Link href={'https://www.linkedin.com/in/stephen-moore-swe/'} target="_blank">
            <button className='social__button flex gap-1'><img src="/icons8-linkedin-50.png" alt="linkedin" className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"/></button>
            </Link>
        </div>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default HomeButtons