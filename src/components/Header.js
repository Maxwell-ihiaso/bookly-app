import React from "react";

/**
 * HEADER
 * if on BOOKS page - display header for Home Page
 * if on details page - dusplay header for details
 */
const Header = ({ type = "homepage", navigate, text }) => {
  if (type === "detail")
    return (
      <div className="header">
        <div className="header-icon" onClick={() => navigate(-1)}>
          <img src="../left_arrow.png" alt="" aria-label="none" />
        </div>
        <h3>{text}</h3>
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
