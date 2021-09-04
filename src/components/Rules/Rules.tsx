import { FC } from "react";
import "./Rules.scss";
import { ReactComponent as RulesIllustration } from "../../assets/image-rules.svg";
import CloseButton from "../CloseButton/CloseButton";

interface IRules {
  onHide: () => void
}

const Rules: FC<IRules> = (props) => {
  return (
    <div className="rules">
      <div className="rules__container">
        <div className="rules__container__title">
          Rules <CloseButton className="icon-close" onClick={props.onHide} />
        </div>
        <div className="rules__container__illustration">
          <RulesIllustration />
        </div>
        <CloseButton className="icon-close" onClick={props.onHide} />
      </div>
      <div className="rules__dark-overlay"></div>
    </div>
  );
};

export default Rules;
