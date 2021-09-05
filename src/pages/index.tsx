import { FC, useState } from "react";
import Arena from "../components/Arena/Arena";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Rules from "../components/Rules";

const Home: FC = () => {
  const [rulesVisible, setRulesVisible] = useState(
    !Boolean(localStorage.getItem("rules"))
  );

  const onHideRules = () => {
    setRulesVisible(false);
    localStorage.setItem("rules", "false");
  };

  return (
    <>
      {rulesVisible && <Rules onHide={onHideRules} />}
      <Header />
      <Arena />
      <Footer onClick={() => setRulesVisible(true)} />
    </>
  );
};

export default Home;
