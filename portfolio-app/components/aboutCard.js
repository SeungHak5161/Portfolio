import Image from "next/image";
// css
import styles from "../styles/about.module.css";

export default function IntroCard({
  label,
  value,
  secondValue,
  src,
  alt,
  link,
}) {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.iconImage}>
        <Image src={src} alt={alt} layout={"fixed"} width={55} height={55} />
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLabel}>{label}</div>
        {link ? (
          <div className={styles.aboutValue}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {value}
            </a>
          </div>
        ) : (
          <div className={styles.aboutValue}>
            {value}
            <br />
            {secondValue ? secondValue : ""}
          </div>
        )}
      </div>
    </div>
  );
}
