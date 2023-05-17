import React from 'react'
import TimelineSection from '../components/TimelineSection'
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Project } from '@/types';



const Projects = () => {
  const projectList : Project[] = [
    {
      heading: '[project Project]',
      blurb: '[project Project] is a mobile-responsive, collaborative project management application. It was ideated in two hours, planned in a day, then developed within the span of 11 days by a single mob as part of the winter 2023 class from the School of Applied Learning and Technology, aka </Salt>.',
      src: '/projectGIF.gif',
      links: [
        {
          text: 'Check Out the Site',
          href: 'https://project-project-nine.vercel.app/',
        }
      ]
    }, 
    {
      heading: 'Tech Interview Helper',
      blurb: 'This full stack project was built in a day, as part of a Hack-Day event. It uses a RESTful Express API, which communicates with a MongoDB database and a third party API "Techy". The project includes a working system for account creation, user login and saving data to user profiles.',
      src: '/techGif.gif',
      links: [
        {
          text: 'Check Out the Code',
          href: 'https://github.com/SMooreSwe/techInterviewHelper',
        }
      ]
    },
    {
      heading: 'React Gallery',
      blurb: 'A mob-programming exercise. It was built using Create-React-App, with the typescript template. Images are retrieved using the Unsplash API. Routing was done using both React Router and by passing "state" information through the React Router Links, to allow for dynamic page generation.',
      src: '/galleryGIF.gif',
      links: [
        {
          text: 'Check Out the Code',
          href: 'https://github.com/SMooreSwe/react-gallery',
        }
      ]
    },
    {
      heading: 'Puppy Picker',
      blurb: 'This mobile-responsive, full stack App consists of a React UI built using NextJS, a RESTful Express API and a MongoDB database. Pictures for each puppy are obtained from the Unsplash API and relate to the selected dog\'s breed. The UI allows users easy access to CRUD functionality.',
      src: '/puppiesGIF.gif',
      links: [
        {
          text: 'Check Out the Code',
          href: 'https://github.com/SMooreSwe/puppies-frontend',
        }
      ]
    }
  ]

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