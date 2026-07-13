import styles from './Footer.module.css';
import footerData from './Footer.json'

export default function Footer() {
  return (
    <>
        <div className={styles.wrapper}>
            <div>
                <h1>{footerData.name}</h1>
            </div>

            <div className= {styles.infoRow}>
                <div>
                    <div className={styles.contactInfo}>
                        <p>{footerData.phone}</p>
                        <p>{footerData.email}</p>
                        <p>{footerData.addressLine1}</p>
                        <p>{footerData.addressLine2}</p>
                    </div>
                </div>

                <div className={styles.socialMedia}>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-whatsapp"></i></a>
                    <a href=""><i className="bi bi-meta"></i></a>
                </div>
            </div>
        </div>
    </>

  );
}