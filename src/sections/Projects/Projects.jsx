import React from 'react'
import styles from './ProjectsStyles.module.css'
import cartoon from '../../assets/CV_cartoon.png'
import snakeGame from '../../assets/snakeGame.webp'
import budgetImg from '../../assets/budgetIcon.webp'
import onboarding from '../../assets/onboarding.jpg'
import omegagamesvasaImg from '../../assets/OmegaGamesVasaImg.webp'
import ProjectCard from '../../common/ProjectCard'


// importera och korrigear projekten

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
        src={onboarding}
        link="https://github.com/MrFrolin"
        ProjectName="Onboarding"
        description="app for new employees"
      />
        <ProjectCard 
        src={budgetImg}
        link="https://github.com/MrFrolin"
        ProjectName="BudgetApp"
        description="Keep track of your expenses"
      />
      <ProjectCard 
        src={omegagamesvasaImg}
        link="https://github.com/MrFrolin/OmegaGamesVasa"
        ProjectName="OmegaGamesVasa"
        description="E-commerce site"
      />
      <ProjectCard 
        src={snakeGame}
        link="https://github.com/MrFrolin/StressGame"
        ProjectName="Stressgame"
        description="Console snake game"
      />
      </div>
    </section>
  )
}

export default Projects
