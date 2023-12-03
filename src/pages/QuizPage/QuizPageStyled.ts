import styled from "@emotion/styled";

type Style = {
  gradient: string;
  gradientLeft: string;
};

export const CommonCon = styled.div`
padding-top: 32px;
padding-left: 24px;
padding-right: 24px;
`

export const TextWrapper = styled.div`
margin-bottom: 40px;
`

export const SmallText = styled.p`
margin-bottom: 12px;

font-style: italic;
font-family: "RubicRegular";
font-size: 14px;
line-height: 1.5;

color: ${props => props.theme.color.smallText};
`

export const Question = styled.h3`
margin-bottom: 24px;

font-size: 20px;
line-height: 1.2;
font-family: "RubicMedium";

color: ${props => props.theme.color.text};
`

export const Scale = styled.div<Style>`
  height: 16px;

  background: linear-gradient(
    to left,
    rgb(59, 77, 102) ${props => props.gradientLeft},
    rgb(167, 41, 245) ${(props) => props.gradient}
  );

  border-radius: 999px;
`;

export const OptionsList = styled.ul`
padding-left: 0;

margin-bottom: 12px;
`

export const OptionItem = styled.li`
display: flex;
flex-direction: row;
align-items: center;

height: 64px;

padding-top: 12px;
padding-bottom: 12px;
padding-left: 12px;

background-color: ${props => props.theme.color.itemBg};

border-radius: 12px;

&:not(:last-child){
    margin-bottom: 12px;
}
`

export const Option = styled.p`
margin-top: 11px;
margin-left: 16px;

font-size: 18px;
font-family: "RubicMedium";

color: ${props => props.theme.color.text}
`

export const LetterWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;

  width: 40px;
  height: 40px;

font-size: 18px;
font-family: "RubicMedium";

  color: #626c7f;
  background-color: #f4f6fa;

  border-radius: 6px;
`;