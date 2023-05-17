'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faRectangleList} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinkProps } from '@/types'

const NavBar = () => {
  return (
    <AnimatePresence>
    <motion.nav 
        initial={{scale: 0, opacity: 0, y: '-20vh'}}
        animate={{scale: 1, opacity: 1, y: '0'}}
        transition={{duration: 0.7}}
        className="bg-secondary w-[90%] m-6 md:mt-10 lg:mt-12 me-4 pr-2 h-8 rounded-2xl z-50 flex content-center justify-end shadow">
        <ul className="flex gap-2 mt-[-8px] lg:mt-[-16px]">
            <NavLink route={'/'} icon={faHome} text={'Home'}/>
            <NavLink route={'/projects'} icon={faRectangleList} text={'My Projects'}/>
            <NavLink route={'/about'} icon={faInfoCircle} text={'About Me'}/>
        </ul>
    </motion.nav>
    </AnimatePresence>
  )
}

const NavLink = ({route, icon, text}: navLinkProps) => {
    const router = useRouter();
    
    return(
    <>
    <li className='navIcon group' onClick={()=> router.push(route)} onTouchEnd={(e) => e.currentTarget.blur()}>
        <FontAwesomeIcon icon={icon} className="w-6 h-6" />
        <span className="navIcon-tooltip group-hover:scale-100">{text}</span>
    </li>
    </>
    );
}    

export default NavBar