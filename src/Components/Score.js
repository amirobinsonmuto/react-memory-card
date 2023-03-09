import PropTypes from "prop-types";

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="score">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default Score;
