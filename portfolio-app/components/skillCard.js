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
            width={150}
            height={150}
          />
        </div>
        <div className={styles.overlay}>
          <ul className={styles.skillUl}>
            {value.map((e, idx) => {
              return (
                <li className={styles.skillLi} key={idx}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
