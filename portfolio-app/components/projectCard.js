import Image from "next/image";
// css
import styles from "../styles/card.module.css";
import utilStyles from "../styles/utils.module.css";

export default function projectCard({ project }) {
  // console.log(project);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          {/* <Image src={project.image} layout="fill" objectFit="cover"></Image> */}
        </div>
        <div className={styles.cardContent}>
          <span className={styles.cardTitle}>{project.title}</span>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  );
}
