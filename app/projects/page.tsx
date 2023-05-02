import React from 'react'
import TimelineSection from '../components/TimelineSection'

const Projects = () => {

  const projectList = ['[project Project]', 'Tech Interview Helper', 'React Gallery', 'To-Do List']

  return (
    <>
    {projectList.map((project, index) => {
      return (
      <TimelineSection key={crypto.randomUUID()} name={project}/>
      )}
    )}
    </>
  )
}

export default Projects