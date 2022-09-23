import Layout from "../components/layout";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/header.module.css";
import IntroText from "../components/introText";

export default function about() {
  return (
    <Layout>
      {/* <div className={styles.}></div> */}
      <div className={styles.mainWrapper}>
        {/* <div className={utilstyles.bold15X}>header</div> */}
        <div className={styles.introduce}>
          <IntroText />
        </div>
      </div>
    </Layout>
  );
}
