import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Favorite Musicians</title>
        <meta name="description" content="SH's Favorite Musicians" />
      </Head>
      {/* <section>
        <Image
          src="/images/kimsuyoung.jpg"
          className={utilStyles.borderCircle}
          width={"100%"}
          height={"100%"}
        ></Image>
        <h1 className={`${utilStyles.heading} ${utilStyles.bold15X}`}>
          나만 알기 아까운 가수들을 소개합니다.
        </h1>
      </section> */}
    </Layout>
  );
}
