import Head from "next/head";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
// css
import styles from "../../styles/musicianDetail.module.css";
import utilStyles from "../../styles/utils.module.css";
// component
import Layout from "../../components/layout";
// library
import { getAllPostIds, getPostData } from "../../lib/posts";
// react-youtube
import Youtube from "react-youtube";
import { useEffect } from "react";

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading</div>;
  }
  // youtube api가 http를 기본으로 해석하기 때문에 설정 바꿔줘야 함,
  // React 기반 SSR의 경우 렌더링 단계에서 Virtual DOM을 사용하기 때문에 window에 접근이 불가능 함.
  // 따라서 useEffect를 사용하여 설정.
  useEffect(() => {
    window.YTConfig = {
      host: "https://www.youtube.com",
    };
  }, []);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.entireWrapper}>
        <div className={styles.musicianDetailWrapper}>
          <p className={`${utilStyles.bold20X} ${styles.title}`}>
            {postData.title}
          </p>
          <section className={styles.description}>
            <div className={utilStyles.lightText}></div>
            <div className={styles.image}>
              <Image src={postData.image} layout="fill" objectFit="cover" />
            </div>
            <div
              className={styles.descriptionArticle}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </section>
          <section className={styles.recommend}>
            <p
              className={`${utilStyles.bold10X} ${utilStyles.boldBorder} ${styles.recommendTitle}`}
            >
              추천곡
            </p>
            <div className={styles.recommendList}>
              {postData.youtubeId.map((youtubeId) => (
                <div className={styles.player} key={youtubeId}>
                  <Youtube
                    videoId={youtubeId}
                    opts={{
                      playerVars: {
                        // 특수효과 기본값 사용 안 함 -> 왜 적용 안되냐
                        iv_load_policy: 3,
                      },
                    }}
                  />
                </div>
              ))}
            </div>
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
