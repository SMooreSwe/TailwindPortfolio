import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faRectangleList } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (
    <>
    <nav className="bg-gray-500 px-5 py-2">
        <ul className="flex flex-row gap-5">
            <li>
                <Link href={'/'} className="navBar-Link">
                <FontAwesomeIcon icon={faHome} className="w-4 h-4" />Home
                </Link>
            </li>
            <li>
                <Link href={'/projects'} className="navBar-Link">
                <FontAwesomeIcon icon={faRectangleList} className="w-4 h-4" />Projects
                </Link>
            </li>
            <li>
                <Link href={'/about'} className="navBar-Link">
                <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />About
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar