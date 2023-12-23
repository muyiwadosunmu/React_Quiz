import PropTypes from "prop-types";
import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)} // This condition heps check if answer is provided
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

Progress.propTypes = {
  index: PropTypes.number,
  numQuestions: PropTypes.number,
  points: PropTypes.number,
  maxPossiblePoints: PropTypes.number,
  answer: PropTypes.number,
};

export default Progress;
