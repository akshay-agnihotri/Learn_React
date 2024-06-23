import quizCompleteImg from "../assets/quiz-complete.png";

function Summary({ userAnswer }) {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="skip">skip</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="skip">correct</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="skip">incorrect</span>
        </p>
      </div>
      <ol>
        <li>
          <h3>2</h3>
          <p className="question">question-text</p>
          <p className="user-answer">user's answer</p>
        </li>
      </ol>
    </div>
  );
}

export default Summary;
