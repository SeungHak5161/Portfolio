import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import VSCodeStyle from "./VSCodeStyle";

const siteTitle = "title";

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
        <meta property="og:image" content={""} />
        <meta name="twitter:card" content="photo" />
      </Head>
      {/* <VSCodeStyle text={"Header"} type={"component"} href={"/header"} />
          <VSCodeStyle text={"Project"} type={"component"} href={"/project"} />
          <VSCodeStyle text={"Skill"} type={"component"} href={"/skill"} />
          <VSCodeStyle text={"Footer"} type={"component"} href={"/footer"} /> */}
      <main>{children}</main>
    </div>
  );
}
