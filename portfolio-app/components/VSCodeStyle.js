const VSCodeStyle = ({ type, text }) => {
  switch (type) {
    case "component":
      return (
        <span style={{ color: "#738080" }}>
          {`<`}
          <span style={{ color: "#34bcb0" }}>{text}</span>
          {` />`}
        </span>
      );
    // (1)const / (2)name / = {  }
    case "Object":
      return (
        <>
          <span style={{ color: "#3482b9" }}>{`${text[0]} `}</span>
          <span style={{ color: "#69cdfb" }}>{text[1]}</span>
          <span style={{ color: "#c9c785" }}>{` = {  }`}</span>
        </>
      );
  }
};

export default VSCodeStyle;
