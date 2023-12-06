import { Suspense, useContext } from "react";
import { Dna } from "react-loader-spinner";

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
      <Suspense fallback={<Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />}></Suspense>
      <Header chosenTopic={chosenTopic} />
      {children}
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
