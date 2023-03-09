import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Score from "./Components/Score";

function App() {
  const [clickedCardIdArr, setClickedCardIdArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const addToClickedCardIdArr = (clickedCardObjId) => {
    setClickedCardIdArr([...clickedCardIdArr, clickedCardObjId]);
  };

  // CheckDuplicates return true or false
  const checkDuplicates = () => {
    return clickedCardIdArr.some((el, index) => {
      const result = clickedCardIdArr.indexOf(el) !== index;
      return result;
    });
  };

  // CalculateCurrentScore based on duplicate being existed or not
  const calculateCurrentScore = () => {
    checkDuplicates()
      ? setCurrentScore(clickedCardIdArr.length - 1)
      : setCurrentScore(clickedCardIdArr.length);
  };

  useEffect(() => {
    calculateCurrentScore();
  }, [clickedCardIdArr]);

  const updateBestScore = () => {
    if (currentScore >= bestScore) {
      setBestScore(currentScore);
    }
  };

  // Use useEffect so that updateBestScore waits to get
  // executed until the currentScore state is updated
  useEffect(() => {
    updateBestScore();
  }, [currentScore]);

  return (
    <div className="App">
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Cards addToClickedCardIdArr={addToClickedCardIdArr} />
    </div>
  );
}

export default App;
