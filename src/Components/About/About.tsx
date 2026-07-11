import styles from "./About.module.css";
import profileImage from "../../assets/Aswin.png";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const firstName: string = "Alex";
  const lastName: string = "Aswin";
  const profession: string = "UI Developer";
  const specilisaction: string = "React | Angular";
  const phoneNbr: number = 8760442683;
  const gmail: string = "alex.alexaswin95@gmail.com";
  const address: string = "TamilNadu, India";
  const linkedIn: string = "alexaswin";
  const summaryRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'hidden' | 'visible' | 'exited'>('hidden');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus('visible');
        } else if (entry.boundingClientRect.top < 0) {
          setStatus('exited');
        } else {
          setStatus('hidden');
        }
      },
      { threshold: 0.2 }
    );

    if (summaryRef.current) {
      observer.observe(summaryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.nameContainer}>
            <h1>
              {firstName} <br /> {lastName}
            </h1>
          </div>

          <div className={styles.professionContainer}>
            <h4>
              {profession} <br /> {specilisaction}
            </h4>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.phoneNbr}>
              <h6>
                <i className="bi bi-telephone-fill"></i> &nbsp;&nbsp;&nbsp;{" "}
                {phoneNbr}{" "}
              </h6>
            </div>
            <div className={styles.gmail}>
              <h6>
                <i className="bi bi-envelope-at-fill"></i> &nbsp;&nbsp;&nbsp;{" "}
                {gmail}
              </h6>
            </div>
          </div>

          <div className={styles.otherDetails}>
            <div className={styles.address}>
              <h6>
                <i className="bi bi-geo-alt"></i> &nbsp;&nbsp;&nbsp; {address}{" "}
              </h6>
            </div>
            <div className={styles.linkedin}>
              <h6>
                <i className="bi bi-linkedin"></i> &nbsp;&nbsp;&nbsp; {linkedIn}
              </h6>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <img src={profileImage} alt="Profile Image" />
        </div>
      </div>

      <div
        ref={summaryRef}
        className={`${styles.summery} ${styles[status]}`}
      >
        <p>
          Frontend Developer specializing in Angular and React, skilled in
          building scalable, high-performance web applications using TypeScript
          and modern JavaScript. Strong background in component architecture,
          state management, and API integration, with a focus on writing clean,
          maintainable code and delivering great user experiences.
        </p>
      </div>
    </>
  );
}
