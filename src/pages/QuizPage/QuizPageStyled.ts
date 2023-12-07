import styled from "@emotion/styled";
import ProgressBar from "react-bootstrap/ProgressBar";

type Style = {
  gradient: string;
  gradientLeft: string;
  visibility: string;
  stressedColor: string;
};

export const CommonCon = styled.div`
  position: relative;

  padding-top: 32px;
  padding-bottom: 139px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding-top: 49px;
    padding-bottom: 129px;
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const SmallText = styled.p`
  margin-bottom: 12px;

  font-style: italic;
  font-family: "RubicRegular";
  font-size: 14px;
  line-height: 1.5;

  color: ${(props) => props.theme.color.smallText};

  @media (min-width: 768px) {
    margin-bottom: 27px;

    font-size: 20px;
  }
`;

export const Question = styled.h3`
  margin-bottom: 24px;

  font-size: 20px;
  line-height: 1.2;
  font-family: "RubicMedium";

  color: ${(props) => props.theme.color.text};

  @media (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 36px;
  }
`;

export const Scale = styled(ProgressBar)`
  &&& {
    background-color: #3b4d66;
    border-radius: 999px;
  }

  &&& > div {
    background-color: #a729f5;
  }
`;

export const OptionsList = styled.ul`
  padding-left: 0;

  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const OptionItem = styled.li<Partial<Style>>`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  height: 64px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;

  background-color: ${(props) => props.theme.color.itemBg};

  border-radius: 12px;
  border: ${(props) =>
    props.stressedColor === "stressed"
      ? "3px solid #A729F5"
      : props.stressedColor === "wrong"
      ? "3px solid #EE5454"
      : props.stressedColor === "correct"
      ? "3px solid #26D782"
      : "none"};

  @media (min-width: 768px) {
    height: 80px;
  }

  &:not(:last-child) {
    margin-bottom: 12px;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  & > img {
    position: absolute;
    top: 0;
    right: 0;

    /* transform: translateX(-8px) translateY(10px); */
    transform: translateX(-25%) translateY(25%);
  }
`;

export const Option = styled.p`
  max-width: 60%;

  margin-bottom: 0px;
  margin-left: 16px;

  font-size: 18px;
  font-family: "RubicMedium";

  color: ${(props) => props.theme.color.text};

  @media (min-width: 768px) {
    margin-left: 32px;

    font-size: 28px;
  }
`;

export const LetterWrapper = styled.div<Partial<Style>>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  font-size: 18px;
  font-family: "RubicMedium";

  color: ${(props) =>
    props.stressedColor === "stressed" ||
    props.stressedColor === "wrong" ||
    props.stressedColor === "correct"
      ? "#fff"
      : "#626c7f"};
  background-color: ${(props) =>
    props.stressedColor === "stressed"
      ? "#A729F5"
      : props.stressedColor === "wrong"
      ? "#EE5454"
      : props.stressedColor === "correct"
      ? " #26D782"
      : "#f4f6fa"};

  border-radius: 6px;

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;

    font-size: 28px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;

  padding-top: 19px;
  padding-bottom: 19px;

  text-align: center;

  font-size: 18px;
  font-family: "RubicMedium";

  color: #fff;
  background-color: #a729f5;

  border-radius: 12px;

  @media (min-width: 768px){
    padding-top: 32px;
    padding-bottom: 32px;

    font-size: 28px;
  }
`;

export const ErrorWrapper = styled.div<Partial<Style>>`
  position: absolute;
  bottom: 0;
  left: 0;

  transform: translateX(226px) translateY(-59px);

  display: flex;
  flex-direction: row;
  align-items: center;

  visibility: ${(props) =>
    props.visibility === "hidden" ? "hidden" : "visible"};

  & > p {
    margin-bottom: 0;
    margin-left: 8px;

    font-size: 18px;
    font-family: "RubicRegular";

    color: ${(props) => props.theme.color.text};

    @media (min-width: 768px){
        font-size: 24px;
        line-height: 1.5;
    }
  }
`;
