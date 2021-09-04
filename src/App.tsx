import { FC, useState } from "react";
import ScoreContext from "./lib/ScoreContext";
import Home from "./pages";

const App: FC = () => {
  const [score, setScore] = useState(0);
  const updateScore = (value: number) => {
    setScore(value);
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
