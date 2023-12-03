import styled from "@emotion/styled";

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
`;

export const TextWrapper = styled.div`
  margin-bottom: 40px;
`;

export const SmallText = styled.p`
  margin-bottom: 12px;

  font-style: italic;
  font-family: "RubicRegular";
  font-size: 14px;
  line-height: 1.5;

  color: ${(props) => props.theme.color.smallText};
`;

export const Question = styled.h3`
  margin-bottom: 24px;

  font-size: 20px;
  line-height: 1.2;
  font-family: "RubicMedium";

  color: ${(props) => props.theme.color.text};
`;

export const Scale = styled.div<Partial<Style>>`
  height: 16px;

  background: linear-gradient(
    to left,
    rgb(59, 77, 102) ${(props) => props.gradientLeft},
    rgb(167, 41, 245) ${(props) => props.gradient}
  );

  border-radius: 999px;
`;

export const OptionsList = styled.ul`
  padding-left: 0;

  margin-bottom: 12px;
`;

export const OptionItem = styled.li<Partial<Style>>`
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
    props.stressedColor === "stressed" ? "3px solid #A729F5" : "none"};

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Option = styled.p`
  margin-bottom: 0px;
  margin-left: 16px;

  font-size: 18px;
  font-family: "RubicMedium";

  color: ${(props) => props.theme.color.text};
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
    props.stressedColor === "stressed" ? "#fff" : "#626c7f"};
  background-color: ${(props) =>
    props.stressedColor === "stressed" ? "#A729F5" : "#f4f6fa"};

  border-radius: 6px;
`;

export const SubmitButton = styled.button`
  width: 100%;

  padding-top: 19px;
  padding-bottom: 19px;

  text-align: center;

  font-size: 18px;
  font-family: "RubicMedium";

  color: ${(props) => props.theme.color.text};
  background-color: #a729f5;

  border-radius: 12px;
`;

export const ErrorWrapper = styled.div<Partial<Style>>`
  position: absolute;
  bottom: 0;
  left: 0;

  transform: translateX(67px) translateY(-95px);

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
  }
`;
