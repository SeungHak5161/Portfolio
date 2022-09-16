import styles from "../styles/component.module.css";
import { mapping, SH, WJ, JS, TG } from "../data/data.js";

import { useState } from "react";

export default function RankingTable({ data }) {
  const [shCorrect, setShCorrect] = useState(0);
  const [wjCorrect, setWjCorrect] = useState(0);
  const [jsCorrect, setJsCorrect] = useState(0);
  const [tgCorrect, setTgCorrect] = useState(0);
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.listDescription}>현 순위</div>
        <div className={styles.listDescription}>
          <div className={styles.correct}>승학 : {}</div>
        </div>
        <div className={styles.listDescription}>
          <div className={styles.correct}>우진 : {}</div>
        </div>
        <div className={styles.listDescription}>
          <div className={styles.correct}>진석 : {}</div>
        </div>
        <div className={styles.listDescription}>
          <div className={styles.correct}>태규 : {}</div>
        </div>
      </div>
      <ul className={styles.numList}>
        {data.map((team, idx) => {
          return (
            <li key={team.name} className={styles.numItem}>
              {idx + 1}
            </li>
          );
        })}
      </ul>
      <ul className={`${styles.lists} ${styles.nowList}`}>
        {data.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          return (
            <li key={match.kor} className={styles.listItem}>
              {match.kor}
            </li>
          );
        })}
      </ul>

      <ul className={styles.lists}>
        {SH.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          // const realRank = data.find((e) => {
          //   if (e.name === team.name) {
          //     return e;
          //   }
          // }) || { position: 0 };
          // console.log(team.position, realRank.position);
          // if (team.position === realRank.position) {
          //   setShCorrect(shCorrect + 1);
          // }

          return (
            <li key={match.kor} className={styles.listItem}>
              {match.kor}
            </li>
          );
        })}
      </ul>

      <ul className={styles.lists}>
        {WJ.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          return (
            <li key={match.kor} className={styles.listItem}>
              {match.kor}
            </li>
          );
        })}
      </ul>

      <ul className={styles.lists}>
        {JS.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          return (
            <li key={match.kor} className={styles.listItem}>
              {match.kor}
            </li>
          );
        })}
      </ul>

      <ul className={styles.lists}>
        {TG.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          return (
            <li key={match.kor} className={styles.listItem}>
              {match.kor}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
