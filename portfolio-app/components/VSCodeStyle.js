const VSCodeStyle = ({ text, type, href }) => {
  switch (type) {
    case "component":
      return (
        <span style={{ color: "#738080" }}>
          {`<`}
          <span style={{ color: "#34bcb0" }}>{text}</span>
          {` />`}
        </span>
      );
  }
};

export default VSCodeStyle;
