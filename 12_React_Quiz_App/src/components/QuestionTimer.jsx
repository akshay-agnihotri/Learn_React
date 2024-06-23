import React, { useEffect, useState, useRef } from "react";

function QuestionTimer({ totalTime, onTimeOut, answerState }) {
  const [remainingTime, setRemainingTime] = useState(10000);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setRemainingTime(10000);
    const interval = setInterval(() => {
      setTimeout(() => clearInterval(interval), 10000);
      setRemainingTime((prvRemainingTime) => prvRemainingTime - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [totalTime, onTimeOut]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      onTimeOut();
    }, totalTime);

    return () => clearTimeout(timeoutRef.current);
  }, [totalTime, onTimeOut]);

  useEffect(() => {
    if (answerState.state === "answered") clearTimeout(timeoutRef.current);
  }, [answerState]);

  return <progress id="question-time" value={remainingTime} max={totalTime} />;
}

export default QuestionTimer;