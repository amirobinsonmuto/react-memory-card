const Card = ({ obj }) => {
  return (
    <div>
      <img src={obj.imgPath} alt={obj.text} width="100" height="100" />
      <p>{obj.text}</p>
    </div>
  );
};

export default Card;
