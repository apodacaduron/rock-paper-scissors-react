import classnames from "classnames";
import React, { FC, useContext, useEffect, useState } from "react";
import { ReactComponent as BGTriangle } from "../../assets/bg-triangle.svg";
import ScoreContext from "../../lib/ScoreContext";
import PickButton from "../PickButton/PickButton";
import "./Arena.scss";

type PickValues = "rock" | "paper" | "scissors";
type WinnerTypes = "player" | "house";

const Arena: FC = () => {
  const {score, updateScore} = useContext(ScoreContext)
  const [pickedValue, setPickedValue] = useState<PickValues>();
  const [houseValue, setHouseValue] = useState<PickValues>("rock");
  const [showPicks, setShowPicks] = useState(false);
  const [winner, setWinner] = useState<WinnerTypes>();
  const houseOptions: PickValues[] = ["rock", "paper", "scissors"];

  useEffect(() => {
    if (!pickedValue) return;

    const randomIdx = Math.floor(Math.random() * houseOptions.length);
    setHouseValue(houseOptions[randomIdx]);

    setTimeout(() => {
      setShowPicks(true);
    }, 2000);

    console.log(houseOptions[randomIdx]);
  }, [pickedValue]);

  const arenaPickerRockClasses = classnames({
    arena__picker: true,
    "arena__picker--choose-rock": !Boolean(pickedValue),
    "arena__picker--hide": Boolean(pickedValue) && "rock" !== pickedValue,
    "arena__picker--player-choice": Boolean(showPicks),
  });
  const arenaPickerPaperClasses = classnames({
    arena__picker: true,
    "arena__picker--choose-paper": !Boolean(pickedValue),
    "arena__picker--hide": Boolean(pickedValue) && "paper" !== pickedValue,
    "arena__picker--player-choice": Boolean(showPicks),
  });
  const arenaPickerScissorsClasses = classnames({
    arena__picker: true,
    "arena__picker--choose-scissors": !Boolean(pickedValue),
    "arena__picker--hide": Boolean(pickedValue) && "scissors" !== pickedValue,
    "arena__picker--player-choice": Boolean(showPicks),
  });
  const arenaPickerHouseClasses = classnames({
    arena__picker: true,
    "arena__picker--house-choice": Boolean(showPicks),
    "arena__picker--hide": !Boolean(showPicks),
  });

  const arenaTriangleClasses = classnames({
    arena__triangle: true,
    "arena__triangle--hide": Boolean(pickedValue),
  });

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
      <PickButton
        className={arenaPickerHouseClasses}
        pick={houseValue}
        disabled
      />
      <BGTriangle className={arenaTriangleClasses} />
    </div>
  );
};

export default Arena;
