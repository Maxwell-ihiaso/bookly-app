import React from "react";
// const data = [
//   {
//     author: {
//       firstname: "",
//       lastname: "",
//       othername: "",
//     },
//     books: [
//       {
//         topic: "",
//         title: "",
//         imageUrl: "",
//         audio: "",
//       },
//     ],
//   },
// ];

const Card = ({
  imageUrl = "onboarding2.png",
  title = "Book Title",
  author = "author name",
  ...rest
}) => {
  return (
    <div className="card-group" {...rest}>
      <div className="card-image-container">
        <img src={imageUrl} alt="title" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Card;
