import { useRef, useState } from "react";
import ResultModal from "./ResultsModal";

export default function TimerChallenge({ tittle, targetTime }) {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const timeRemaining = useRef();
  const setTimeRemaining = useRef();
  const timer = useRef();
  const modal = useRef();
  let result = useRef();

  function handleStartTimer() {
    setIsTimerStarted(true);
    timeRemaining.current = targetTime*1000;
    setTimeRemaining.current = setInterval(() => {
      timeRemaining.current=(timeRemaining.current-10);
    }, 10);

    timer.current = setTimeout(() => {
      modal.current.open();
      clearInterval(setTimeRemaining.current);
      result.current='You Lost';
      setIsTimerStarted(false);
    }, targetTime * 1000);

  }

  function handleStopTimer() {
    let score = (((targetTime-(timeRemaining.current/1000)) / targetTime)*100).toFixed(0);
    result.current=`Your Score ${score}`;
    modal.current.open();
    clearInterval(setTimeRemaining.current);
    clearTimeout(timer.current);
    setIsTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={modal} targetTime={targetTime} timeRemaining={timeRemaining.current} result={result.current} />
      <section className="challenge">
        <h2>{tittle}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={isTimerStarted ? handleStopTimer : handleStartTimer}>
          {isTimerStarted ? "Stop Timer" : "Start Challenge"}
        </button>
        <p className={isTimerStarted ? "active" : undefined}>
          {isTimerStarted ? "Time is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
