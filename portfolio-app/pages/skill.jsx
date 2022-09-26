import Layout from "../components/layout";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/skill.module.css";
// component
import SkillCard from "../components/skillCard";

export default function about({ aboutData }) {
  return (
    <Layout>
      <section className={styles.mainWrapper}>
        <SkillCard
          label={"React"}
          value={[
            "React 의 생명주기를 이해하고 여러 Hook 들을 사용하여 개발할 수 있습니다.",
            "aa",
          ]}
          src={"/icon/univ.png"}
          alt={"graduate"}
        />
      </section>
    </Layout>
  );
}
