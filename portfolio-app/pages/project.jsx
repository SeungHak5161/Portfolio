import Image from "next/image";
import { useState, useEffect } from "react";
// components
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";
import VSCodeStyle from "../components/VSCodeStyle";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/project.module.css";
// library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css?after";
import { getProjectData } from "../library/getData";

export default function about({}) {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1150,
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
    <Layout>
      <section className={styles.mainWrapper}>
        {/* <div className={utilstyles.bold15X}>project</div> */}
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
    </Layout>
  );
}
