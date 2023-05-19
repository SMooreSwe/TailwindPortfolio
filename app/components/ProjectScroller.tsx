'use client'
import { Project } from '@/types'
import { v4 as uuidv4 } from 'uuid';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { projectList } from '../projects/projectList'
import TimelineSection from './TimelineSection'

const ProjectScroller = () => {
    const scroller = useRef<HTMLDivElement>(null)
    const width = scroller.current?.offsetWidth
    const click = width!*0.25
    
    const handleLeftClick = () => {
        const back = 0 - click
        scroller.current?.scrollBy({left: back, behavior: 'smooth'})
    }
  
    const handleRightClick = () => {
        scroller.current?.scrollBy({left: click, behavior: 'smooth'})
    }
  
  return (
    <>
        <button className='hidden sm:block fixed left-2 md:left-6 top-[55%] z-10'>
            <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" onClick={handleLeftClick}/>
        </button>
        <div ref={scroller} className='project-scroller mx-auto'>
            {projectList.map((project : Project) => {
            return (
            <TimelineSection key={uuidv4()} name={project.heading} blurb={project.blurb} src={project.src} links={project.links}/>
            )}
            )}
        </div>
        <button className='hidden sm:block fixed right-2 md:right-6 top-[55%] z-10' onClick={handleRightClick}>
            <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6"/>
        </button>
    </>
    )
}

export default ProjectScroller