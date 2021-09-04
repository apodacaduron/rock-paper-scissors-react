import { FC, useState } from "react";
import Rules from "../components/Rules/Rules";

const Home: FC = () => {
  const [rulesVisible, setRulesVisible] = useState(true);

  const onHideRules = () => {
    setRulesVisible(false)
  }

  return (
    <div>
      {rulesVisible && <Rules onHide={onHideRules} />}
    </div>
  );
};

export default Home;
