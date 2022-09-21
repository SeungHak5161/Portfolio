import Image from "next/image";
import { useState, useEffect } from "react";
// components
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/project.module.css";
// library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProjectData } from "../library/getData";

export default function test({}) {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    console.log(props);
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#000",
          // background: "red"
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#000",
          // background: "green",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,
    // centerPadding: "100px",
    // variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const projectData = getProjectData();

  return (
    <>
      {/* <div className={utilstyles.bold15X}>project</div> */}
      <section className={styles.mainWrapper}>
        {/* <ProjectCard project={projectData[0]} />; */}
        <Slider {...settings} className={styles.swiperWrapper}>
          {/* {projectData.map((e) => {
            <projectCard project={e} />;
          })} */}
          <ProjectCard project={projectData[0]} />
          <ProjectCard project={projectData[1]} />
          <ProjectCard project={projectData[2]} />
          <ProjectCard project={projectData[3]} />
          <ProjectCard project={projectData[4]} />
          <ProjectCard project={projectData[5]} />
        </Slider>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   const allProjectsData = getProjectData();
//   return {
//     props: {
//       allProjectsData,
//     },
//   };
// }
