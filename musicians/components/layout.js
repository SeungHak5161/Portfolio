import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const siteTitle = "나만 알기 아쉬운 가수들";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
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

      <main>{children}</main>
    </div>
  );
}
