import PropTypes from "prop-types";

const Score = ({ currentScore }) => {
  return (
    <div>
      <p>Current Score: {currentScore}</p>
    </div>
  );
};

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default Score;
