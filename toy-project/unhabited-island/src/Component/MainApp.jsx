import React from "react";

export default function MainApp(props) {
  let style = { backgroundColor: "#ff999966" };
  return (
    <>
      <div id="main-app-table">
        <div id="sum-point">총합 : {props.count}</div>
        {props.data.map(({ name, content, point, isChecked }, index) =>
          isChecked ? (
            <div
              style={style}
              className="table-elm"
              key={index}
              data-idx={index}
              onClick={(e) => {
                const idx = parseInt(
                  e.target.closest(".table-elm").dataset.idx
                );
                props.onClick(idx);
              }}
            >
              <img
                className="table-elm-img"
                src={require("../Assets/Images/Photos/" + name + ".png")}
                alt={name}
              />
              <div className="table-elm-point">{point + " Point"}</div>
              <div className="table-elm-content">{content}</div>
            </div>
          ) : (
            <div
              className="table-elm"
              key={index}
              data-idx={index}
              onClick={(e) => {
                const idx = parseInt(
                  e.target.closest(".table-elm").dataset.idx
                );
                props.onClick(idx);
              }}
            >
              <img
                className="table-elm-img"
                src={require("../Assets/Images/Photos/" + name + ".png")}
                alt={name}
              />
              <div className="table-elm-point">{point + " Point"}</div>
              <div className="table-elm-content">{content}</div>
            </div>
          )
        )}
      </div>
    </>
  );
}
