import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import Layout from "../components/layout";
// libarary

export default function Home() {
  const containerRef = useRef(null);
  const pageableRef = useRef(null);
  const linearProgressBarRef = useRef(null);

  const loadPageable = async () => {
    const Pageable = (await import("pageable")).default;
    const pageable = new Pageable(containerRef.current, {
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
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
    });
    pageableRef.current = pageable;
  };

  useEffect(() => {
    containerRef.current = document.getElementById("container");
    loadPageable();
  }, []);
  return (
    <>
      {/* <Layout> */}
      <Head>
        <title>SeungHak5161</title>
        <meta name="description" content="백승학 포트폴리오" />
      </Head>
      <div id="container">
        <div
          data-anchor="page-1"
          id="page-1"
          className="pg-page"
          style={{
            backgroundColor: "peachpuff",
          }}
        >
          page1
        </div>

        <div
          data-anchor="page-2"
          className="pg-page"
          style={{
            backgroundColor: "cornflowerblue",
          }}
        >
          page2
        </div>
        <div
          data-anchor="page-3"
          className="pg-page"
          style={{
            backgroundColor: "bisque",
          }}
        >
          page3
        </div>
        <div
          data-anchor="page-4"
          className="pg-page"
          style={{
            backgroundColor: "mediumaquamarine",
          }}
        >
          page4
        </div>
        <div
          className="linear-progress"
          style={{
            position: "fixed",
            top: "0px",
            left: "10px",
            width: "calc(100vw - 20px)",
            height: "2px",
          }}
        >
          <div
            className="bar"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "#84e8ff",
              transformOrigin: "0 0 0",
            }}
            ref={linearProgressBarRef}
          ></div>
        </div>
      </div>
    </>
  );
}
