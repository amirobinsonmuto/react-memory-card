import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Score from "./Components/Score";

function App() {
  const [clickedCardIdArr, setClickedCardIdArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // add cardID to clickedCardIdArr state on button click
  const addToClickedCardIdArr = (clickedCardObjId) => {
    setClickedCardIdArr([...clickedCardIdArr, clickedCardObjId]);
  };

  // Check duplicate and return true or false
  const checkDuplicates = () => {
    return clickedCardIdArr.some((el, index) => {
      const result = clickedCardIdArr.indexOf(el) !== index;
      return result;
    });
  };

  // Reset clickedCardIdArr if there is duplicate
  const resetClickedCardIdArr = () => {
    setClickedCardIdArr([]);
  };

  // CalculateCurrentScore based on duplicate being existed or not
  const calculateCurrentScore = () => {
    if (checkDuplicates()) {
      resetClickedCardIdArr();
      alert("Oops, you had selected that already! Try again.");
    } else {
      setCurrentScore(clickedCardIdArr.length);
    }
  };

  // calculate current store only when clickedCardIdArr has an update
  useEffect(() => {
    calculateCurrentScore();
  }, [clickedCardIdArr]);

  // Update best score method
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
      <p className="footer">
        <a href="https://www.freepik.com/free-vector/asia-food-icon-set_1531439.htm#query=sushi%20cartoon&position=20&from_view=keyword&track=ais">
          Image by macrovector
        </a>{" "}
        on Freepik
      </p>
    </div>
  );
}

export default App;
