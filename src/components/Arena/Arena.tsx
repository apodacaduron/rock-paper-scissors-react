import classnames from "classnames";
import React, { FC, useContext, useEffect, useState } from "react";
import { ReactComponent as BGTriangle } from "../../assets/bg-triangle.svg";
import ScoreContext from "../../lib/ScoreContext";
import PickButton from "../PickButton/PickButton";
import Result from "../Result/Result";
import "./Arena.scss";

type PickValues = "rock" | "paper" | "scissors";
type ResultType = "player" | "house" | "tie";

const Arena: FC = () => {
  const { score, updateScore } = useContext(ScoreContext);
  const [pickedValue, setPickedValue] = useState<PickValues>();
  const [houseValue, setHouseValue] = useState<PickValues>("rock");
  const [showPicks, setShowPicks] = useState(false);
  const [result, setResult] = useState<ResultType>();
  const houseOptions: PickValues[] = ["rock", "paper", "scissors"];

  const winningConditions: Record<string, PickValues[]> = {
    paper: ["paper", "rock"],
    rock: ["rock", "scissors"],
    scissors: ["scissors", "paper"],
  };

  const chooseWinner = (houseVal: PickValues) => {
    if (!pickedValue || !houseVal) return;
    if (pickedValue === houseVal) return setResult("tie");

    const result = Object.keys(winningConditions).find((key) =>
      winningConditions[key].every(
        (value) => value === pickedValue || value === houseVal
      )
    );

    if (houseValue === result) {
      setResult("house");
      updateScore(score - 1)
    } else {
      setResult("player");
      updateScore(score + 1)
    }
  };

  useEffect(() => {
    if (!pickedValue) return;

    const randomIdx = Math.floor(Math.random() * houseOptions.length);
    setHouseValue(houseOptions[randomIdx]);

    setTimeout(() => {
      setShowPicks(true);
      chooseWinner(houseOptions[randomIdx]);
    }, 2000);

    console.log(houseOptions[randomIdx]);
  }, [pickedValue]);

  const playAgain = () => {
    setShowPicks(false);
    setPickedValue(undefined);
    setResult(undefined);
  }

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
      <Result result={result} onClick={playAgain} />
      <BGTriangle className={arenaTriangleClasses} />
    </div>
  );
};

export default Arena;
