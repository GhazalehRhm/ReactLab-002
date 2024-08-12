import { useNavigate } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

import "./index.css";

const StartPage = () => {

  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/question");
  };


  return (
    <>
      <div className="titleContainer">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p className="title">The React Quiz</p>
      </div>
      <div className="content-container">
        <h2 className="title-des">Welcome to the React Quiz!</h2>
        <p className="description">15 questions to test your react mastery</p>
        <button onClick={gotToNewPage} className="button">
          Let's Start
        </button>
        
      </div>
    </>
  );
};

export default StartPage;
