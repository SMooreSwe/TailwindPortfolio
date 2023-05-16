import React from 'react'
import TimelineSection from '../components/TimelineSection'
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';

type Project = {
  heading: string,
  blurb: string,
  links: string[]
  src: string,
}

const Projects = () => {
  const projectList : Project[] = [
    {
      heading: '[project Project]',
      blurb: '[project Project] is a collaborative and interactive project management application. It was ideated in two hours, planned in a day, then developed within the span of 11 days by four full-stack Javascript students as part of the winter 2023 class from the School of Applied Learning and Technology, aka </Salt>.',
      src: '',
      links: []
    }, 
    {
      heading: 'Tech Interview Helper',
      blurb: '',
      src: '',
      links: []
    },
    {
      heading: 'React Gallery',
      blurb: '',
      src: '',
      links: []
    },
    {
      heading: 'Puppy Picker',
      blurb: '',
      src: '',
      links: []
    }
  ]

  return (
    <>
    <header className='font-heading text-buttons w-fit mx-auto text-3xl md:text-4xl lg:text-6xl mt-[3vh] lg:mt-6 mb-[5vh] lg:mb-10'>My Projects</header>
      <div className='project-scroller mx-auto'>
        {projectList.map((project : Project) => {
          return (
          <TimelineSection key={uuidv4()} name={project.heading} blurb={project.blurb}/>
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