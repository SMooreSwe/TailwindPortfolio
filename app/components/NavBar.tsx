'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faHome, faInfoCircle, faRectangleList} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  return (
    <>
    <nav className="bg-secondary w-[90%] m-6 me-4 pr-2 h-8 rounded-2xl z-50 flex content-center justify-end shadow">
        <ul className="flex gap-2 mt-[-8px]">
            <NavLink route={'/'} icon={faHome} text={'Home'}/>
            <NavLink route={'/projects'} icon={faRectangleList} text={'My Projects'}/>
            <NavLink route={'/about'} icon={faInfoCircle} text={'About Me'}/>
        </ul>
    </nav>
    </>
  )
}

type navLinkProps = {
    route: string,
    icon: IconDefinition,
    text: string
}
const NavLink = (props: navLinkProps) => {
    const {route, icon, text} = props
    const router = useRouter();
    return(
    <>
    <li className='navIcon group' onClick={()=> router.push(route)}>
        <FontAwesomeIcon icon={icon} className="w-6 h-6" />
        <span className="navIcon-tooltip group-hover:scale-100">{text}</span>
    </li>
    </>
    );
}    

export default NavBar