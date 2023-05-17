import Link from 'next/link'
import React from 'react'

const SocialButtons = () => {
  return (
    <div className='flex gap-2 mt-2 justify-center'>
            <Link href={'https://github.com/SMooreSwe'} target="_blank">
            <button className='social__button flex gap-1'><img src="/icons8-github-50.png" alt="github" className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"/></button>
            </Link>
            <Link href={'https://www.linkedin.com/in/stephen-moore-swe/'} target="_blank">
            <button className='social__button flex gap-1'><img src="/icons8-linkedin-50.png" alt="linkedin" className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"/></button>
            </Link>
        </div>
  )
}

export default SocialButtons