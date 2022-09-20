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

export default function about({}) {
  // const [projectData, setProjectData] = useState([
  // ]);
  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  const projectData = getProjectData();
  // console.log(projectData);
  // const setState = async () => {
  //   const res = await getProjectData();
  //   console.log([...res]);
  //   setProjectData([...res]);
  //   console.log(projectData);
  // };

  // useEffect(() => {
  //   setState();
  // }, []);

  // useEffect(() => {
  //   console.log(projectData);
  // }, [projectData]);

  // setInterval(() => {
  //   console.log(projectData);
  // }, 1000);

  return (
    <Layout>
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
    </Layout>
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
