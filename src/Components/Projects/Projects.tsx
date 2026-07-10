import styles from "./Projects.module.css";
import projects from './Projects.json'
import { useState } from "react";

export default function Projects() {
    const [showAllProject, setShowAllProject] = useState(false);
    const images = import.meta.glob("../../assets/Projects/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" });

    function getImage(filename: string) {
        const match = Object.entries(images).find(([path]) => path.endsWith(filename));
        return match ? match[1] as string : "";
      }

    const showInitialProjects = showAllProject
      ? projects.projects
      : projects.projects.slice(0, 2);  

  return (
    <>
      <div className={styles.heading}>
        <h1>Projects</h1>
      </div>

      <div className= {styles.wrapper}>
        {showInitialProjects.map((project) => (
          <div className={styles.card} key={project.id}>
            <img src={getImage(project.image)} className="card-img-top" alt={project.title} />
            <div className= {styles.cardBody}>
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {projects.projects.length > 2 && (
        <button onClick={() => setShowAllProject(!showAllProject)}>
          {showAllProject ? "Show Less" : "Show More"}
        </button>
      )}
    </>
  );
}
