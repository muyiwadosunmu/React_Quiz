import PropTypes from "prop-types";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.any,
};
export default Question;
