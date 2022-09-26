import Image from "next/image";
// css
import styles from "../styles/about.module.css";

export default function IntroCard({ label, value, secondValue, src, alt }) {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.iconImage}>
        <Image src={src} alt={alt} layout={"fixed"} width={48} height={48} />
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLabel}>{label}</div>
        <span className={styles.aboutValue}>
          {value}
          <br />
          {secondValue ? secondValue : ""}
        </span>
      </div>
    </div>
  );
}
