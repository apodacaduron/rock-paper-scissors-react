import { FC } from "react";
import ScoreContext from "./lib/ScoreContext";
import Home from "./pages";

const App: FC = () => {
  return <ScoreContext.Provider value={0}><div className="App"><Home /></div></ScoreContext.Provider>;
}

export default App;
