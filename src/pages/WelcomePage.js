import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Content from "../components/Content";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="contain welcome">
      <h3>welcome !</h3>
      <p>Find what you are looking for</p>
      <Content
        textAlign="left"
        header=""
        body="By personalizing your account, we can help you to find what you like."
      />
      <div className="btn-container welcome-btn">
        <Button
          width="100%"
          className="btn"
          text="personalize you account"
          onClick={() => navigate("/personalization")}
        />
        <Button
          width="100%"
          className="btn"
          border="1px solid #FFFFFF"
          text="skip"
          bgCol="inherit"
          onClick={() => navigate("/library")}
        />
      </div>
    </main>
  );
};

export default WelcomePage;
