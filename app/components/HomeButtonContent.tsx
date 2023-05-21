import Link from 'next/link'
import React from 'react'
import SocialButtons from './SocialButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'

const HomeButtonContent = () => {
  return (
    <>
        <Link href={'/projects'}>
        <button className='main__button flex gap-1 mx-auto'><FontAwesomeIcon icon={faRectangleList} className="w-4 h-4 mt-[0.38rem]" />See my Projects</button>
        </Link>
        <div className='social-container mt-[4%] overflow-hidden'>
        <p className='w-fit mx-auto pt-2 align-middle'>Connect on:</p>
        <SocialButtons/>
        </div>
    </>
  )
}

export default HomeButtonContent