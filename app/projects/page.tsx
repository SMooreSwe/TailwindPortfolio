import React from 'react'
import TimelineSection from '../components/TimelineSection'
import { v4 as uuidv4 } from 'uuid';

type Project = {
  heading: string,
  blurb: string,
  src: string,
}

const Projects = () => {
  const projectList = [
    {
      heading: '[project Project]',
      blurb: '',
      src: ''
    }, 
    {
      heading: 'Tech Interview Helper',
      blurb: '',
      src: ''
    },
    {
      heading: 'React Gallery',
      blurb: '',
      src: ''
    },
    {
      heading: 'Puppy Picker',
      blurb: '',
      src: ''
    }
  ]

  return (
    <>
    <header className='font-heading text-buttons w-fit mx-auto text-3xl mb-8'>My Projects</header>
      <div className='project-scroller mx-auto'>
        {projectList.map((project : Project) => {
          return (
          <TimelineSection key={uuidv4()} name={project.heading}/>
          )}
        )}
      </div>
    </>
  )
}

export default Projects