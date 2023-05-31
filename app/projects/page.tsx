import React, { SyntheticEvent } from 'react'
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ProjectScroller from '../components/ProjectScroller';


const Projects = () => {
  return (
    <>
      <div className='sm:pb-32 md:pb-24'>
        <PageHeader message={'My Projects'}/>
          <ProjectScroller/>
      </div>
      <div className='hidden sm:block'>
        <Footer/>
      </div>
    </>
  )
}

export default Projects