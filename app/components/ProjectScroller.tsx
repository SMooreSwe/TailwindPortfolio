'use client'
import { Project, Button } from '@/types'
import { v4 as uuidv4 } from 'uuid';
import { faArrowLeft, faArrowRight, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import TimelineSection from './TimelineSection'


const ProjectScroller = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchProjects = async () => {
        const query = {
            "operationName": "AllProjects",
            "query": `query AllProjects { 
                projects {
                    blurb
                    heading
                    src
                    deployed
                    github
                }
            }`,
            "variables": {}
        };
        const response = await axios({
            url: `http://localhost:4000/`, 
            method: 'post',
            headers: { "content-type": "application/json"},
            data: query
        })
        return response.data;
    };

    useEffect(()=> {
        fetchProjects().then(response => setProjects(response.data.projects));
    }, []);

    const buttonMaker = (role: string, href?: string) => {
        if(href){
            const button : Button = {
                text: role == 'deployed' ? 'Visit the site' : 'See the Code',
                href: href,
                icon: role == 'deployed' ? faGlobe : faCode
            }
            return button;
        }
        return null;
    }
    const scroller = useRef<HTMLDivElement>(null)
    
    const handleLeftClick = () => {
        const width = scroller.current?.scrollWidth
        const click = width!/projects.length
        const back = 0 - click
        scroller.current!.scrollBy({left: back, behavior: 'smooth'})
    }
  
    const handleRightClick = () => {
        const width = scroller.current?.scrollWidth
        const click = width!/projects.length
        scroller.current!.scrollBy({left: click, behavior: 'smooth'})
    }
  return (
    <>
        <button className='hidden md:block fixed left-2 lg:left-6 top-[55%]'>
            <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" onClick={handleLeftClick}/>
        </button>
        <div ref={scroller} className='project-scroller mx-auto'>
            {projects.length && projects.map((project : Project) => {
            return (
            <TimelineSection key={uuidv4()} name={project.heading} blurb={project.blurb} src={project.src} links={[buttonMaker('deployed', project.deployed,), buttonMaker('github', project.github)]}/>
            )}
            )}
        </div>
        <button className='hidden md:block fixed right-2 lg:right-6 top-[55%]' onClick={handleRightClick}>
            <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6"/>
        </button>
    </>
    )
}

export default ProjectScroller