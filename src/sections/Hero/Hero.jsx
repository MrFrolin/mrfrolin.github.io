import styles from './HeroStyles.module.css';
import heroImg from '../../assets/cv-bild.jpg';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import githubLight from '../../assets/githubLight.png';
import githubDark from '../../assets/githubDark.png';
import linkedinLight from '../../assets/linkedinLight.png';
import linkedinDark from '../../assets/linkedinDark.svg';
import CV from '../../assets/CV.pdf';
import {useTheme} from '../../common/ThemeContext.jsx';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubDark : githubLight;
  const linkedinIcon = theme === 'light' ? linkedinDark : linkedinLight ;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
         className={styles.hero} 
         src={heroImg} alt="Profilbild"
         />
        <img 
        className={styles.colorMode} 
        src={themeIcon} alt='colorMode'
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Philip
          <br/>
          Frölin
        </h1>
        <h2>.NET-Developer</h2>
        <span>
          <a href="https://github.com/MrFrolin" target="_blank">
            <img src={githubIcon} alt="Github"></img>
          </a>
          <a href="https://www.linkedin.com/in/philip-frolin" target="_blank">
            <img src={linkedinIcon} alt="Linkedin"></img>
          </a>
        </span>
        <p className={styles.description}></p>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
      </div>
    </section>
  )
}

export default Hero
