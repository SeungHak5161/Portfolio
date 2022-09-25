import Layout from "../components/layout";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/footer.module.css";

export default function about({ aboutData }) {
  return (
    <Layout>
      <section className={styles.mainWrapper}>
        <div className={utilstyles.bold15X}>footer</div>
      </section>
    </Layout>
  );
}
