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
const game = () => {
  const containerRef = useRef(null);
  const linearProgressBarRef = useRef(null);
  const pageableRef = useRef(null);

  const loadPageable = async () => {
    const Pageable = (await import("pageable")).default;
    const pageable = new Pageable(containerRef.current, {});
    pageableRef.current = pageable;
  };

  useEffect(() => {
    containerRef.current = document.getElementById("container");
    loadPageable();
  }, []);

  return (
    <div id="container">
      <div
        data-anchor="page-1"
        id="page-1"
        className="pg-page"
        style={{
          backgroundColor: "peachpuff",
        }}
      ></div>

      <div
        data-anchor="page-2"
        className="pg-page"
        style={{
          backgroundColor: "cornflowerblue",
        }}
      ></div>
      <div
        data-anchor="page-3"
        className="pg-page"
        style={{
          backgroundColor: "bisque",
        }}
      ></div>
      <div
        data-anchor="page-4"
        className="pg-page"
        style={{
          backgroundColor: "mediumaquamarine",
        }}
      ></div>
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
  );
};

export default game;
