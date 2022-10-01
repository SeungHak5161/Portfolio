import { useRef, useEffect } from "react";
// css
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
// component
import VSCodeStyle from "../components/VSCodeStyle";
// libarary

// pages
import Header from "./header";
import About from "./about";
import Project from "./project";
import Skill from "./skill";
import Footer from "./footer";

export default function Home() {
  const containerRef = useRef(null);
  const pageableRef = useRef(null);

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
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
      // 초기 렌더링 시, 해상도 변화시 호출
      onUpdate: (e) => {
        const actived = ($navbar.current.activeNow = e.index);
        $navbar.current.childNodes[actived].classList.add(`${styles.active}`);
      },
      // 페이지 이동 전 호출
      onBeforeStart: (e) => {
        $navbar.current.childNodes[e].classList.remove(`${styles.active}`);
      },
      // 페이지 이동 후 호출
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
          <a href="#about" className={`${styles.navItem}`}>
            <VSCodeStyle text={"About"} type={"component"} href={"/about"} />
          </a>
          <a href="#skill" className={styles.navItem}>
            <VSCodeStyle text={"Skill"} type={"component"} href={"/skill"} />
          </a>
          <a href="#project" className={styles.navItem}>
            <VSCodeStyle
              text={"Project"}
              type={"component"}
              href={"/project"}
            />
          </a>
        </div>
      </div>

      {/** main container */}
      <div id="container">
        <div data-anchor="header" id="page-1">
          <Header />
        </div>
        <div data-anchor="about" id="page-2">
          <About />
        </div>
        <div data-anchor="skill" id="page-3">
          <Skill />
        </div>
        <div data-anchor="project" id="page-4">
          <Project />
        </div>
      </div>
    </>
  );
}
