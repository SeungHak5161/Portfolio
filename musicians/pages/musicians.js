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
      <section>
        <ul className={styles.musicianUl}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  <p className="styles.bold10X">{title}</p>
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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
