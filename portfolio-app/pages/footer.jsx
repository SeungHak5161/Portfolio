import Layout from "../components/layout";
import Image from "next/image";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/footer.module.css";

export default function about({ aboutData }) {
  return (
    <Layout>
      <div className={utilstyles.bold15X}>footer</div>

      <div className={styles.myPhoto}>
        <Image
          src={"/images/증명사진.jpg"}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
    </Layout>
  );
}
