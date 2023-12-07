import styled from "@emotion/styled";


export const CommonCon = styled.div`
  padding-top: 32px;
  padding-bottom: 251px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding-top: 63px;
    padding-bottom: 241px;
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: start;

    padding-top: 99px;
    padding-bottom: 280px;
    padding-left: 140px;
    padding-right: 140px;
  }
`;

export const TextCon = styled.div`
margin-bottom: 40px;

@media (min-width: 768px){
  margin-bottom: 64px;
}

@media (min-width: 1440px){
  width: 485px;

  margin-right: 131px;
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

@media (min-width: 1440px){
  margin-bottom: 48px;
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