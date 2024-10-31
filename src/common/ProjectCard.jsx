import React from 'react'

function ProjectCard({ src, link, ProjectName, description }) {
  return (
    <a 
        href={link}
        target="_blank"
      >
        <img className="hover" src={src} alt={`${ProjectName}-logo`}
        />
        <h3>{ProjectName}</h3>
        <p>{description}</p>
      </a>
  )
}

export default ProjectCard
