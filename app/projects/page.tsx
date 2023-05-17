import React from 'react'
import TimelineSection from '../components/TimelineSection'
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Project } from '@/types';
import { projectList } from './projectList';


const Projects = () => {
  
  return (
    <>
    <PageHeader message={'My Projects'}/>
      <div className='project-scroller mx-auto'>
        {projectList.map((project : Project) => {
          return (
          <TimelineSection key={uuidv4()} name={project.heading} blurb={project.blurb} src={project.src} links={project.links}/>
          )}
        )}
      </div>
      <div className='hidden sm:block'>
        <Footer/>
      </div>
    </>
  )
}

export default Projects