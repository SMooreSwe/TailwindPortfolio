import React from 'react'
import TimelineSection from '../components/TimelineSection'
import { uuid } from 'uuidv4';

const Projects = () => {

  const projectList = ['[project Project]', 'Tech Interview Helper', 'React Gallery', 'To-Do List']

  return (
    <>
    {projectList.map((project, index) => {
      return (
      <TimelineSection key={uuid()} name={project}/>
      )}
    )}
    </>
  )
}

export default Projects