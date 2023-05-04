'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faHome, faInfoCircle, faRectangleList} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  return (
    <>
    <nav className="bg-gray-500 w-max m-5 px-5 py-5 rounded-2xl fixed right-0 max-sm:w-[90%] z-50">
        <ul className="flex gap-5">
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