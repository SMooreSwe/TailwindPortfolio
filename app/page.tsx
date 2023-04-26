import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex ml-20 justify-between content-center h-screen'>
      <div className='flex justify-center flex-col py-[25%] pl-[15%] gap-5'>
      <h1 className='text-8xl'>Stephen Moore</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, architecto?</h3>
      <button className='text-xl bg-gray-800 rounded-2xl py-2 px-5 w-fit  hover:bg-emerald-600 hover:rounded-xl transition-all duration-200 ease-linear'>See my projects here</button>
      </div>
      <div className='fixed right-[-700px] w-[2000px] h-auto aspect-square shadow-md shadow-white rounded-full z-0'></div>
    </main>
  )
}
