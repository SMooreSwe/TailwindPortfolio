import React from 'react'
import TimelineSection from '../components/TimelineSection'
import { uuid } from 'uuidv4';

const Projects = () => {

  const projectList = ['[project Project]', 'Tech Interview Helper', 'React Gallery', 'To-Do List']

  return (
    <>
    <header className='pt-[20vh] pb-[35vh] mx-[75px] text-7xl'>My Projects</header>
      <div className='project-timeline flex overflow-y-auto'>
        {projectList.map((project, index) => {
          return (
          <TimelineSection key={uuid()} name={project}/>
          )}
        )}
      </div>
    </>
  )
}

export default Projects