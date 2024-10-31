import styles from './SkillsStyles.module.css'
import checkmarkDark from '../../assets/checkmarkDark.png'
import checkmarkLight from '../../assets/checkmarkLight.png'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ?checkmarkDark : checkmarkLight ;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Blazor" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill=".NET" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="NoSQL" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
    </section>
  )
}

export default Skills
