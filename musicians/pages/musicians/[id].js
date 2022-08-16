import Head from "next/head";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
// css
import styles from "../../styles/musicianDetail.module.css";
import utilStyles from "../../styles/utils.module.css";
// component
import Layout from "../../components/layout";
import Date from "../../components/date";
// library
import { getAllPostIds, getPostData } from "../../lib/posts";
// react-outube
import Youtube from "react-youtube";

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading</div>;
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.entireWrapper}>
        <div className={styles.musicianDetailWrapper}>
          <section className={styles.description}>
            <h1 className={utilStyles.bold15X}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              {/* <Date dateString={postData.date} /> */}
            </div>
            <div className={styles.image}>
              <Image src={postData.image} layout="fill" objectFit="contain" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </section>
          <section className={styles.recommend}>
            <p className={utilStyles.bold15X}>추천곡</p>
            {postData.youtubeId.map((youtubeId) => (
              <div className={styles.player} key={youtubeId}>
                <Youtube videoId={youtubeId} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
