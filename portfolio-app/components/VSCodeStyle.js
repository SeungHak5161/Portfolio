import Link from "next/link";
import { forwardRef } from "react";

const VSCodeStyle = ({ text, type, href }) => {
  switch (type) {
    case "component":
      return (
        <span style={{ color: "#808073" }}>
          {`<`}
          <span style={{ color: "#34bcb0" }}>{text}</span>
          {`/>`}
        </span>
      );
  }
};

export default VSCodeStyle;
