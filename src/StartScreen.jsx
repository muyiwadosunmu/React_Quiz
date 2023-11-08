import PropTypes from "prop-types";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

StartScreen.propTypes = {
  numQuestions: PropTypes.number,
  dispatch: PropTypes.func,
};
export default StartScreen;
