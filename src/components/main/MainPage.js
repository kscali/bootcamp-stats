import React from "react";
import "./mainpage.css";
import Typist from "react-typist";

const MainPage = () => {
  return (
    <div>
      <div className="typist-header">
        <Typist avgTypingDelay={70} cursor={{ hideWhenDone: true }}>
          <h1 className="main-header">
            When will I get a job after coding bootcamp?
          </h1>
        </Typist>

        <h1>This is the most common question bootcamp grads ask.</h1>
      </div>
      <div className="faq-section">
        <img
          className="faq"
          src="https://ks-plt.s3-us-west-1.amazonaws.com/bootcamp-stats/conceptual-cube-design-327186.jpg"
          alt="FAQ"
        />
        <div className="content">
          <h2>
            Bootcamp Stats is here to answer many of the questions bootcamp
            grads have after graduation.
          </h2>
          <h2>
            There is often a lack of information on the web about the true
            amount of time it takes to find a job after coding bootcamp.
          </h2>

          <h2>
            We've done the work of aggregating the data from alumni to answer
            all your questions.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
