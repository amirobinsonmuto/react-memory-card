import PropTypes from "prop-types";

const Card = ({ obj, shuffleCards, addToClickedCardIdArr }) => {
  const onClick = () => {
    addToClickedCardIdArr(obj.id);
    shuffleCards();
  };

  return (
    <div className="card" onClick={onClick}>
      <img
        src={process.env.PUBLIC_URL + obj.imgPath}
        alt={obj.text}
        // width="200"
        // height="300"
      />
    </div>
  );
};

Card.propTypes = {
  obj: PropTypes.object.isRequired,
  shuffleCards: PropTypes.func.isRequired,
};

export default Card;
