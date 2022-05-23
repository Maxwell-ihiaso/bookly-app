import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Content from "../components/Content";
import Image from "../components/Image";

const onBoardingData = [
  {
    imgUrl: "../onboarding1.png",
    contentHeader: "title one",
    contentBody: "Lorem ipsum dolor sit amet la matyame dor sut colondeum.",
    pageNumber: 0,
  },
  {
    imgUrl: "../onboarding2.png",
    contentHeader: "title two",
    contentBody: "Lorem ipsum dolor sit amet la matyame dor sut colondeum.",
    pageNumber: 1,
  },
  {
    imgUrl: "../onboarding3.png",
    contentHeader: "title three",
    contentBody: "Lorem ipsum dolor sit amet la matyame dor sut colondeum.",
    pageNumber: 2,
  },
];

const OnBoardingPage = () => {
  /**
   * Get each unique id from the url link "/onboarding/:pageNumber"
   */
  const { pageNumber: paramsNumber } = useParams();
  /**
   * using react-router-dom useNavigate to dynamically
   * route users through the onboarding process.
   */
  const navigate = useNavigate();

  return (
    <main className="contain">
      {/**
       * dynamically rendering onboarding.
       * Checks !!!
       * !- url parameter is a number
       * !- url parameter is non-negative and does not exceed the available number of data
       * !- url parameter is withing the available data
       */}
      {!isNaN(paramsNumber) &&
      Number(paramsNumber) >= 0 &&
      Number(paramsNumber) < onBoardingData.length ? (
        //   filter based on parameter from the url info "/onboarding/:pageNumber"
        // filter returns a new array whiich is the map through
        // and rendered accordingly
        onBoardingData
          .filter((data) => data.pageNumber === Number(paramsNumber))
          .map(({ imgUrl: url, contentBody, contentHeader, pageNumber }) => (
            <React.Fragment key={pageNumber}>
              <Image imgUrl={url} />
              <Content header={contentHeader} body={contentBody} />
              <Carousel n={3} active={pageNumber} />
              <div className="btn-container">
                {/**
                 * Users can skip the onboarding
                 * if user is on the last onboarding page,
                 * hide the skip button
                 * !- disabled sets the display property either "none" or "inline-block"
                 */}
                <Button
                  text={pageNumber < onBoardingData.length - 1 && "skip"}
                  bgCol="#0F0F29"
                  mr="1rem"
                  onClick={() => navigate("/personalization")}
                  disabled={pageNumber >= onBoardingData.length - 1 && "none"}
                />
                {/**
                 * if user is on the last page of onboarding, let button show "FINISH"
                 *
                 **/}
                {pageNumber === onBoardingData.length - 1 ? (
                  <Button
                    text="finish"
                    onClick={() => navigate("/personalization")}
                  />
                ) : (
                  // While user is being onboarded, allow user to be able to go
                  // to the next onboarding screen
                  <Button
                    text="next"
                    onClick={() => navigate(`/onboarding/${pageNumber + 1}`)}
                  />
                )}
              </div>
            </React.Fragment>
          ))
      ) : (
        //   if no parameter is rceived from the url "/onboarding/" render
        // OnBoardingPage with the default data
        <>
          <Image />
          <Content />
          <Carousel n={3} />
          <div className="btn-container">
            <Button
              text="skip"
              bgCol="#0F0F29"
              mr="1rem"
              onClick={() => navigate("/personalization")}
            />
            <Button text="next" onClick={() => navigate(`/onboarding/1`)} />
          </div>
        </>
      )}
    </main>
  );
};

export default OnBoardingPage;
