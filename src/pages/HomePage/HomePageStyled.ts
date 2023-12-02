import styled from "@emotion/styled";


export const CommonCon = styled.div`
padding-top: 32px;
padding-bottom: 251px;
padding-left: 24px;
padding-right: 24px;
`

export const TextCon = styled.div`
margin-bottom: 40px;
`

export const Title = styled.h1`
margin-bottom: 16px;

font-family: "RubicRegular";
font-weight: lighter;
font-size: 40px;

color: ${props => props.theme.color.text};

& > span{
    font-family: "RubicMedium";
}
`

export const Text = styled.p`
  font-size: 14px;
  font-style: italic;
  font-family: "RubicRegular";
  line-height: 1.5;

  color: ${props => props.theme.color.smallText};
`;