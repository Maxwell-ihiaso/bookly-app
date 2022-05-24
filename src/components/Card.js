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
  fname = "first name",
  lname = "last name",
  ...rest
}) => {
  return (
    <div className="card-group" {...rest}>
      <div className="card-image-container">
        <img src={imageUrl} alt="title" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          {fname} {lname}
        </p>
      </div>
    </div>
  );
};

export default Card;
