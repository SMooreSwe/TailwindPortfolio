import React from 'react'
import TimelineSection from '../components/TimelineSection'
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {

  const projectList = ['[project Project]', 'Tech Interview Helper', 'React Gallery', 'To-Do List']

  return (
    <>
    <header className='max-sm:pt-[20vh] pt-[10vh] pb-[7vh] mx-12 text-6xl'>My Projects</header>
      <div className='project-scroller mx-12'>
        {projectList.map((project, index) => {
          return (
          <TimelineSection key={uuidv4()} name={project}/>
          )}
        )}
      </div>
    </>
  )
}

export default Projects