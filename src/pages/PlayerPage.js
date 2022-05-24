import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Image from "../components/Image";
import Content from "../components/Content";
import Audio from "../components/Audio";
/**
 *
 * Books data to display - Boks are movie names
 */

import books from "../MOCK_DATA.json";

const PlayerPage = () => {
  const { bookId } = useParams();
  console.log(typeof bookId);
  const navigate = useNavigate();

  //   do some serach to filter with bookID
  // rendered the filterd book with the necessary file info
  return (
    <>
      {books
        .filter((book) => book.id === Number(bookId))
        .map((book) => (
          <main className="contain player" key={book.id}>
            <Header
              type="detail"
              navigate={navigate}
              text={
                book.books.length > 20
                  ? `${book.books.slice(0, 20)}...`
                  : book.books
              }
            />
            <Image imgUrl="../onboarding3.png" />
            <Content
              header={book.books}
              body={`${book.first_name} ${book.last_name}`}
            />
            <Audio />
          </main>
        ))}
    </>
  );
};

export default PlayerPage;
