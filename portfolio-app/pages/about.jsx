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
        <div className={styles.aboutWrapper}>
          <div className={styles.title}>"나는 어떤 개발자? 한 문장으로"</div>
          <AboutCard
            label={"이름"}
            value={"백승학"}
            src={"/icon/user.png"}
            alt={"name"}
          />
          <AboutCard
            label={"생년월일"}
            value={"97.09.23"}
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
            label={"거주지"}
            value={"경기도 시흥시"}
            src={"/icon/location.png"}
            alt={"location"}
          />

          <div className={styles.content}>
            title에 적합한 내용 3줄정도로 간략하게 써보기
            <br /> 어쩌구 저쩌구 고민은 나중에 일단 모양만 잡아두자 <br />
            빨리 완성하고 지원하기!!
          </div>
        </div>
        <div className={styles.myPhoto}>
          <Image
            src={"/images/증명사진.jpg"}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </section>
    </Layout>
  );
}
