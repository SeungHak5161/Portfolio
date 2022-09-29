import Layout from "../components/layout";
// css
import styles from "../styles/skill.module.css";
// component
import SkillCard from "../components/skillCard";

export default function about() {
  return (
    <Layout>
      <section className={styles.mainWrapper}>
        <div className={styles.skillWrapper}>
          <SkillCard
            label={"Javascript"}
            value={[
              "ES6 이상의 문법",
              "DOM 조작",
              "Promise 등 비동기 처리",
              "함수형 프로그래밍",
            ]}
            src={"/images/js.png"}
          />
          <SkillCard
            label={"HTML"}
            value={[
              "기본 지식 및 여러 속성",
              "의미론적 작성법",
              "SEO, open graph",
            ]}
            src={"/images/html.png"}
          />
          <SkillCard
            label={"CSS"}
            value={[
              "Flex, Grid 레이아웃",
              "반응형 디자인 이해",
              "미디어 쿼리 사용",
            ]}
            src={"/images/css.png"}
          />
          <SkillCard
            label={"SCSS"}
            value={["Nesting", "@mixin, @extend", "연산자 사용"]}
            src={"/images/sass.png"}
          />
          <SkillCard
            label={"Git, Github"}
            value={[
              "Git을 이용한 버전관리",
              "Branch, PR, Merge 등",
              "Git Flow 이해",
            ]}
            src={"/images/github.png"}
          />
          <SkillCard
            label={"React"}
            value={["React 생명주기 이해", "각종 Hook 사용"]}
            src={"/images/react.png"}
          />
          <SkillCard
            label={"Next.js"}
            value={["파일기반 라우팅", "CSR, SSR, SSG 이해"]}
            src={"/images/nextjs.png"}
          />
          <SkillCard
            label={"Redux"}
            value={["상태변화 흐름 이해", "기본 원칙에 기반한 사용"]}
            src={"/images/redux.png"}
          />
        </div>
      </section>
    </Layout>
  );
}
