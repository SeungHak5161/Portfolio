import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Favorite Musicians</title>
        <meta name="description" content="SH's Favorite Musicians" />
      </Head>
      <section>
        {/* <div className={styles.homeDivImage}>
          <Image
            src="/images/kimsuyoung.jpg"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div> */}
        {/* <div className="swiper-wrapper"> */}
        <Swiper
          className={styles.swiperWrapper}
          // direction={"horizontal"}
          // autoplay={true}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className={styles.swiperImg}>
            {/* <Image
              // className={styles.swiperImg}
              src="/images/kimsuyoung.jpg"
              layout="fill"
              objectFit="cover"
            ></Image> */}
            1111111111
          </SwiperSlide>
          <SwiperSlide className={styles.swiperImg}>
            {/* <Image
              // className={styles.swiperImg}
              src="/images/kimsuyoung.jpg"
              layout="fill"
              objectFit="cover"
            ></Image> */}
            2222222222
          </SwiperSlide>
          <SwiperSlide className={styles.swiperImg}>
            {/* <Image
              // className={styles.swiperImg}
              src="/images/kimsuyoslideung.jpg"
              layout="fill"
              objectFit="cover"
            ></Image> */}
            333333333333
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
        <h1 className={`${utilStyles.heading} ${utilStyles.bold15X}`}>
          나만 알기 아까운 가수들을 소개합니다.
        </h1>
      </section>
    </Layout>
  );
}
