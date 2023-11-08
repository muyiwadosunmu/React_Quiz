import PropTypes from "prop-types";
import Options from "./Options";
function Question({ question, dispatch, answer, points }) {
  console.log(question, question.options);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.any,
  points: PropTypes.number,
};
export default Question;
