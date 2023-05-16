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
      blurb: '[project Project] is a collaborative and interactive project management application. It was ideated in two hours, planned in a day, then developed within the span of 11 days by four full-stack Javascript students as part of the winter 2023 class from the School of Applied Learning and Technology, aka </Salt>.',
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
          <TimelineSection key={uuidv4()} name={project.heading} blurb={project.blurb}/>
          )}
        )}
      </div>
    </>
  )
}

export default Projects