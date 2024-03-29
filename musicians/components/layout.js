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
          Made by SeungHak5161
          <svg
            className={styles.githubIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
        </a>
      </footer>
    </div>
  );
}
