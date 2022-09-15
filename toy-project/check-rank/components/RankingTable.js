import styles from "../styles/component.module.css";

export default function RankingTable({ data }) {
  data = [
    "Arsenal FC",
    "Manchester City FC",
    "Tottenham Hotspur FC",
    "Brighton & Hove Albion FC",
    "Manchester United FC",
    "Chelsea FC",
    "Liverpool FC",
    "Brentford FC",
    "Leeds United FC",
    "Fulham FC",
    "Newcastle United FC",
    "Southampton FC",
    "AFC Bournemouth",
    "Wolverhampton Wanderers FC",
    "Crystal Palace FC",
    "Everton FC",
    "Aston Villa FC",
    "West Ham United FC",
    "Nottingham Forest FC",
    "Leicester City FC",
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
  console.log(data);
  return (
    <div className={styles.mainWrapper}>
      <ul className={styles.numList}>
        {data.map((team, idx) => {
          return (
            <li key={team} className={styles.numItem}>
              {idx + 1}
            </li>
          );
        })}
      </ul>
      <ul className={styles.list}>
        {data.map((team) => {
          return (
            <li key={team} className={styles.listItem}>
              {team}
            </li>
          );
        })}
      </ul>
      <ul className={styles.list}>
        {SH.map((team) => {
          return (
            <li key={team} className={styles.listItem}>
              {team}
            </li>
          );
        })}
      </ul>
      <ul className={styles.list}>
        {WJ.map((team) => {
          return (
            <li key={team} className={styles.listItem}>
              {team}
            </li>
          );
        })}
      </ul>
      <ul className={styles.list}>
        {JS.map((team) => {
          return (
            <li key={team} className={styles.listItem}>
              {team}
            </li>
          );
        })}
      </ul>
      <ul className={styles.list}>
        {TG.map((team) => {
          return (
            <li key={team} className={styles.listItem}>
              {team}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
