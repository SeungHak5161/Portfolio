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
        {data.map((team, idx) => {
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
