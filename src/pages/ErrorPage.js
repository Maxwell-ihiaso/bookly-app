import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>404</h1>
      <p>
        The resource you are trying to acceess cannot be found at the moment
      </p>
      <Button text="go to Library" onClick={() => navigate("/library")} />
    </div>
  );
};

export default ErrorPage;
