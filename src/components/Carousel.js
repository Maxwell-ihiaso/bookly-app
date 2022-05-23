import React from "react";

const Carousel = ({ n = 3, active = 0 }) => {
  const styles = {
    container: {
      width: `calc(24px * ${n})`,
    },
  };

  const divs = [...Array(n).keys()];
  return (
    <div style={styles.container} className="carousel-group">
      {divs.map((nDiv, i) => (
        <div key={i} className={`carousel ${active === i && "active"}`}></div>
      ))}
    </div>
  );
};

export default Carousel;
