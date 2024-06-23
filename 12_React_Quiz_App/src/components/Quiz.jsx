import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Question from "./Question.jsx";

function Quiz() {
  const [answerState, setAnswerState] = useState({
    state: "unanswered",
    answer: "",
  });
  const [userAnswers, setUserAnswers] = useState([]);
  const shuffledAnswers = useRef(null);

  const handleTimeOut = useCallback(() => {
    setUserAnswers((prvUserAnswer) => {
      return [...prvUserAnswer, null];
    });
  }, [userAnswers]);

  let activeQuestionIndex = userAnswers.length;
  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

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
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          totalTime={10000}
          onTimeOut={handleTimeOut}
          answerState={answerState}
        />
        <h2 id="questions">{QUESTIONS[activeQuestionIndex].text}</h2>
        <Question
          answerState={answerState}
          handleSelectAnswer={handleSelectAnswer}
          shuffledAnswers={shuffledAnswers}
        />
      </div>
    </div>
  );
}

export default Quiz;