import Layout from "../components/layout";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/skill.module.css";

export default function about({ aboutData }) {
  return (
    <Layout>
      <section className={styles.mainWrapper}>
        <div className={utilstyles.bold15X}>skill</div>
      </section>
    </Layout>
  );
}
