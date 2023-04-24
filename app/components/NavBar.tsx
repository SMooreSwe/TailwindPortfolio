import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav className="bg-gray-500 px-5 py-2">
        <ul className="flex flex-row gap-5">
            <li>
                <Link href={'/'} className="hover:text-emerald-500">Home</Link>
            </li>
            <li>
                <Link href={'/projects'} className="hover:text-emerald-500">Projects</Link>
            </li>
            <li>
                <Link href={'/about'} className="hover:text-emerald-500">About</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar