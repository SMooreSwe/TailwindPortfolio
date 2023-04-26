import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })
//link to icons github <a target="_blank" href="https://icons8.com/icon/12599/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//link to linkedIn <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default function Home() {
  return (
    <>
    <main className='flex ml-20 justify-between content-center h-screen'>
      <div className='flex justify-center flex-col py-[25%] pl-[15%] gap-5'>
      <h1 className='text-8xl'>Stephen Moore</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, architecto?</h3>
      <div className='flex px-1 gap-2'>
        <Link href={'/projects'}>
          <button className='main__button flex gap-1'><FontAwesomeIcon icon={faRectangleList} className="w-4 h-4 mt-[0.38rem]" />See my Projects</button>
        </Link>
        <Link href={'https://github.com/SMooreSwe'} target="_blank">
          <button className='main__button flex gap-1'> <img src="/icons8-github-50.png" alt="" className="w-4 h-4 mt-[0.38rem]"/> Check out my github</button>
        </Link>
        <Link href={'https://www.linkedin.com/in/stephen-moore-swe/'} target="_blank">
          <button className='main__button flex gap-1'> <img src="/icons8-linkedin-50.png" alt="" className="w-4 h-4 mt-[0.38rem]"/> Connect on LinkedIn</button>
        </Link>
      </div>
      </div>
      <div className='fixed right-[-700px] w-[2000px] h-auto aspect-square shadow-md shadow-white rounded-full z-[-100]'></div>
    </main>
    <footer className='fixed  w-screen h-20 bottom-0 flex justify-center content-center gap-5'>
      <div className=''>JS</div>
      <div className=''>TS</div>
      <div className=''>Node</div>
      <div className=''>GIT</div>
      <div className=''>Express</div>
      <div className=''>React</div>
      <div className=''>Redux/RTK</div>
      <div className=''>Next</div>
      <div className=''>Tailwind</div>
      <div className=''>Firestore</div>
      <div className=''>MongoDB</div>
      <div className=''>PostgresQL</div>
    </footer>
    </>
  )
}
