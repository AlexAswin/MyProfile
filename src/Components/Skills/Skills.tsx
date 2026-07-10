import styles from "./Skills.module.css";
import skills from "./Skills.json";

export default function Skills() {
    const images = import.meta.glob("../../assets/SkillsLogo/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" });


  function getImage(filename: string): string | undefined {
    const match = Object.entries(images).find(([path]) =>
      path.endsWith(filename)
    );
    return match ? (match[1] as string) : undefined;
  }
  return (
    <>
      <div className={styles.heading}>
        <h1>Skills</h1>
      </div>

      <div className={styles.skillsGrid}>
        {skills.skills.map((skill) => (
          <div className={styles.skillCard} key={skill.id}>
            <img src={getImage(skill.image)} alt={skill.name} />
            <h5>{skill.name}</h5>
            <p>{skill.category}</p>
          </div>
        ))}
      </div>
    </>
  );
}
