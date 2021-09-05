import { FC, useState } from "react";
import ScoreContext from "./lib/ScoreContext";
import Home from "./pages";

const App: FC = () => {
  const [score, setScore] = useState(Number(localStorage.getItem("score")) || 0);
  const updateScore = (value: number) => {
    setScore(value);
    localStorage.setItem("score", value.toString());
  };

  return (
    <ScoreContext.Provider value={{ score, updateScore }}>
      <div className="App">
        <Home />
      </div>
    </ScoreContext.Provider>
  );
};

export default App;
