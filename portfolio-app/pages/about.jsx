import Layout from "../components/layout";
import Image from "next/image";
// css
import styles from "../styles/about.module.css";
// component
import AboutCard from "../components/aboutCard";

export default function about({}) {
  return (
    <Layout>
      <section className={styles.mainWrapper}>
        <div className={styles.title}>
          &quot;사용자 경험을 중요시하는 개발자 백승학입니다!&quot;
        </div>
        <hr className={styles.divider} />
        <div className={styles.aboutWrapper}>
          <div className={styles.cardWrapper}>
            <AboutCard
              label={"이름"}
              value={"백승학"}
              src={"/icon/user.png"}
              alt={"name"}
            />
            <AboutCard
              label={"생년월일"}
              value={"1997.09.23"}
              src={"/icon/calendar.png"}
              alt={"birth"}
            />
            <AboutCard
              label={"학력"}
              value={"한국공학대학교"}
              secondValue={"(컴퓨터공학과)"}
              src={"/icon/univ.png"}
              alt={"graduate"}
            />
            <AboutCard
              label={"이메일"}
              value={"bsh93367@gmail.com"}
              src={"/icon/email.png"}
              alt={"email"}
            />
            <AboutCard
              label={"Github"}
              value={"Link"}
              src={"/icon/github.png"}
              alt={"github"}
              link={"https://github.com/SeungHak5161"}
            />
            <AboutCard
              label={"거주지"}
              value={"경기도 시흥시"}
              src={"/icon/location.png"}
              alt={"location"}
            />
          </div>

          <div className={styles.myPhoto}>
            <Image
              src={"/images/myphoto.jpg"}
              alt={"증명사진"}
              layout="fill"
              objectFit="contain"
              className={styles.img}
            ></Image>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.content}>
          개발에 들어가기 전에 항상 왜?라는 질문을 스스로에게 던집니다.
          <br />
          해당 기능이 서비스에 왜 필요한지, 어떤 역할을 하는지, 누가 사용하는지
          등에 대해 고민하면
          <br />
          사용성에 있어 어떤 부분에 집중해야 할지 생각할 수 있다고 생각합니다.
        </div>
      </section>
    </Layout>
  );
}
