'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
  return (
    <AnimatePresence>
        <motion.footer 
            initial={{opacity: 0, y: '30vh'}}
            animate={{opacity: 1, y: '0'}}
            transition={{duration: 0.7}}
            className='footer fixed w-screen h-32 md:h-24 bottom-0 flex flex-col items-center justify-center gap-1 pb-2 px-4 overflow-hidden'>
        <h5 className='font-heading mt-1 pl-2 self-start font-extralight'>My toolkit...</h5>
        <div className='icon-container'>
            <div className=''><img src="/JS-icon.png" alt="JavaScript Icon" className="h-8"/></div>
            <div className=''><img src="/typescript-icon.png" alt="TypeScript Icon" className="h-8"/></div>
            <div className=''><img src="/node-icon.png" alt="NodeJS Icon" className="h-8"/></div>
            <div className=''><img src="/github-icon.png" alt="Github Icon" className="h-8"/></div>
            <div className=''><img src="/expressjs-icon.png" alt="ReactJS Icon" className="h-8"/></div>
            <div className=''><img src="/react-icon.png" alt="ExpressJS Icon" className="h-8"/></div>
            <div className=''><img src="/redux-icon.png" alt="Redux Icon" className="h-8"/></div>
            <div className=''><img src="/next.svg" alt="Next Icon" className="h-6 mt-1"/></div>
            <div className=''><img src="/tailwind-icon.png" alt="Tailwind CSS Icon" className="h-8"/></div>
            <div className=''><img src="/firebase-icon.png" alt="Firebase Icon" className="h-8"/></div>
            <div className=''><img src="/mongodb-icon.png" alt="MongoDB Icon" className="h-8"/></div>
            <div className=''><img src="/postgresql-icon.png" alt="PostgresQL Icon" className="h-8"/></div>
        </div>
        </motion.footer>
    </AnimatePresence>
  )
}

export default Footer