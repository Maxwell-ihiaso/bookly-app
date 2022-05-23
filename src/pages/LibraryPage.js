import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

/**
 *
 * displays all the books from an API
 */
const LibraryPage = () => {
  const navigate = useNavigate();
  return (
    <main className="contain library">
      <Header type="homepage" />
      <h1>my books</h1>
      <Input type="text" placeholder="Search Books or Author..." />
      <Card onClick={() => navigate("/library/1")} />
    </main>
  );
};

export default LibraryPage;
