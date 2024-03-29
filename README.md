# Personal Portfolio Site

<div align=center>
 <img src="public/loadUpGIF.gif"/>
</div>

---

This is a SPA portfolio website, built with React. It is animated and fully responsive. The finished product is deployed [here](https://next-portfolio-cyan-nine.vercel.app/). It was built to showcase both past projects and previous skills. I have built it to be easily scalable and easily-updated by utilising reusable components and dynamically generating project slides. 

TypeScript was used to ensure type-safety. 

## Responsive Design

The design was produced with a mobile-first approach, with breakpoints used to ensure the best layouts for different devices, though relative units and responsive design choices meant that media queries were not required for every change. examples of the homepage on mobile and fullscreen are below.

<div align=center>
 <img src="public/phoneProjects.jpg"/>
</div>

---

<div align=center>
 <img src="public/fullscreenProjects.jpg"/>
</div>

## Tailwind

This Project was build with Tailwind CSS. I had not used it prior to starting this and wanted to challenge myself, whilst also learning to use a new tool. By utilising the config file, I was able to easily store fonts and colour choices for repeated use.

## Project Scroller

Whilst an animation library could have been used for the project scrolling, I wanted to use CSS to really test my design, as well as my new Tailwind CSS skills. This also ensures that I am able to keep much of the content as server-side components, improving load times.

## Backend

To refresh my skills with GraphQL, I recently added a GraphQL backend, which can be seen [here](https://github.com/SMooreSwe/portfoliobackend). The server was deployed at render.com and connected to a PostgreSQL database, hosted on supabase.com, due to provisioning, the data is now stored locally and the slides programatically generated, along with the correct buttons, as required for each project. 

In an earlier deployment the frontend code has been amended to display projects from this server. This means that further projects added to the database would programatically expand the project scroller and generate their own slide. As is currently in place, this could distinguish between projects that are and are not deployed and the project displays buttons to the relevant links reflecting this.

## Next Steps

Whilst the site itself is complete, I have been considering the addition of a contact form, in addition to the existing social links. I am also open to further ideas.

## Tools
This is a [Next.js](https://nextjs.org/) project. It utilises Tailwind CSS (including tailwind classes using @apply) and animations used the Framer-Motion library, as well as the React-TypingAnimation Library. 

Icons were added via FontAwesome, as well as [GitHub](https://icons8.com/icon/12599/github) and [LinkedIn](https://icons8.com/icon/8808/linkedin) icons from Icons8.
