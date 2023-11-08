import PropTypes from "prop-types";

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next Question
    </button>
  );
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
  answer: PropTypes.any,
};
export default NextButton;
