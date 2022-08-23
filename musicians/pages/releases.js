import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../styles/releases.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import Layout from "../components/layout";
// library
import { getReleaseData } from "../lib/posts";

export default function releases({ allReleasesData }) {
  return (
    <Layout>
      <div className={styles.coverSectionWrapper}>
        <div className={styles.coverSection}>
          {allReleasesData.image.map((image, idx) => (
            <div className={styles.coverImgWrapper} key={idx}>
              <div className={styles.coverImg}>
                <a
                  href={allReleasesData.link[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={image} layout="fill" objectFit="cover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allReleasesData = getReleaseData();
  return {
    props: {
      allReleasesData,
    },
  };
}
