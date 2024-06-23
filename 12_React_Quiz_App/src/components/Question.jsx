function Question({ answerState, handleSelectAnswer, shuffledAnswers }) {
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
