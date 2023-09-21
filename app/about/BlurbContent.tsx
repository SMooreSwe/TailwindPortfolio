import React from 'react'
import SocialButtons from '../components/SocialButtons'

const BlurbContent = () => {
  return (
    <>
        <p>I live in Stockholm, with my wife, Stina. I graduated from {'</SALT>'} as a Full-Stack JavaScript Web Developer, following over 500 hours of mob programming. I then completed an accelerated course in C# and .NET.</p>
        <div className='flex gap-2'>
          <img src="/wigPic.jpg" alt="my old work uniform" className='w-14 md:w-20 lg:w-24 xl:w-32 aspect-auto blob3 border-2 border-secondary'/>
          <p className='align-middle my-auto'>Prior to moving to tech, I worked as a Criminal Law and Family Law Barrister in the UK (yes, I really worked dressed like that!).</p>
        </div>
        <p>I am currently busy improving my JavaScript, Typescript, HTML, C#, as well as raising Ruben, my Bracco Italiano.</p>
        <img src="/rubenPic.jpg" alt="Ruben at his best" className='w-12 md:w-20 lg:w-24 xl:w-32 aspect-auto blob2 border-2 border-secondary self-end mt-[-3%] xs:mt-0 mr-12'/>
        <div className='fixed left-4 top-[82%] lg:top-[75%]'>
            <SocialButtons/>
        </div>
    </>
  )
}

export default BlurbContent