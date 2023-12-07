import { NavLink } from "react-router-dom";

import * as SC from "./ResultStyled";

type Props = {
  score: number;
  title: string;
  total: number;
  icon: string;
};

const Result: React.FC<Props> = ({ score, title, total, icon }) => {
  let iconColor;

  switch (title) {
    case "HTML":
      iconColor = "#FFF1E9";
      break;
    case "CSS":
      iconColor = "#E0FDEF";
      break;
    case "JavaScript":
      iconColor = "#EBF0FF";
      break;
    case "Accessibility":
      iconColor = "#F6E7FF";
      break;
  }

  return (
    <SC.CommonCon>
      <SC.Title>
        Quiz completed <span>You scored...</span>
      </SC.Title>

      <div>
        <SC.ScoreWrapper>
          <SC.SubTitleWrapper>
            <SC.IconWrapper bg={iconColor}>
              <img src={icon} alt="icon" />
            </SC.IconWrapper>
            <p>{title}</p>
          </SC.SubTitleWrapper>
          <SC.Score>{score}</SC.Score>
          <SC.Total>out of {total}</SC.Total>
        </SC.ScoreWrapper>
        <NavLink to="/">Play Again</NavLink>
      </div>
    </SC.CommonCon>
  );
};

export default Result;
