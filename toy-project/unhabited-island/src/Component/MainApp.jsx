import React from "react";

export default function MainApp(props) {
  const data = props.data;
  const onClick = props.onClick;
  return (
    <>
      {/* {data.map(({ name }, index) => (
        <div className="table-elm" data-idx={index}>
          {name}
        </div>
      ))} */}
      <div id="main-app-table">
        {/* <thead></thead> */}
        {data.map(({ name, img, point }, index) => (
          <div
            className="table-elm"
            key={index}
            data-idx={index}
            onClick={() => {
              onClick();
            }}
          >
            <img src={img} alt={""} />
            <div className="table-elm-point">{point + " Point"}</div>
            <div className="table-elm-name">{name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
