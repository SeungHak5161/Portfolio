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
      {/* <section>
        <ul className={styles.musicianUl}>
          {allPostsData.map(({ id, date, title, image }) => (
            <li key={id} className={styles.musicianLi}>
              <Link href={`/posts/${id}`}>
                <a>
                  <p className={utilStyles.bold10X}>{title}</p>
                </a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <Image
                className={styles.musicianImg}
                // src={image}
                src="/images/kimsuyoung.jpg"
                layout="fill"
                objectFit="contain"
              />
            </li>
          ))}
        </ul>
      </section> */}
      <section className={styles.musicianSection}>
        {allPostsData.map(({ id, date, title, image }) => (
          <div className={styles.musicianWrapper} key={id}>
            <Link href={`/posts/${id}`}>
              <a>
                <div className={styles.musicianImg}>
                  <Image
                    src="/images/kimsuyoung.jpg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className={`${styles.musicianName} ${utilStyles.bold10X}`}>
                  {title}
                </p>
              </a>
            </Link>
          </div>
        ))}
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
