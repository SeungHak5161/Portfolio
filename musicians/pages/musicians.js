import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import Layout from "../components/layout";
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
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
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
