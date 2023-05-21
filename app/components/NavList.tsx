import { faHome, faRectangleList, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavLink } from './NavLink'

const NavList = () => {
  return (
    <ul className="flex gap-2 mt-[-8px] lg:mt-[-16px]">
            <NavLink route={'/'} icon={faHome} text={'Home'}/>
            <NavLink route={'/projects'} icon={faRectangleList} text={'My Projects'}/>
            <NavLink route={'/about'} icon={faInfoCircle} text={'About Me'}/>
        </ul>
  )
}

export default NavList