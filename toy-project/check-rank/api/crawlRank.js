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
    try {
      const res = await fetch(myRequest);
      console.log("try to fetch");
      if (!res.ok) {
        console.log("res is not ok");
        throw new Error("Response Error");
      } else {
        console.log("res is ok");
        return res.json();
      }
    } catch (err) {
      alert(err);
    }
  };

  switch (option) {
    case "standings":
      const res = await fetching({ others: "standings" });
      const standings = res.standings[0].table;
      const teamRank = [];
      for (let i in standings) {
        const dict = {
          position: standings[i].position,
          name: standings[i].team.name,
        };
        teamRank.push(dict);
      }
      return teamRank;
  }
}
