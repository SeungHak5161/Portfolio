import "./Style/main.css";
import { useEffect, useState } from "react";
import MainApp from "./Component/MainApp";
import { dataList } from "./data.js";
import ControlBar from "./Component/ControlBar";
import html2canvas from "html2canvas";

function App() {
  const [data, setData] = useState(dataList);
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setReset(false);
    setData([
      {
        name: "microwave",
        content: "전자레인지, 전자레인지용 식품(편의점 냉동칸 수준)",
        point: "2",
        isChecked: false,
      },
      {
        name: "fastfood",
        content: "패스트푸드 프렌차이즈 음식",
        point: "4",
        isChecked: false,
      },
      {
        name: "kitchen",
        content: "모든 조리기구, 레시피 그리고 최상의 식재료",
        point: "5",
        isChecked: false,
      },
      {
        name: "dining",
        content: "세계 최고의 셰프가 만드는 음식이 매일 공수됨",
        point: "7",
        isChecked: false,
      },
      {
        name: "cloth",
        content: "기본적인 의복(속옷 포함)",
        point: "1",
        isChecked: false,
      },
      {
        name: "ceiling",
        content: "채광이 들어오는 천장",
        point: "2",
        isChecked: false,
      },
      {
        name: "bath",
        content: "각종 위생용품, 스파 시설",
        point: "3",
        isChecked: false,
      },
      {
        name: "suzy",
        content: "당신을 사랑해주는 완벽한 이상형",
        point: "18",
        isChecked: false,
      },
      {
        name: "TV",
        content: "52인치짜리 TV, 모든 채널(OTT 불가능)",
        point: "7",
        isChecked: false,
      },
      {
        name: "movie",
        content:
          "빔프로젝터, 현존하는 모든 영화와 TV 프로그램\n(10년간 업데이트 X)",
        point: "4",
        isChecked: false,
      },
      {
        name: "computer",
        content: "최고 사양으로 유지되는 PC, 온라인 게임(소통 불가능)",
        point: "6",
        isChecked: false,
      },
      {
        name: "console",
        content: "최신형으로 유지되는 콘솔, 모든 1인용 콘솔 게임",
        point: "4",
        isChecked: false,
      },
      {
        name: "internet",
        content:
          "적당한 사양의 PC, 인터넷(유튜브, 채팅 등 가능 / 영화같은 컨텐츠는 검열됨)",
        point: "16",
        isChecked: false,
      },
      {
        name: "soundsystem",
        content: "완벽한 음향 시스템, 현존하는 모든 음반\n(10년간 업데이트 X)",
        point: "4",
        isChecked: false,
      },
      {
        name: "fitness",
        content: "웨이트 기구, 런닝머신, 농구 골대가 제공되는 운동방",
        point: "5",
        isChecked: false,
      },
      {
        name: "library",
        content: "현존하는 모든 도서가 있는 도서관\n(10년간 업데이트 X)",
        point: "4",
        isChecked: false,
      },
      {
        name: "alchol",
        content: "무제한 주류",
        point: "5",
        isChecked: false,
      },
      {
        name: "drug",
        content: "무제한 마약",
        point: "5",
        isChecked: false,
      },
      {
        name: "cigarette",
        content: "무제한 담배",
        point: "4",
        isChecked: false,
      },
      {
        name: "lego",
        content: "모든 조립완구(레고, 과학상자 등)",
        point: "2",
        isChecked: false,
      },
      {
        name: "tool",
        content: "모든 공구, 재료, 작업실",
        point: "6",
        isChecked: false,
      },
      {
        name: "doctor",
        content: "죽지만 않을 정도의 치료를 제공하는 의사",
        point: "2",
        isChecked: false,
      },
      {
        name: "medicalcare",
        content: "주기적인 건강검진과 최상의 치료를 제공하는 의료진",
        point: "4",
        isChecked: false,
      },
      {
        name: "billiard",
        content: "당구대",
        point: "1",
        isChecked: false,
      },
      {
        name: "pool",
        content: "수영장",
        point: "2",
        isChecked: false,
      },
      {
        name: "greenhouse",
        content: "온실 속 정원",
        point: "2",
        isChecked: false,
      },
      {
        name: "stock",
        content: "돈 미리 받고 주식투자 가능",
        point: "7",
        isChecked: false,
      },
      {
        name: "dog",
        content: "애완동물",
        point: "6",
        isChecked: false,
      },
      {
        name: "smartphone",
        content: "일주일에 딱 하루만 작동하는 스마트폰",
        point: "4",
        isChecked: false,
      },
      {
        name: "radio",
        content: "위성 라디오",
        point: "2",
        isChecked: false,
      },
    ]);
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
        </section>
      </main>
    </div>
  );
}

export default App;
