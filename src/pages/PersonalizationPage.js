import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Content from "../components/Content";
import Input from "../components/Input";
import Image from "../components/Image";
import Alert from "../components/Alert";

const availTopics = [
  {
    topic: "art",
    isPreference: false,
    id: 0,
  },
  {
    topic: "business",
    isPreference: false,
    id: 1,
  },
  {
    topic: "biography",
    isPreference: false,
    id: 2,
  },
  {
    topic: "comedy",
    isPreference: false,
    id: 3,
  },
  {
    topic: "culture",
    isPreference: false,
    id: 4,
  },
  {
    topic: "education",
    isPreference: false,
    id: 5,
  },
  {
    topic: "news",
    isPreference: false,
    id: 6,
  },
  {
    topic: "philosophy",
    isPreference: false,
    id: 7,
  },
  {
    topic: "psychology",
    isPreference: false,
    id: 8,
  },
  {
    topic: "technology",
    isPreference: false,
    id: 9,
  },
  {
    topic: "travel",
    isPreference: false,
    id: 10,
  },
];

const PersonalizationPage = () => {
  /**
   * watch user selection and provide them with a count
   */
  const [totalSelected, setTotalSelected] = useState(0);

  /**
   * show available topics suggestion
   */
  const [topics, setTopics] = useState(availTopics);

  /**
   * advise on whether to display the final
   * Personalization page or not
   */
  const [isSubmit, setIsSubmit] = useState(false);

  /**
   * monitor when alert should come up
   * ALERT acccepts {
   *                  alert: boolean,
   *                  text: string,
   *                  type: 'danger' || "success"
   *                };
   * */
  const [showAlert, setShowAlert] = useState({
    alert: false,
    type: "",
    text: "",
  });
  const navigate = useNavigate();

  const handleTopicsClick = (id) => {
    const updatedTopics = topics.map((data) => {
      if (data.id === id) {
        return { ...data, isPreference: !data.isPreference };
      }
      return data;
    });
    setTopics(updatedTopics);
    const total = updatedTopics.filter(
      (data) => data.isPreference === true
    ).length;
    setTotalSelected(total);
  };

  const handleSubmit = () => {
    if (totalSelected < 3)
      return setShowAlert({
        alert: true,
        type: "danger",
        text: "selected a minimum of 3 Topics",
      });
    localStorage.setItem(
      "preference",
      JSON.stringify(topics.filter((topic) => topic.isPreference))
    );
    setIsSubmit(true);
  };

  /**
   * once alert is active, the useEffect is used
   * to call a timeout to hide the alert
   * Alert is only visible is user tries to submit
   * the PERSONALIZATION with less than 3 topics
   * choose
   */
  useEffect(() => {
    const cancelAlert = setTimeout(() => {
      // ALERT is trigger with an object
      // {alert: boolean, text: string, type: 'danger' || "success"}
      setShowAlert({ alert: false, text: "", type: "" });
    }, 2000);
    return () => clearInterval(cancelAlert);
  }, [showAlert]);

  /**
   * once user has selected a minimum of 3 topics
   * the FINISH page is conditionally rendered
   */
  if (isSubmit)
    return (
      <main className="contain">
        <Image imgUrl={`completePersonalization.png`} />
        <Content
          header="You are ready to go"
          body="Congratulation, any interesting topics will be shortly in your hands"
        />
        <div className="btn-container welcome-btn">
          <Button
            width="100%"
            className="btn"
            text="finish"
            onClick={() => navigate("/library")}
          />
        </div>
      </main>
    );

  return (
    <main className="contain personalization">
      {/*shows an alert is user selectes less 
      than 3 topics for PERSONALIZATION */}
      {showAlert.alert && <Alert type={showAlert.type} text={showAlert.text} />}
      <Content
        textAlign="flex-start"
        header="personalize suggestion"
        body="Choose min. 3 topics you like, we will give you more often that relate to it"
      />
      <Input type="text" placeholder="search topics..." />
      <div className="badge-group">
        {topics.map(({ topic, isPreference, id }) => (
          <Badge
            onClick={() => handleTopicsClick(id)}
            className={`badge ${isPreference && "active"}`}
            key={id}
          >
            {topic}
          </Badge>
        ))}
      </div>
      {/** number of topics selected */}
      <p>{`${totalSelected} ${
        totalSelected === 1 ? "topic" : "topics"
      } selected`}</p>
      <div className="btn-container welcome-btn">
        <Button
          width="100%"
          className="btn"
          text="submit"
          onClick={handleSubmit}
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

export default PersonalizationPage;
