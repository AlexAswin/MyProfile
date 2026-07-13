import { useRef, useState } from "react";
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
  const [activePage, setActivePage] = useState(0);

  const totalPages = projects.projects.length;

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
      setActivePage(to);
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
          pages={totalPages}
          horizontal
          onScroll={() => {
            if (parallax.current) {
              const page = Math.round(
                parallax.current.current / window.innerWidth
              );
              setActivePage(page);
            }
          }}
        >
          {projects.projects.map((project, index) => (
            <div key={project.id}>
              <ParallaxLayer
                offset={index}
                speed={0.2}
                onClick={() => scroll((index + 1) % totalPages)}
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
                
                <a  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText}
                </a>
              </ParallaxLayer>
            </div>
          ))}
        </Parallax>

        {/* Dots */}
        <div className={styles.dots}>
          {projects.projects.map((project, index) => (
            <button
              key={project.id}
              className={`${styles.dot} ${
                activePage === index ? styles.dotActive : ""
              }`}
              onClick={() => scroll(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}