import { Suspense, useContext } from "react";
import { Dna } from "react-loader-spinner";

import * as SC from "./SharedLayoutStyled";

import bgMobileDark from "../../assets/images/pattern-background-mobile-dark.svg";
import bgMobileLight from "../../assets/images/pattern-background-mobile-light.svg";

import bgTabletDark from "../../assets/images/pattern-background-tablet-dark.svg"
import bgTabletLight from "../../assets/images/pattern-background-tablet-light.svg"

import Header from "../Header/Header";
import ThemeContext from "../../context/themeContext";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  children: React.ReactNode;
  chosenTopic: { icon: string; title: string } | null;
};

const SharedLayout: React.FC<Props> = ({ children, chosenTopic}) => {
  const { theme } = useContext(ThemeContext);

const isTablet = useMediaQuery("(min-width:768px)")

  return (
    <>
      {isTablet ? (
        <SC.SharedLayoutStyled
          bg={theme === "light" ? bgTabletLight : bgTabletDark}
        >
          <Suspense
            fallback={
              <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            }
          ></Suspense>
          <Header chosenTopic={chosenTopic} />
          {children}
        </SC.SharedLayoutStyled>
      ) : (
        <SC.SharedLayoutStyled
          bg={theme === "light" ? bgMobileLight : bgMobileDark}
        >
          <Suspense
            fallback={
              <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            }
          ></Suspense>
          <Header chosenTopic={chosenTopic} />
          {children}
        </SC.SharedLayoutStyled>
      )}
    </>
  );
};

export default SharedLayout;
