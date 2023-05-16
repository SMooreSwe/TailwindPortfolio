
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer'
import Titles from './components/Titles'
import HomeButtons from './components/HomeButtons'


//link to icons github <a target="_blank" href="https://icons8.com/icon/12599/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//link to linkedIn <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default function Home() {
  return (
    <>
    <main className='flex flex-col gap-6 content-center h-[70vh] mt-12 px-4'>
      <Titles/>
      <HomeButtons/>
    </main>
    <Footer/>
    </>
  )
}
