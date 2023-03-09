import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Score from "./Components/Score";

function App() {
  const [clickedCardIdArr, setClickedCardIdArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  const addToClickedCardIdArr = (clickedCardObjId) => {
    setClickedCardIdArr([...clickedCardIdArr, clickedCardObjId]);
  };

  const calculateCurrentScore = () => {
    setCurrentScore(clickedCardIdArr.length);
  };

  // calculate current score when there is a change in the clickedCardIdArr state
  useEffect(() => {
    calculateCurrentScore();
  }, [clickedCardIdArr]);

  return (
    <div className="App">
      <Score currentScore={currentScore} />
      <Cards addToClickedCardIdArr={addToClickedCardIdArr} />
    </div>
  );
}

export default App;
