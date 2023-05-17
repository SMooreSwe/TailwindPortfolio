import React from 'react'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import Blurb from './Blurb'

const About = () => {
  return (
    <>
    <PageHeader message={'About Me'}/>
    <main>
      <div>
        <Blurb/>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default About