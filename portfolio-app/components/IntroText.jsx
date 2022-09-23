import { useState } from "react";
import { useEffect } from "react";
export default function IntroText() {
  return (
    <>
      <span style={{ color: "#3482b9" }}>{`const `}</span>
      <span style={{ color: "#69cdfb" }}>{"SeungHak"}</span>
      <span style={{ color: "#c9c785" }}>{` = { `}</span>
      <div style={{ position: "relative", left: "2rem" }}>{content()}</div>
      <span style={{ color: "#c9c785" }}>{` }`}</span>
    </>
  );
}
function content() {
  useEffect(() => {
    typing();
  }, []);

  const [html, setHtml] = useState(``);
  // useEffect(() => {
  //   console.log(html);
  // }, [html]);

  const color = {
    orange: "be5c2d",
    blue: "3482b9",
    skyblue: "69cdfb",
    green: "99ce9b",
    yellow: "c9c785",
    white: "fff",
  };

  const wait = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  const introduce = [
    `name: `,
    `"백승학"`,
    `age: `,
    `26`,
    `objective: `,
    `"Front-end developer"`,
  ];

  const typing = async () => {
    let temp = ["", "", "", "", "", ""];
    for (let i = 0; i < introduce[0].length; i++) {
      temp[0] += introduce[0][i];
      await wait(70);
      setHtml(`<p>${colorSpan(color.skyblue, temp[0], false)}</p>`);
    }
    for (let i = 0; i < introduce[1].length; i++) {
      temp[1] += introduce[1][i];
      await wait(70);
      setHtml(
        `<p>${colorSpan(color.skyblue, temp[0], true)}${colorSpan(
          color.orange,
          temp[1],
          true
        )}</p>`
      );
    }
    setHtml(
      `<p>${colorSpan(color.skyblue, temp[0])}${colorSpan(
        color.orange,
        temp[1]
      )}\,</p>`
    );
    for (let i = 0; i < introduce[2].length; i++) {
      temp[2] += introduce[2][i];
      await wait(70);
      setHtml(
        `<p>${colorSpan(color.skyblue, temp[0])}${colorSpan(
          color.orange,
          temp[1]
        )}\,</p><p>${colorSpan(color.skyblue, temp[2])}</p>`
      );
    }
    for (let i = 0; i < introduce[3].length; i++) {
      temp[3] += introduce[3][i];
      await wait(70);
      setHtml(
        `<p>${colorSpan(color.skyblue, temp[0])}${colorSpan(
          color.orange,
          temp[1]
        )}\,</p>
        <p>${colorSpan(color.skyblue, temp[2])}${colorSpan(
          color.green,
          temp[3]
        )}</p>`
      );
    }
    setHtml(
      `<p>${colorSpan(color.skyblue, temp[0])}${colorSpan(
        color.orange,
        temp[1]
      )}\,</p>
      <p>${colorSpan(color.skyblue, temp[2])}${colorSpan(
        color.green,
        temp[3]
      )}\,</p>`
    );
    for (let i = 0; i < introduce[4].length; i++) {
      temp[4] += introduce[4][i];
      await wait(70);
      setHtml(`<p>${colorSpan(color.skyblue, temp[0])}${colorSpan(
        color.orange,
        temp[1]
      )}\,</p>
      <p>${colorSpan(color.skyblue, temp[2])}${colorSpan(
        color.green,
        temp[3]
      )}\,</p><p>${colorSpan(color.skyblue, temp[4])}`);
    }
    for (let i = 0; i < introduce[5].length; i++) {
      temp[5] += introduce[5][i];
      await wait(50);
      setHtml(`<p>${colorSpan(color.skyblue, temp[0])}${colorSpan(
        color.orange,
        temp[1]
      )}\,</p>
      <p>${colorSpan(color.skyblue, temp[2])}${colorSpan(
        color.green,
        temp[3]
      )}\,</p><p>${colorSpan(color.skyblue, temp[4])}${colorSpan(
        color.orange,
        temp[5]
      )}</p>`);
    }
    setHtml(`<p>${colorSpan(color.skyblue, temp[0])}${colorSpan(
      color.orange,
      temp[1]
    )}\,</p>
    <p>${colorSpan(color.skyblue, temp[2])}${colorSpan(
      color.green,
      temp[3]
    )}\,</p><p>${colorSpan(color.skyblue, temp[4])}${colorSpan(
      color.orange,
      temp[5]
    )}\,</p>`);
  };

  const colorSpan = (colorCode, innerThings, inline) => {
    return `<span style="color:#${colorCode};${
      inline ? "display:inline" : ""
    }">${innerThings}</span>`;
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}
