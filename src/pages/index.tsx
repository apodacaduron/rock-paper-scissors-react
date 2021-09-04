import { FC, useState } from "react";
import Arena from "../components/Arena/Arena";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Rules from "../components/Rules";

const Home: FC = () => {
  const [rulesVisible, setRulesVisible] = useState(true);

  const onHideRules = () => {
    setRulesVisible(false);
  };

  return (
    <div>
      {rulesVisible && <Rules onHide={onHideRules} />}
      <Header />
      <Arena />
      <Footer onClick={() => setRulesVisible(true)} />
    </div>
  );
};

export default Home;
