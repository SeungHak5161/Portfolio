import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../styles/Musicians.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import Layout from "../components/layout";
import Date from "../components/date";
// library
import { getSortedPostsData } from "../lib/posts";

export default function musicians({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Musicians</title>
        <meta name="description" content="Musicians list" />
      </Head>
      <section className={styles.musicianSectionWrapper}>
        <div className={styles.musicianSection}>
          {allPostsData.map(({ id, date, title, image }) => (
            <div className={styles.musicianWrapper} key={id}>
              <Link href={`/musicians/${id}`}>
                <a>
                  <div className={styles.musicianImg}>
                    <Image
                      src="/images/김수영.jpg"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className={`${styles.musicianName} ${utilStyles.bold10X}`}
                  >
                    {title}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
