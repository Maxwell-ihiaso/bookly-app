import React from "react";

const Header = ({ type = "homepage", navigate }) => {
  if (type === "detail")
    return (
      <div className="header">
        <div className="header-icon" onClick={() => navigate(-1)}>
          <img src="../left_arrow.png" alt="" aria-label="none" />
        </div>
        <h3>book title</h3>
        <span>. . .</span>
      </div>
    );

  return (
    <div className="header">
      <div>
        <img src="search_logo.png" alt="" aria-label="none" />
      </div>
      <h1>bookly</h1>
    </div>
  );
};

export default Header;
