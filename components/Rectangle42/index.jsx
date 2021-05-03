import React from "react";
import "./Rectangle42.css";

function Rectangle42(props) {
  const { className } = props;

  return <div className={`rectangle-42 ${className || ""}`}></div>;
}

export default Rectangle42;
