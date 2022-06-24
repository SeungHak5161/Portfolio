import "./Style/main.css";
import { useEffect, useState } from "react";
import MainApp from "./Component/MainApp";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <header>
        <p>Header Section</p>
      </header>
      <main className="main">
        <article id="description-article">
          <p id="description-p">
            당신은 앞으로 <b>10년간 지하실</b>에서 생활하게 되며, <b>10년</b>을
            버티게 되면 <b>100억</b>을 받을 수 있습니다.
            <br />
            식수, 침대, 화장실, 세면시설, 쓰레기 처리장치만이 기본적으로
            제공되며, <b>30포인트</b>로 추가적인 물건이나 시설을 제공받을 수
            있습니다.
            <br />(<b>10억</b>을 포기할 때 마다 <b>1포인트</b>를 더 얻을 수
            있습니다.)
          </p>
        </article>
        <section id="main-app">
          <MainApp data={data} onClick={() => {}} />
          <section id="control-bar"></section>
        </section>
      </main>
    </div>
  );
}

export default App;
