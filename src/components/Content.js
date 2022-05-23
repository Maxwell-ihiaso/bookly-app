import React from "react";

const Content = ({
  textAlign = "center",
  header = "title one",
  body = "Lorem ipsum dolor sit amet la matyame dor sut colondeum.",
}) => {
  const styles = {
    alignItems: textAlign,
  };
  return (
    <article style={styles} className="content-group">
      <h1>{header}</h1>
      <p>{body}</p>
    </article>
  );
};

export default Content;
