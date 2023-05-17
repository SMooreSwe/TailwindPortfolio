'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Blurb = () => {
  return (
    <AnimatePresence>
      <motion.div 
        className='whitespace-pre-wrap mt-[5%] text-sm mx-4 my-auto sm:text-base sm:mx-24 md:text-lg md:mx-48'
        initial={{opacity: 0, x: '100vh'}}
        animate={{ opacity: 1, x: '0'}}
        transition={{delay: 0.3, duration: 1}}
      >
        {'I live in Stockholm, with my wife, Stina. I graduated from </SALT> as a Full-Stack JavaScript Web Developer, following over 500 hours of coding time during a period of 12 weeks. The intensive course involved mob programming, weekly coding tests, agile methodologies and weekly demos.\n\nPrior to moving to tech, I worked as a Criminal Law and Family Law Barrister in the UK (yes, we still do use the wigs and gowns!). \n\nI am currently busy improving my JavaScript, Typescript, HTML, CSS and Swedish, as well as raising Ruben, our Bracco Italiano.'}
      </motion.div>
    </AnimatePresence>
  )
}

export default Blurb