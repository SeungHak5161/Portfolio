import styles from "../styles/component.module.css";

export default function RankingTable({ data }) {
  const mapping = [
    { eng: "Arsenal FC", kor: "아스날" },
    { eng: "Manchester City FC", kor: "맨시티" },
    { eng: "Tottenham Hotspur FC", kor: "토트넘" },
    { eng: "Brighton & Hove Albion FC", kor: "브라이튼" },
    { eng: "Manchester United FC", kor: "맨체스터 유나이티드" },
    { eng: "Chelsea FC", kor: "첼시" },
    { eng: "Liverpool FC", kor: "리버풀" },
    { eng: "Brentford FC", kor: "브렌트포드" },
    { eng: "Leeds United FC", kor: "리즈" },
    { eng: "Fulham FC", kor: "풀럼" },
    { eng: "Newcastle United FC", kor: "뉴캐슬" },
    { eng: "Southampton FC", kor: "사우스햄튼" },
    { eng: "AFC Bournemouth", kor: "본머스" },
    { eng: "Wolverhampton Wanderers FC", kor: "울버햄튼" },
    { eng: "Crystal Palace FC", kor: "크리스탈 팰리스" },
    { eng: "Everton FC", kor: "에버튼" },
    { eng: "Aston Villa FC", kor: "아스톤 빌라" },
    { eng: "West Ham United FC", kor: "웨스트햄" },
    { eng: "Nottingham Forest FC", kor: "노팅엄 포레스트" },
    { eng: "Leicester City FC", kor: "레스터 시티" },
  ];
  const SH = [
    "Manchester City FC",
    "Liverpool FC",
    "Tottenham Hotspur FC",
    "Arsenal FC",
    "Chelsea FC",
    "Manchester United FC",
    "Leicester City FC",
    "West Ham United FC",
    "Newcastle United FC",
    "Brighton & Hove Albion FC",
    "Brentford FC",
    "Aston Villa FC",
    "Wolverhampton Wanderers FC",
    "Crystal Palace FC",
    "Leeds United FC",
    "Everton FC",
    "Southampton FC",
    "Nottingham Forest FC",
    "Fulham FC",
    "AFC Bournemouth",
  ];
  const WJ = [
    "Manchester City FC",
    "Liverpool FC",
    "Tottenham Hotspur FC",
    "Arsenal FC",
    "Manchester United FC",
    "Chelsea FC",
    "West Ham United FC",
    "Newcastle United FC",
    "Aston Villa FC",
    "Crystal Palace FC",
    "Leicester City FC",
    "Wolverhampton Wanderers FC",
    "Leeds United FC",
    "Brighton & Hove Albion FC",
    "Brentford FC",
    "Everton FC",
    "Nottingham Forest FC",
    "Fulham FC",
    "Southampton FC",
    "AFC Bournemouth",
  ];
  const JS = [
    "Liverpool FC",
    "Manchester City FC",
    "Arsenal FC",
    "Chelsea FC",
    "Tottenham Hotspur FC",
    "Manchester United FC",
    "Newcastle United FC",
    "West Ham United FC",
    "Leicester City FC",
    "Crystal Palace FC",
    "Leeds United FC",
    "Aston Villa FC",
    "Wolverhampton Wanderers FC",
    "Everton FC",
    "Brighton & Hove Albion FC",
    "Brentford FC",
    "Nottingham Forest FC",
    "Southampton FC",
    "Fulham FC",
    "AFC Bournemouth",
  ];
  const TG = [
    "Manchester City FC",
    "Liverpool FC",
    "Tottenham Hotspur FC",
    "Chelsea FC",
    "Arsenal FC",
    "Manchester United FC",
    "Newcastle United FC",
    "West Ham United FC",
    "Aston Villa FC",
    "Leicester City FC",
    "Crystal Palace FC",
    "Brighton & Hove Albion FC",
    "Wolverhampton Wanderers FC",
    "Everton FC",
    "Leeds United FC",
    "Southampton FC",
    "Brentford FC",
    "Nottingham Forest FC",
    "Fulham FC",
    "AFC Bournemouth",
  ];
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.listDescription}>현 순위</div>
        <div className={styles.listDescription}>현 순위</div>
        <div className={styles.listDescription}>현 순위</div>
        <div className={styles.listDescription}>현 순위</div>
        <div className={styles.listDescription}>현 순위</div>
      </div>
      <ul className={styles.numList}>
        {data.map((team, idx) => {
          return (
            <li key={team} className={styles.numItem}>
              {idx + 1}
            </li>
          );
        })}
      </ul>
      <ul className={`${styles.lists} ${styles.nowList}`}>
        {data.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team) {
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
            if (e.eng === team) {
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
        {WJ.map((team) => {
          const match = mapping.find((e) => {
            if (e.eng === team) {
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
            if (e.eng === team) {
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
            if (e.eng === team) {
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
