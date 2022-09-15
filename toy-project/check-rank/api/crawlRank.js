export default async function eplRank({ id, option }) {
  const url =
    "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/";
  const headers = { "X-Auth-Token": "d9760c70f8ab4cd8a93883383c336793" };

  /** get foot-ball data */
  const fetching = async ({ others }) => {
    const myRequest = new Request(`${url}competitions/${id}/${others}`, {
      method: "GET",
      headers: headers,
    });
    const res = await fetch(myRequest)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  };

  switch (option) {
    case "standings":
      const res = await fetching({ others: "standings" });
      const standings = res.standings[0].table;
      const teamRank = [];
      for (let i in standings) {
        teamRank.push(standings[i].team.name);
      }
      return teamRank;
  }
}
