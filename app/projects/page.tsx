import React, { SyntheticEvent } from 'react'
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ProjectScroller from '../components/ProjectScroller';


const Projects = () => {
  return (
    <>
    <PageHeader message={'My Projects'}/>
      <ProjectScroller/>
      <div className='hidden sm:block'>
        <Footer/>
      </div>
    </>
  )
}

export default Projects