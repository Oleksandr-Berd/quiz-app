import { useContext } from "react";

import * as SC from "./SharedLayoutStyled";

import bgMobileDark from "../../assets/images/pattern-background-mobile-dark.svg";
import bgMobileLight from "../../assets/images/pattern-background-mobile-light.svg";

import Header from "../Header/Header";
import ThemeContext from "../../context/themeContext";

type Props = {
  children: React.ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);



  return (
    <SC.SharedLayoutStyled
      bg={theme === "light" ? bgMobileLight : bgMobileDark}
    >
      <Header />
      {children}
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
