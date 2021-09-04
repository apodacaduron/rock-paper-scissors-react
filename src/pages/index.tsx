import { FC, useState } from "react";
import Header from "../components/Header";
import PickButton from "../components/PickButton/PickButton";
import Rules from "../components/Rules";

const Home: FC = () => {
  const [rulesVisible, setRulesVisible] = useState(true);

  const onHideRules = () => {
    setRulesVisible(false)
  }

  return (
    <div>
      {rulesVisible && <Rules onHide={onHideRules} />}
      <Header />
      <PickButton pick="rock" sm />
      <PickButton pick="paper" />
      <PickButton pick="scissors" />
    </div>
  );
};

export default Home;
