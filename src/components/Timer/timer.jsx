import { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds, timeOut }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      timeOut();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, 0);
    const seconds = (timeInSeconds % 60).toString().padStart(2, 0);

    return `${minutes}:${seconds}`;
  };

  return formatTime(seconds);
};

export default CountdownTimer;
