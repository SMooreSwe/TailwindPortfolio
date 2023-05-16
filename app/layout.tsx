import NavBar from './components/NavBar'
import './globals.css'
import { Inter, Kaushan_Script } from 'next/font/google'
import { motion } from 'framer-motion'
import Logo from './components/Logo'

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
          <Logo/>
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
  )
}
