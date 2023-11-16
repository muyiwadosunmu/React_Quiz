import { PropTypes } from "prop-types";

function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "Medal";
  if (percentage >= 80 && percentage < 100) emoji = "Happy";
  if (percentage >= 50 && percentage < 80) emoji = "Tried";
  if (percentage >= 0 && percentage < 50) emoji = "Sit up";
  if (percentage === 0) emoji = "You can try again";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}

FinishScreen.propTypes = {
  points: PropTypes.number,
  maxPossiblePoints: PropTypes.number,
  highscore: PropTypes.number,
};

export default FinishScreen;
