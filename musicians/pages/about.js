import Layout from "../components/layout";
// css
import styles from "../styles/about.module.css";
import utilstyles from "../styles/utils.module.css";

export default function about() {
  return (
    <Layout>
      <div
        className={`${styles.title} ${utilstyles.heading} ${utilstyles.bold15X}`}
      >
        사용한 스택
      </div>
      <section className={styles.stackSectionWrapper}>
        <div className={styles.stackSection}>
          <div className={styles.stackRow}>
            <div className={styles.stackName}>어쩌구</div>
            <div className={styles.stackDescription}>블라블라</div>
          </div>
          <div className={styles.stackRow}>
            <div className={styles.stackName}>저쩌구</div>
            <div className={styles.stackDescription}>불롸불롸</div>
          </div>
          <div className={styles.stackRow}>
            <div className={styles.stackName}>웅냥냥</div>
            <div className={styles.stackDescription}>참 어려운 사람</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
