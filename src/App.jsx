import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import EndPage from "./components/EndPage";

function App() {
  return (
    <>
      <button className="btn"
        onClick={() => {
          const element = document.querySelector("html");
          if (element.getAttribute("data-theme") === "light")
            element.setAttribute("data-theme", "dark");
          else element.setAttribute("data-theme", "light");
        }}
        type="button"
        data-theme-toggle
        aria-label="Change to light theme"
      >
        Change mode
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<QuizPage />} />
          <Route path="/endPage" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
