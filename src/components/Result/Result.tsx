import classnames from "classnames";
import React, { FC } from "react";
import "./Result.scss";

interface IResult {
  result?: "player" | "house" | "tie";
  onClick: () => void;
}

const Result: FC<IResult> = (props) => {
  const getResultString = () => {
    switch (props.result) {
      case "player":
        return "YOU WIN";
      case "house":
        return "YOU LOSE";
      case "tie":
        return "IT'S A TIE";
    }
  };

  const resultClasses = classnames({
    result: true,
    "result--hide": !Boolean(props.result),
  });

  return (
    <div className={resultClasses}>
      <div className="result__title">{getResultString()}</div>
      <button onClick={props.onClick}>PLAY AGAIN</button>
    </div>
  );
};

export default Result;
