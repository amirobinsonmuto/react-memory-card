import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ addToClickedCardIdArr }) => {
  const [cardArr, setCardArr] = useState([
    { id: 1, text: "Shiba Inu", imgPath: "/images/1.png" },
    { id: 2, text: "Golden Retriever", imgPath: "/images/2.png" },
    { id: 3, text: "Doberman", imgPath: "/images/3.png" },
    { id: 4, text: "Beagle", imgPath: "/images/4.png" },
    { id: 5, text: "American Eskimo", imgPath: "/images/5.png" },
    { id: 6, text: "Miniature Pinscher", imgPath: "/images/6.png" },
    { id: 7, text: "Labrador", imgPath: "/images/7.png" },
    { id: 8, text: "Scottish Terrier", imgPath: "/images/8.png" },
    { id: 9, text: "French Bulldog", imgPath: "/images/9.png" },
    { id: 10, text: "Bull Terrier", imgPath: "/images/10.png" },
    { id: 11, text: "Dalmatian", imgPath: "/images/11.png" },
    { id: 12, text: "Boston Terrier", imgPath: "/images/12.png" },
  ]);

  const shuffleCards = () => {
    let cardArrCopy = [...cardArr];
    let currentIndex = cardArrCopy.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cardArrCopy[currentIndex], cardArrCopy[randomIndex]] = [
        cardArrCopy[randomIndex],
        cardArrCopy[currentIndex],
      ];
    }

    setCardArr(cardArrCopy);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="cards">
      {cardArr.map((obj) => (
        <Card
          key={obj.id}
          obj={obj}
          shuffleCards={shuffleCards}
          addToClickedCardIdArr={addToClickedCardIdArr}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  addToClickedCardIdArr: PropTypes.func.isRequired,
};

export default Cards;
