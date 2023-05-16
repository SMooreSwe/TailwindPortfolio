import NavBar from './components/NavBar'
import './globals.css'
import { Inter, Kaushan_Script } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Kaushan = Kaushan_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-kaushan'
})

export const metadata = {
  title: 'Steve Moore Portfolio',
  description: 'A Portfolio Site to show off my projects and work on Tailwind and Framer',
  icons: {
    icon: '/favicon-16x16.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Kaushan.variable}`}>
        <div className="flex justify-between pl-4 w-screen">
          <img src="/portfolioprofilecrop.jpg" alt="a picture of me!" className='blob mt-2 w-20 h-20 object-cover self-center aspect-square border-solid border-4 border-secondary'/>
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
  )
}
