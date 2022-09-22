import Layout from "../components/layout";
import Image from "next/image";
// css
import utilstyles from "../styles/utils.module.css";
import styles from "../styles/header.module.css";
import VSCodeStyle from "../components/VSCodeStyle";
import { useState, useRef, useEffect } from "react";

export default function about() {
  // const introduce = {
  //   name: "백승학",
  //   age: "26",
  //   objective: "Front-end developer",
  // };
  const introduceText = useRef({ innerText: "" });
  // let [testText, setTestText] = useState("");
  // useEffect(() => {
  //   console.log("useEffect : " + introduceText.current);
  // }, [introduceText.current]);
  const introduce = ["백승학", "26", "Front-end developer"];

  const wait = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  const typying = async () => {
    const $text = introduceText.current;
    for (let i in introduce) {
      const letter = introduce[i].split("");
      while (letter.length) {
        await wait(100);
        $text.innerText += letter.shift();
        console.log(introduceText.current);
      }
      await wait(1000);
    }
  };
  typying();
  return (
    <Layout>
      {/* <div className={styles.}></div> */}
      <div className={styles.mainWrapper}>
        <div className={utilstyles.bold15X}>header</div>

        <div className={styles.myPhoto}>
          <Image
            src={"/images/증명사진.jpg"}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles.introduce}>
          {/* <div className={styles.}>
              
            </div>       */}
          <VSCodeStyle type={"Object"} text={["const", "SeungHak"]} />
          <span useref={introduceText} style={{ color: "#69cdfb" }}>
            {introduceText.current.innerText}
          </span>
        </div>
      </div>
    </Layout>
  );
}
