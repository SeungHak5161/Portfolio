import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import Layout from "../components/layout";

export default function Home() {
  new Pageable("#container", {
    childSelector: "[data-anchor]",
    anipation: 300,
    delay: 0,
    throttle: 50,
    events: {
      wheel: true, // enable / disable mousewheel scrolling
      keydown: true, // enable / disable keyboard navigation
    },
    easing: function (currentTime, startPos, endPos, interval) {
      // the easing function used for the scroll animation
      return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
    },
  });
  return (
    <Layout>
      <Head>
        <title>SeungHak5161</title>
        <meta name="description" content="백승학 포트폴리오" />
      </Head>
      <div id="container">
        <div data-anchor="Page 1">page1</div>
        <div data-anchor="Page 2">page2</div>
        <div data-anchor="Page 3">page3</div>
        <div data-anchor="Page 4">page4</div>
      </div>
    </Layout>
  );
}
