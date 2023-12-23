import PropTypes from "prop-types";
import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, numQuestions, index } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
  answer: PropTypes.any,
  numQuestions: PropTypes.number,
  index: PropTypes.number,
};
export default NextButton;
