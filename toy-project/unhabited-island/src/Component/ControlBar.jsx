import React from "react";

export default function ControlBar(props) {
  return (
    <>
      <div className="control-bar-elm" onClick={() => props.onReset()}>
        <img
          className="control-bar-elm-img"
          src={require("../Assets/Icons/reset.png")}
          alt="reset"
        />
        Reset
      </div>
      <div
        className="control-bar-elm"
        onClick={() => {
          const mainApp = document.getElementById("main-app-table");
          props.onCapture(mainApp);
        }}
      >
        <img
          className="control-bar-elm-img"
          src={require("../Assets/Icons/copy.png")}
          alt="reset"
        />
        Copy
      </div>
    </>
  );
}
