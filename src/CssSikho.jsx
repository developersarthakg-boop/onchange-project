import React from "react";
import "./CssSikho.css";

function CssSikho() {
  const headerStyle = {
    color: "red",
    backgroundColor: "cyan",
  };
  return (
    <div style={{ color: "violet", backgroundColor: "aqua" }}>
      {/* //inline css */}
      <p>Hello Sarthak Pandat ji</p>

      <div style={headerStyle}>
        <p>This isinternal css </p>
      </div>

      <div className="header">
        <p>This is external css </p>
      </div>
    </div>
  );
}

export default CssSikho;
