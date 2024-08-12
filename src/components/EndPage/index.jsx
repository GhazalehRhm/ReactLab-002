import "./index.css";
import reactLogo from "../../assets/react.svg";
import { useLocation, useNavigate } from "react-router-dom";

const EndPage = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/");
  };

  const handlePercentage = (num) => {
   return  ((num * 100) / 280).toFixed();
  };

  return (
    <>
      <div className="end-title-container">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="end-logo-react" />
        </a>
        <p className="end-title">The React Quiz</p>
      </div>
      <div className="end-background-container">
        <p className="end-background">
          <span>you scored </span> <strong>{state.point}</strong> out of 280
          ({handlePercentage(state.point)}%)
        </p>
        <button onClick={gotToNewPage} className="restart-button">
        Restart
      </button>
      </div>
     
    </>
  );
};

export default EndPage;
