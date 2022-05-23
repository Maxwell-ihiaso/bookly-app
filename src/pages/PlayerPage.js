import React from "react";
import {
  // useParams,
  useNavigate,
} from "react-router-dom";
import Header from "../components/Header";
import Image from "../components/Image";
import Content from "../components/Content";
import Audio from "../components/Audio";

const PlayerPage = () => {
  // const { bookId } = useParams();
  const navigate = useNavigate();

  //   do some serach to filter with bookID
  // rendered the filterd book with the necessary file info
  return (
    <main className="contain player">
      <Header type="detail" navigate={navigate} />
      <Image />
      <Content header="book title" body="author name" />
      <Audio />
    </main>
  );
};

export default PlayerPage;
