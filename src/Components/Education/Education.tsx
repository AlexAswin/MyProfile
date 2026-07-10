import styles from "./Education.module.css";
import educationData from "./education.json";

export default function Education() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
      <p>{educationData.sectionSubtitle}</p>
      <h6>{educationData.sectionTitle}</h6>
        
      </div>

      <hr className={styles.divider} />

      <div className={styles.grid}>
        {educationData.items.map((item, index) => (
          <div className={styles.itemWrapper} key={item.id}>
            <div className={styles.item}>
              <span className={styles.icon}>◆</span>
              <p>{item.title}</p>
            </div>
            {index < 2 && <hr className={styles.itemDivider} />}
          </div>
        ))}
      </div>
    </div>
  );
}