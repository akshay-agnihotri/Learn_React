import QUESTIONS from "../questions";
import { useRef } from "react";

function Question({
  answerState,
  setAnswerState,
  activeQuestionIndex,
  setUserAnswers,
}) {
  const shuffledAnswers = useRef(null);
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  function handleSelectAnswer(answer) {
    setAnswerState((prvAnswerState) => {
      return { state: "answered", answer: answer };
    });

    setTimeout(() => {
      if (QUESTIONS[activeQuestionIndex].answers[0] === answer) {
        setAnswerState((prvAnswerState) => {
          return { ...prvAnswerState, state: "correct", answer: answer };
        });
      } else {
        setAnswerState((prvAnswerState) => {
          return { ...prvAnswerState, state: "wrong", answer: answer };
        });
      }
    }, 1000);

    setTimeout(() => {
      setAnswerState({ state: "unanswered", answer: "" });
      shuffledAnswers.current = null;
      setUserAnswers((prvUserAnswer) => {
        return [...prvUserAnswer, answer];
      });
    }, 1500);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClasses = "";

        if (answerState.answer === answer && answerState.state === "answered") {
          cssClasses = "selected";
        } else if (
          answerState.answer === answer &&
          (answerState.state === "correct" || answerState.state === "wrong")
        ) {
          cssClasses = answerState.state;
        }

        return (
          <li key={answer} className="answer">
            <button
              disabled={
                answerState.state !== "unanswered" &&
                answerState.answer !== answer
              }
              className={cssClasses}
              onClick={() => handleSelectAnswer(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Question;