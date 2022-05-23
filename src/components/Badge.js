import React from "react";

const Badge = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default Badge;
