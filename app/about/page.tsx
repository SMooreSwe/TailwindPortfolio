import React from 'react'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import Blurb from './Blurb'

const About = () => {
  return (
    <>
    <div className='sm:pb-32 md:pb-24'>
      <PageHeader message={'About Me'}/>
      <main>
        <div>
          <Blurb/>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default About