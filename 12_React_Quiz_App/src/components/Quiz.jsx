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
          setAnswerState={setAnswerState}
          setUserAnswers={setUserAnswers}
          activeQuestionIndex={activeQuestionIndex}
        />
      </div>
    </div>
  );
}

export default Quiz;