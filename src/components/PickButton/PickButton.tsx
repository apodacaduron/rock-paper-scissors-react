import React, { ButtonHTMLAttributes, FC } from "react";
import { ReactComponent as Rock } from "../../assets/icon-rock.svg";
import { ReactComponent as Paper } from "../../assets/icon-paper.svg";
import { ReactComponent as Scissors } from "../../assets/icon-scissors.svg";
import classnames from 'classnames'
import './PickButton.scss'

interface IPickButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  pick: "rock" | "paper" | "scissors";
  sm?: boolean;
  highlight?: boolean;
}

const PickButton: FC<IPickButton> = ({ pick = 'rock', sm = false, highlight = false, ...props }) => {
  const getIcon = () => {
    switch (pick) {
      case "rock":
        return <Rock />;
      case "paper":
        return <Paper />;
      case "scissors":
        return <Scissors />;
      default:
        return <Rock />;
    }
  };

  const pickButtonClasses = classnames({
      'pick-button': true,
      [`pick-button--${pick}`]: true,
      'pick-button--sm': Boolean(sm),
  })

  return (
    <button {...props}>
      <div className={pickButtonClasses}>
        <div className="pick-button__icon">{getIcon()}</div>
      </div>
      <div className={`circle ${highlight ? 'expand-sm' : ''}`} />
      <div className={`circle ${highlight ? 'expand-md' : ''}`} />
      <div className={`circle ${highlight ? 'expand-lg' : ''}`} />
    </button>
  );
};

export default PickButton;
