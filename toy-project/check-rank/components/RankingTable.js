import styles from "styles/component.module.css";
import utilStyles from "styles/utils.module.css";
import { mapping, SH, WJ, JS, TG } from "data/data.js";
// import { Image } from "next/image";

import { useEffect, useState } from "react";

export default function RankingTable ({ data }) {
  const [shCorrect, setShCorrect] = useState(0);
  const [wjCorrect, setWjCorrect] = useState(0);
  const [jsCorrect, setJsCorrect] = useState(0);
  const [tgCorrect, setTgCorrect] = useState(0);

  useEffect(() => {
    let sh = 0;
    let wj = 0;
    let js = 0;
    let tg = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === SH[i].name) {
        sh++;
      }
      if (data[i].name === WJ[i].name) {
        wj++;
      }
      if (data[i].name === JS[i].name) {
        js++;
      }
      if (data[i].name === TG[i].name) {
        tg++;
      }
    }
    setShCorrect(sh);
    setWjCorrect(wj);
    setJsCorrect(js);
    setTgCorrect(tg);
  }, [data]);
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.descriptionWrapper}>
        <div className={`${styles.listDescription} ${utilStyles.bold12X}`}>
          현 순위
        </div>
        <div className={`${styles.listDescription} ${utilStyles.bold12X}`}>
          <div className={styles.correct}>승학 : {shCorrect}</div>
        </div>
        <div className={`${styles.listDescription} ${utilStyles.bold12X}`}>
          <div className={styles.correct}>우진 : {wjCorrect}</div>
        </div>
        <div className={`${styles.listDescription} ${utilStyles.bold12X}`}>
          <div className={styles.correct}>진석 : {jsCorrect}</div>
        </div>
        <div className={`${styles.listDescription} ${utilStyles.bold12X}`}>
          <div className={styles.correct}>태규 : {tgCorrect}</div>
        </div>
      </div>
      <ul className={`${styles.numList} ${utilStyles.bold12X}`}>
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
              <img src={match.src} alt={match.kor} className={styles.itemImg} />
              <span className={styles.itemTxt}>{match.kor}</span>
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
          const realRank = data.find((e) => {
            if (e.name === team.name) {
              return e;
            }
          }) || { position: 0 };
          if (team.position === realRank.position) {
            return (
              <li
                key={match.kor}
                className={`${styles.listItem} ${styles.correctItem}`}
              >
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          } else {
            return (
              <li key={match.kor} className={styles.listItem}>
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          }
        })}
      </ul>

      <ul className={styles.lists}>
        {WJ.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          const realRank = data.find((e) => {
            if (e.name === team.name) {
              return e;
            }
          }) || { position: 0 };
          if (team.position === realRank.position) {
            return (
              <li
                key={match.kor}
                className={`${styles.listItem} ${styles.correctItem}`}
              >
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          } else {
            return (
              <li key={match.kor} className={styles.listItem}>
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          }
        })}
      </ul>

      <ul className={styles.lists}>
        {JS.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          const realRank = data.find((e) => {
            if (e.name === team.name) {
              return e;
            }
          }) || { position: 0 };
          if (team.position === realRank.position) {
            return (
              <li
                key={match.kor}
                className={`${styles.listItem} ${styles.correctItem}`}
              >
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          } else {
            return (
              <li key={match.kor} className={styles.listItem}>
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          }
        })}
      </ul>

      <ul className={styles.lists}>
        {TG.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team.name) {
              return e;
            }
          });
          const realRank = data.find((e) => {
            if (e.name === team.name) {
              return e;
            }
          }) || { position: 0 };
          if (team.position === realRank.position) {
            return (
              <li
                key={match.kor}
                className={`${styles.listItem} ${styles.correctItem}`}
              >
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          } else {
            return (
              <li key={match.kor} className={styles.listItem}>
                <img
                  src={match.src}
                  alt={match.kor}
                  className={styles.itemImg}
                />
                <span className={styles.itemTxt}>{match.kor}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
