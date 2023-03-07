import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [allCardsArr, setAllCardsArr] = useState([
    { id: 1, text: "Description 1", imgPath: "../images/1.png" },
    { id: 2, text: "Description 2", imgPath: "../images/2.png" },
    { id: 3, text: "Description 3", imgPath: "../images/3.png" },
    { id: 4, text: "Description 4", imgPath: "../images/4.png" },
    { id: 5, text: "Description 5", imgPath: "../images/5.png" },
    { id: 6, text: "Description 6", imgPath: "../images/6.png" },
    { id: 7, text: "Description 7", imgPath: "../images/7.png" },
    { id: 8, text: "Description 8", imgPath: "../images/8.png" },
  ]);
  return (
    <div>
      {allCardsArr.map((obj) => (
        <Card obj={obj} />
      ))}
    </div>
  );
};

export default Cards;
