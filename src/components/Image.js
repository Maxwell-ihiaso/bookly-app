import React from "react";

const Image = ({ imgUrl = "onboarding1.png" }) => {
  const styles = {
    backgroundImage: `url(${imgUrl})`,
  };
  return <div style={styles} className="image-group"></div>;
};

export default Image;
