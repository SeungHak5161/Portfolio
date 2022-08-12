import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import Layout from "../components/layout";
// Swiper
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Favorite Musicians</title>
        <meta name="description" content="SH's Favorite Musicians" />
      </Head>
      <section>
        <Swiper
          className={styles.swiperWrapper}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={2}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className={styles.swiperImg}>
            <Image
              className={styles.swiperImg}
              src="/images/kimsuyoung.jpg"
              layout="fill"
              objectFit="contain"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperImg}>
            <Image
              className={styles.swiperImg}
              src="/images/kimsuyoung.jpg"
              layout="fill"
              objectFit="contain"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperImg}>
            <Image
              className={styles.swiperImg}
              src="/images/kimsuyoung.jpg"
              layout="fill"
              objectFit="contain"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperImg}>
            <Image
              className={styles.swiperImg}
              src="/images/kimsuyoung.jpg"
              layout="fill"
              objectFit="contain"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperImg}>
            <Image
              className={styles.swiperImg}
              src="/images/kimsuyoung.jpg"
              layout="fill"
              objectFit="contain"
            ></Image>
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
