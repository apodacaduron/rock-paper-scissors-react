import classnames from "classnames";
import React, { FC, useState } from "react";
import { ReactComponent as BGTriangle } from "../../assets/bg-triangle.svg";
import PickButton from "../PickButton/PickButton";
import "./Arena.scss";

type PickValues = "rock" | "paper" | "scissors";

const Arena: FC = () => {
  const [pickedValue, setPickedValue] = useState<PickValues>();

  const arenaPickerRockClasses = classnames({
    arena__picker: true,
    "arena__picker--choose-rock": !Boolean(pickedValue),
    "arena__picker--hide": Boolean(pickedValue) && 'rock' !== pickedValue,
  });
  const arenaPickerPaperClasses = classnames({
    arena__picker: true,
    "arena__picker--choose-paper": !Boolean(pickedValue),
    "arena__picker--hide": Boolean(pickedValue) && 'paper' !== pickedValue,
  });
  const arenaPickerScissorsClasses = classnames({
    arena__picker: true,
    "arena__picker--choose-scissors": !Boolean(pickedValue),
    "arena__picker--hide": Boolean(pickedValue) && 'scissors' !== pickedValue,
  });

  const arenaTriangleClasses = classnames({
      'arena__triangle': true,
      'arena__triangle--hide': Boolean(pickedValue)
  })

  return (
    <div className="arena">
      <PickButton
        className={arenaPickerRockClasses}
        pick="rock"
        disabled={Boolean(pickedValue)}
        onClick={() => setPickedValue("rock")}
      />
      <PickButton
        className={arenaPickerPaperClasses}
        pick="paper"
        disabled={Boolean(pickedValue)}
        onClick={() => setPickedValue("paper")}
      />
      <PickButton
        className={arenaPickerScissorsClasses}
        pick="scissors"
        disabled={Boolean(pickedValue)}
        onClick={() => setPickedValue("scissors")}
      />
      <BGTriangle className={arenaTriangleClasses} />
    </div>
  );
};

export default Arena;
