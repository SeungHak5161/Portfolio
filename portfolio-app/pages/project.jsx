import Image from "next/image";
import { useState, useEffect } from "react";
// components
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";
// css
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
        breakpoint: 1750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1250,
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
        <Slider {...settings} className={styles.swiperWrapper}>
          <ProjectCard project={projectData[0]} />
          <ProjectCard project={projectData[1]} />
          <ProjectCard project={projectData[2]} />
          <ProjectCard project={projectData[3]} />
          <ProjectCard project={projectData[4]} />
        </Slider>
      </section>
    </Layout>
  );
}
