import { FC, useState } from "react";
import Header from "../components/Header";
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
    </div>
  );
};

export default Home;
