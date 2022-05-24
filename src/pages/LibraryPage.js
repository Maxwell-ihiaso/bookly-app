import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
/**
 *
 * Books data to display - books are movie name
 */

import books from "../MOCK_DATA.json";
/**
 *
 * displays all the books from an API
 */
const LibraryPage = () => {
  const [searchTerm, setSearchTerms] = useState("");
  const navigate = useNavigate();
  return (
    <main className="contain library">
      <Header type="homepage" />
      <h1>my books</h1>
      <Input
        type="text"
        placeholder="Search Books or Author..."
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      <div className="book">
        {books
          .filter((book) => {
            if (searchTerm === "") return book;
            return book.books.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((book) => (
            <Card
              key={book.id}
              title={
                book.books.length > 51
                  ? `${book.books.slice(0, 51)}...`
                  : book.books
              }
              fname={book.first_name}
              lname={book.last_name}
              onClick={(id) => navigate(`/library/${book.id}`)}
            />
          ))}
      </div>
    </main>
  );
};

export default LibraryPage;
