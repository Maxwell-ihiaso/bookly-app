import React from "react";

const Button = ({
  text,
  width = "140px",
  border = "none",
  mr = "",
  col = "white",
  bgCol = "#4838D1",
  disabled = "inline-block",
  onClick = () => console.log("button clicked"),
}) => {
  const styles = {
    color: col,
    background: bgCol,
    display: disabled,
    width: width,
    border: border,
    marginRight: mr,
  };

  return (
    <button onClick={onClick} style={styles} className="btn">
      {text}
    </button>
  );
};

export default Button;
