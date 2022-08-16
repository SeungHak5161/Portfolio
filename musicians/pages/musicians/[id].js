import Head from "next/head";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
// css
// import styles from "../styles/Musicians.module.css";
import utilStyles from "../../styles/utils.module.css";
// component
import Layout from "../../components/layout";
import Date from "../../components/date";
// library
import { getAllPostIds, getPostData } from "../../lib/posts";

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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
