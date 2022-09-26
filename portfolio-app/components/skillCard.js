import Image from "next/image";
// css
import styles from "../styles/skill.module.css";

export default function IntroCard({ label, value, src, alt }) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillLabel}>{label}</div>
      <div className={styles.skillValue}>
        <div className={styles.skillImage}>
          <Image
            src={src}
            alt={alt}
            layout={"fixed"}
            width={180}
            height={180}
          />
        </div>
        <ul>
          {value.map((e, idx) => {
            return <li key={idx}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
