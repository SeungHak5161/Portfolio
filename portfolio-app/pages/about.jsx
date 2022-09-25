import Layout from "../components/layout";
import Image from "next/image";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/about.module.css";

export default function about({}) {
  return (
    <Layout>
      <section className={styles.mainWrapper}>
        <div className={utilstyles.bold15X}>about</div>
        <div className={styles.myPhoto}>
          <Image
            src={"/images/증명사진.jpg"}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </section>
    </Layout>
  );
}
