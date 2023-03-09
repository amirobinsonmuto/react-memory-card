import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";

function App() {
  const [clickedCardIdArr, setClickedCardIdArr] = useState([1, 2]);

  const addToClickedCardIdArr = (clickedCardObjId) => {
    setClickedCardIdArr([...clickedCardIdArr, clickedCardObjId]);
  };

  return (
    <div className="App">
      <Cards addToClickedCardIdArr={addToClickedCardIdArr} />
    </div>
  );
}

export default App;
