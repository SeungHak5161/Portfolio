import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import VSCodeStyle from "../components/VSCodeStyle";
// libarary

// pages
import Header from "./header";
import Project from "./project";
import Skill from "./skill";
import Footer from "./footer";

export default function Home() {
  const containerRef = useRef(null);
  const pageableRef = useRef(null);
  const linearProgressBarRef = useRef(null);

  const $navbar = useRef({ activeNow: null });

  const loadPageable = async () => {
    const Pageable = (await import("pageable")).default;
    const pageable = new Pageable(containerRef.current, {
      childSelector: "[data-anchor]",
      anipation: 300,
      delay: 0,
      throttle: 50,
      anchors: ["page-1", "project", "skill", "footer"],
      pips: false,
      events: {
        wheel: true,
        keydown: true,
        touch: false,
        mouse: false,
      },
      easing: function (currentTime, startPos, endPos, interval) {
        // the easing function used for the scroll animation
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
      onInit: () => {},
      onBeforeStart: (e) => {
        console.log(e);
        $navbar.current.childNodes[e].classList.remove(`${styles.active}`);
      },
      onFinish: (e) => {
        const actived = ($navbar.current.activeNow = e.index);

        $navbar.current.childNodes[actived].classList.add(`${styles.active}`);
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
      <Head>
        <title>SeungHak5161</title>
        <meta name="description" content="백승학 포트폴리오" />
      </Head>

      {/** navbar (anchors) */}
      <div className={styles.navbarWrapper}>
        <div ref={$navbar} className={`${styles.navbar} ${utilStyles.bold15X}`}>
          <a href="#header" className={`${styles.navItem}`}>
            <VSCodeStyle text={"Header"} type={"component"} href={"/header"} />
          </a>
          <a href="#project" className={styles.navItem}>
            <VSCodeStyle
              text={"Project"}
              type={"component"}
              href={"/project"}
            />
          </a>
          <a href="#skill" className={styles.navItem}>
            <VSCodeStyle text={"Skill"} type={"component"} href={"/skill"} />
          </a>
          <a href="#footer" className={styles.navItem}>
            <VSCodeStyle text={"Footer"} type={"component"} href={"/footer"} />
          </a>
        </div>
      </div>

      {/** main container */}
      <div id="container">
        <div
          data-anchor="header"
          id="page-1"
          style={{
            backgroundColor: "darkseagreen",
          }}
        >
          <Header />
        </div>
        <div
          data-anchor="project"
          id="page-2"
          style={{
            backgroundColor: "peachpuff",
          }}
        >
          <Project />
        </div>
        <div
          data-anchor="skill"
          id="page-3"
          style={{
            backgroundColor: "cornflowerblue",
          }}
        >
          <Skill />
        </div>
        <div
          data-anchor="footer"
          id="page-4"
          style={{
            backgroundColor: "lightpink",
          }}
        >
          <Footer />
        </div>

        {/* <div
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
        </div> */}
      </div>
    </>
  );
}
