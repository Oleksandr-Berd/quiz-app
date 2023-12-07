import Form from "react-bootstrap/Form";

import * as SC from "./HeaderStyled";

import moonDark from "../../assets/images/icon-moon-dark.svg";
import moonLight from "../../assets/images/icon-moon-light.svg";
import sunDark from "../../assets/images/icon-sun-dark.svg";
import sunLight from "../../assets/images/icon-sun-light.svg";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";

type Props = {
  chosenTopic: {
    icon: string;
    title: string
  } | null;
};

const Header: React.FC<Props> = ({ chosenTopic }) => {
  const { theme, toggle } = useContext(ThemeContext);


let iconColor;

switch (chosenTopic?.title) {
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

  const toggleTheme = () => {
    toggle(theme);
  };

  return (
    <SC.HeaderStyled flex={chosenTopic ? "space-between" : "flex-end"}>
      {chosenTopic ? (
        <SC.TopicCon>
          <SC.IconWrapper bg={iconColor}>
            <img src={chosenTopic.icon} alt="icon" />
          </SC.IconWrapper>
          <SC.TopicTitle>{chosenTopic.title}</SC.TopicTitle>
        </SC.TopicCon>
      ) : null}
      <SC.SwitchCon>
        <img src={theme === "light" ? sunDark : sunLight} alt="sun" />
        <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
            onClick={toggleTheme}
          />
        </Form>
        <img src={theme === "light" ? moonDark : moonLight} alt="moon" />
      </SC.SwitchCon>
    </SC.HeaderStyled>
  );
};

export default Header;
