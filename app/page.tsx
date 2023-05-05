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
    <main className='flex justify-start content-center h-screen'>
      <div className='home-main pl-[20%] w-screen mt-16 mb-36'>
        <div className='flex justify-between w-[80%] max-h-[60vh]'>
          <div className='flex justify-center flex-col py-[25%] gap-5'>
            <h1 className='text-8xl'>Stephen Moore</h1>
            <h3 className='px-2 max-w-2xl'>I am a full stack JavaScript Developer. Previously a lawyer in England, I now use those problem-solving skills in the technical field.</h3>
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
            <img src="/IMG_4588.jpg" alt="a picture of me!" className='h-[50vh] object-cover self-center aspect-square rounded-full'/>
        </div>
      </div>
    </main>
    <footer className='fixed bg-gray-800 w-screen h-20 bottom-0 flex flex-col items-center justify-center gap-2 pb-2'>
      <h5 className='mx-auto mt-1'>The tools I use</h5>
      <div className='icon-container'>
        <div className=''><img src="/JS-icon.png" alt="JavaScript Icon" className="h-8"/></div>
        <div className=''><img src="/typescript-icon.png" alt="TypeScript Icon" className="h-8"/></div>
        <div className=''><img src="/node-icon.png" alt="NodeJS Icon" className="h-8"/></div>
        <div className=''><img src="/github-icon.png" alt="Github Icon" className="h-8"/></div>
        <div className=''><img src="/expressjs-icon.png" alt="ReactJS Icon" className="h-8"/></div>
        <div className=''><img src="/react-icon.png" alt="ExpressJS Icon" className="h-8"/></div>
        <div className=''><img src="/redux-icon.png" alt="Redux Icon" className="h-8"/></div>
        <div className=''><img src="/next.svg" alt="Next Icon" className="h-6 mt-1"/></div>
        <div className=''><img src="/tailwind-icon.png" alt="Tailwind CSS Icon" className="h-8"/></div>
        <div className=''><img src="/firebase-icon.png" alt="Firebase Icon" className="h-8"/></div>
        <div className=''><img src="/mongodb-icon.png" alt="MongoDB Icon" className="h-8"/></div>
        <div className=''><img src="/postgresql-icon.png" alt="PostgresQL Icon" className="h-8"/></div>
      </div>
    </footer>
    </>
  )
}
