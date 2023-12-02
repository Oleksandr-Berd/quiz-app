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




  const toggleTheme = () => {
    toggle(theme);
  };

  return (
    <SC.HeaderStyled>
      {chosenTopic ? (
        <div>
          <img src={chosenTopic.icon} alt="icon" />
          <p>{chosenTopic.title}</p>
        </div>
      ) : null}
      <SC.SwitchCon>
        <img src={theme === "light" ? sunDark : sunLight} alt="sun" />
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            onClick={toggleTheme}
            //   label="Check this switch"
          />
        </Form>
        <img src={theme === "light" ? moonDark : moonLight} alt="moon" />
      </SC.SwitchCon>
    </SC.HeaderStyled>
  );
};

export default Header;
