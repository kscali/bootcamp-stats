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
      <div>
        <img src="" alt="FAQ" />
      </div>
    </div>
  );
};

export default MainPage;
