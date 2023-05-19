import NavBar from './components/NavBar'
import './globals.css'
import { Kaushan_Script, Roboto } from 'next/font/google'
import Logo from './components/Logo'

const roboto = Roboto({ 
  weight: ['400'],
  subsets: ['latin'],
})

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
      <body className={`${roboto.className} ${Kaushan.variable} overflow-x-hidden`}>
        <div className="flex justify-between pl-4 w-screen">
          <Logo/>
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
  )
}
