import React from "react";

const Alert = ({ text, border = "none", type = "danger", col = "white" }) => {
  const styles = {
    color: col,
    background: type === "danger" ? "red" : type === "success" && "green",
    border: border,
    position: "absolute",
    top: "3rem",
    zIndex: "2",
    cursor: "text",
    transform: "none",
  };
  return (
    <button style={styles} className="btn">
      {text}
    </button>
  );
};

export default Alert;
