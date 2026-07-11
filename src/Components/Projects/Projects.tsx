import { useRef } from "react";
import {
  Parallax,
  ParallaxLayer,
  type IParallax,
} from "@react-spring/parallax";
import styles from "./Projects.module.css";
import projects from "./Projects.json";

const gradients = ["pink", "teal", "tomato", "purple"];

export default function Projects() {
  const parallax = useRef<IParallax>(null);
  const images = import.meta.glob(
    "../../assets/Projects/*.{png,jpg,jpeg,svg}",
    { eager: true, import: "default" }
  );

  function getImage(filename: string) {
    const match = Object.entries(images).find(([path]) =>
      path.endsWith(filename)
    );
    return match ? (match[1] as string) : "";
  }

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <>
      <div className={styles.heading}>
        <h1>Projects</h1>
      </div>

      <div className={styles.parallaxWrapper}>
        <Parallax
          className={styles.container}
          ref={parallax}
          pages={projects.projects.length}
          horizontal
        >
          {projects.projects.map((project, index) => (
            <div key={project.id}>
              <ParallaxLayer
                offset={index}
                speed={0.2}
                onClick={() => scroll((index + 1) % projects.projects.length)}
              >
                <div className={styles.slopeBegin} />
              </ParallaxLayer>

              <ParallaxLayer offset={index} speed={0.6}>
                <div
                  className={`${styles.slopeEnd} ${
                    styles[gradients[index % gradients.length]]
                  }`}
                />
              </ParallaxLayer>

              <ParallaxLayer
                className={styles.content}
                offset={index}
                speed={0.4}
              >
                <img
                  src={getImage(project.image)}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText}
                </a>
              </ParallaxLayer>
            </div>
          ))}
        </Parallax>
      </div>
    </>
  );
}
