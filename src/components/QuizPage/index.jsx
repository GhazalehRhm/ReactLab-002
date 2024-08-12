import "./index.css";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
import { QUESTIONS } from "../../questions";
import CountdownTimer from "../Timer/timer";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [point, setPoint] = useState(0);

  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/endPage", { state: { point } });
  };

  const handleClick = () => {
    if (selected === QUESTIONS[step].correctOption) {
      setPoint(point + QUESTIONS[step].points);
    }
    setSelected(-1);
    step < QUESTIONS.length - 1 ? setStep(step + 1) : gotToNewPage();
  };

  return (
    <>
      <div className="question-title-container">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo-react-quiz" alt="React logo" />
        </a>
        <p className="questionTitle">The React Quiz</p>
      </div>
      <div className="quiz-content-container">
        <p className="question-title-des">{QUESTIONS[step].question}</p>
        <ul className="question-container">
          {QUESTIONS[step].options.map((option, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <button
                className={
                  "question-button" +
                  (selected > -1 && QUESTIONS[step].correctOption === index
                    ? " correct"
                    : selected > -1
                    ? " uncorrect"
                    : "")
                }
                onClick={() => setSelected(index)}
              >
                {option}
              </button>
            );
          })}
        </ul>
        <div className="next-btn-container">
          <button className="timer-button ">
            {<CountdownTimer initialSeconds={600} timeOut={gotToNewPage} />}
          </button>
          <button onClick={handleClick} className="next-button">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default QuizPage;
