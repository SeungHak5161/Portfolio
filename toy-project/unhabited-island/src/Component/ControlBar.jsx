import React from "react";

export default function ControlBar(props) {
  return (
    <>
      <div id="control-bar-container">
        <div className="control-bar-elm">count : {props.count}</div>
        <div className="control-bar-elm" onClick={() => props.onReset()}>
          reset
        </div>
        <div className="control-bar-elm">capture</div>
      </div>
    </>
  );
}
