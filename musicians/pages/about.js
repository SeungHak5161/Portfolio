import Layout from "../components/layout";
// css
import styles from "../styles/about.module.css";
import utilstyles from "../styles/utils.module.css";

export default function about({ aboutData }) {
  return (
    <Layout>
      <section className={styles.stackSectionWrapper}>
        <div className={styles.stackSection}>
          <div className={styles.titleWrapper}>
            <div
              className={`${styles.title} ${utilstyles.heading} ${utilstyles.bold15X}`}
            >
              사용 기술
            </div>
          </div>
          <div className={styles.stackRow}>
            <div className={`${styles.stackName} ${utilstyles.bold12X}`}>
              Next.js
            </div>
            <div className={styles.stackDescription}>
              - SSG(getStaticPaths, getStaticProps)
              <br /> - page기반 Routing(+fallback을 이용한 Loading 처리)
              <br /> - 그 외 : SEO, 캐싱, Image optimize, open graph 등 적용
            </div>
          </div>
          <div className={styles.stackRow}>
            <div className={`${styles.stackName} ${utilstyles.bold12X}`}>
              Library
            </div>
            <div className={styles.stackDescription}>
              - swiper : main page slider에 사용
              <br />- gray-matter : YAML 형식 해석
              <br />- remark : markdown 파일을 html로 변환해주는 라이브러리
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
