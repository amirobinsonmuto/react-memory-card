import PropTypes from "prop-types";

const Card = ({ obj, shuffleCards, addToClickedCardIdArr }) => {
  const onClick = (e) => {
    e.preventDefault();
    addToClickedCardIdArr(obj.id);
    shuffleCards();
  };

  return (
    <div className="card" onClick={onClick}>
      <img src={obj.imgPath} alt={obj.text} width="200" height="200" />
      <p>{obj.text}</p>
    </div>
  );
};

Card.propTypes = {
  obj: PropTypes.object.isRequired,
  shuffleCards: PropTypes.func.isRequired,
};

export default Card;
