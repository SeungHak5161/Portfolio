import "./Style/main.css";
import { useEffect, useState } from "react";
import MainApp from "./Component/MainApp";
import { dataList } from "./data.js";
import ControlBar from "./Component/ControlBar";
import _ from "lodash";
import html2canvas from "html2canvas";

function App() {
  const initialData = _.cloneDeep(dataList);
  useEffect(() => {});
  const [data, setData] = useState(dataList);
  const [count, setCount] = useState(parseInt(0));
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setReset(false);
    setData(initialData);
    setCount(0);
  }, [reset]);
  return (
    <div className="App">
      <header>
        <p></p>
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
          <MainApp
            data={data}
            count={count}
            onClick={(idx) => {
              const newData = data;
              let point = count;
              if (newData[idx].isChecked) {
                newData[idx].isChecked = !newData[idx].isChecked;
                point -= parseInt(newData[idx].point);
                setCount(point);
                setData(newData);
              } else {
                newData[idx].isChecked = !newData[idx].isChecked;
                point += parseInt(newData[idx].point);
                setCount(point);
                setData(newData);
              }
            }}
          />
          <section id="control-bar">
            <ControlBar
              data={data}
              onReset={() => {
                setReset(true);
              }}
              onCapture={($el) => {
                html2canvas($el).then((canvas) => {
                  canvas.toBlob(
                    async (blob) =>
                      await navigator.clipboard.write([
                        new window.ClipboardItem({ "image/png": blob }),
                      ])
                  );
                  alert("클립보드에 복사되었습니다.");
                });
              }}
            />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
