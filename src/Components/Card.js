import PropTypes from "prop-types";

const Card = ({ obj, shuffleCards }) => {
  return (
    <div onClick={shuffleCards}>
      <img src={obj.imgPath} alt={obj.text} width="100" height="100" />
      <p>{obj.text}</p>
    </div>
  );
};

Card.propTypes = {
  obj: PropTypes.object.isRequired,
  shuffleCards: PropTypes.func.isRequired,
};

export default Card;
