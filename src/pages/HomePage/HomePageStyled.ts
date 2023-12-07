import styled from "@emotion/styled";


export const CommonCon = styled.div`
padding-top: 32px;
padding-bottom: 251px;
padding-left: 24px;
padding-right: 24px;

@media (min-width: 768px){
  padding-top: 63px;
  padding-bottom: 241px;
  padding-left: 64px;
  padding-right: 64px;
}
`

export const TextCon = styled.div`
margin-bottom: 40px;

@media (min-width: 768px){
  margin-bottom: 64px;
}
`

export const Title = styled.h1`
  margin-bottom: 16px;

  font-family: "RubicRegular";
  font-weight: lighter;
  font-size: 40px;

  color: ${(props) => props.theme.color.text};

  @media (min-width: 768px) {
    font-size: 64px;
  }

  & > span {
    font-family: "RubicMedium";

    @media (min-width: 768px) {
      font-size: 64px;
    }
  }
`;

export const Text = styled.p`
margin-bottom: 0;

  font-size: 14px;
  font-style: italic;
  font-family: "RubicRegular";
  line-height: 1.5;

  color: ${props => props.theme.color.smallText};

  @media (min-width: 768px){
    font-size: 20px;
  }
`;