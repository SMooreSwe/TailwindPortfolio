import Image from 'next/image'
import NavBar from './components/NavBar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import Typing from './components/Typing'
import Footer from './components/Footer'


//link to icons github <a target="_blank" href="https://icons8.com/icon/12599/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//link to linkedIn <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default function Home() {
  return (
    <>
    <main className='flex flex-col gap-6 content-center h-[70vh] mt-12 px-4'>
      <p className='pl-1 mb-[6%]'>Hi, my name is...</p>
      <h1 className='font-heading text-4xl text-buttons font-bold main__name mx-auto'>Stephen Moore</h1>
      <Typing/>
      <div className='flex flex-col gap-2'>
        <Link href={'/projects'}>
          <button className='main__button flex gap-1 mx-auto'><FontAwesomeIcon icon={faRectangleList} className="w-4 h-4 mt-[0.38rem]" />See my Projects</button>
        </Link>
        <div className='social-container mt-[4%]'>
          <p className='w-fit mx-auto pt-2 align-middle'>Connect on:</p>
          <div className='flex gap-2 mt-2 justify-center'>
            <Link href={'https://github.com/SMooreSwe'} target="_blank">
              <button className='social__button flex gap-1'><img src="/icons8-github-50.png" alt="github" className="w-6 h-6"/></button>
            </Link>
            <Link href={'https://www.linkedin.com/in/stephen-moore-swe/'} target="_blank">
              <button className='social__button flex gap-1'><img src="/icons8-linkedin-50.png" alt="linkedin" className="w-6 h-6"/></button>
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}
