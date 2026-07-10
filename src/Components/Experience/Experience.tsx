import styles from "./Experience.module.css";
import development from "../../assets/developer.png";
import professionalExperience from "./Experience.json";

export default function Experience() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <img src={development} alt="Profile Image" />
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.Heading}>
            <h1>Experience</h1>
          </div>

          <div className={styles.experienceDetails}>
            {professionalExperience.Experience.map((job, index) => (
              <div key={index}>
                <h3>{job.title}</h3>
                <p>
                  {job.company} — {job.location}
                </p>
                <p>
                  {job.startDate} – {job.endDate}
                </p>
                <ul>
                  {job.responsibilities.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
