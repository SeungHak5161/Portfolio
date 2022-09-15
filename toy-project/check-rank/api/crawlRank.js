export default async function eplRank({ id, option }) {
  const url =
    "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/";
  const headers = { "X-Auth-Token": "d9760c70f8ab4cd8a93883383c336793" };

  const myRequest = new Request(`${url}competitions/${id}/${option}`, {
    method: "GET",
    headers: headers,
    // mode: "no-cors",
  });
  const res = await fetch(myRequest)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
