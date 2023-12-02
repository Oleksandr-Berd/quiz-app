import { useContext } from "react";

import * as SC from "./SharedLayoutStyled";

import bgMobileDark from "../../assets/images/pattern-background-mobile-dark.svg";
import bgMobileLight from "../../assets/images/pattern-background-mobile-light.svg";

import Header from "../Header/Header";
import ThemeContext from "../../context/themeContext";

type Props = {
  children: React.ReactNode;
  chosenTopic: { icon: string; title: string } | null;
};

const SharedLayout: React.FC<Props> = ({ children, chosenTopic}) => {
  const { theme } = useContext(ThemeContext);



  return (
    <SC.SharedLayoutStyled
      bg={theme === "light" ? bgMobileLight : bgMobileDark}
    >
      <Header chosenTopic={chosenTopic} />
      {children}
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
