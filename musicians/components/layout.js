import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

const siteTitle = "나만 알기 아쉬운 가수들";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="URL Example" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:description" content="SH's Favorite Muscians" />
        <meta name="author" content="SeungHak5161" />
        <meta
          property="og:image"
          content={
            "http://www.msbsound.com/wordpress/wp-content/uploads/2016/06/김수영_Dont-Know_프로필-1024x737.jpg"
          }
        />
        <meta name="twitter:card" content="photo" />
      </Head>
      <div id={styles.navbar} className={utilStyles.bold15X}>
        <Link href="/">
          <a className={styles.navLogo}>
            <Image
              src="/images/logo.png"
              width={"80px"}
              height={"80px"}
            ></Image>
          </a>
        </Link>
        <Link href="/musicians">
          <a className={styles.navItem}>Musicians</a>
        </Link>
        <Link href="/releases">
          <a className={styles.navItem}>Releases</a>
        </Link>
        <Link href="/about">
          <a className={styles.navItem}>About</a>
        </Link>
      </div>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/SeungHak5161"
          target="_blank"
          // 링크를 통해 들어간 페이지와 연결해주는 페이지 사이에 액세스할 수 없게 함(보안상, 성능상 이유)
          rel="noopener noreferrer"
        >
          Made by SeungHak5161🦈
        </a>
      </footer>
    </div>
  );
}
