import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className='flex ml-20 justify-between content-center h-screen'>
      <div className='flex justify-center flex-col py-[25%] pl-[15%] gap-5'>
      <h1 className='text-8xl'>Stephen Moore</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, architecto?</h3>
      <Link href={'/projects'}><button className='main__button'>See my projects here</button></Link>
      </div>
      <div className='fixed right-[-700px] w-[2000px] h-auto aspect-square shadow-md shadow-white rounded-full z-0'></div>
    </main>
    <footer className='fixed  w-screen h-20 bottom-0 flex justify-center content-center gap-5'>
      <div className=''>JS</div>
      <div className=''>TS</div>
      <div className=''>Node</div>
      <div className=''>GIT</div>
      <div className=''>Express</div>
      <div className=''>React</div>
      <div className=''>Next</div>
      <div className=''>Firestore</div>
      <div className=''>Mongo</div>
      <div className=''>PostgresQL</div>
    </footer>
    </>
  )
}
