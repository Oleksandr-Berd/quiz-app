import styled from "@emotion/styled";

type Style = {
  bg: string | undefined;
};

export const CommonCon = styled.div`
  padding-top: 32px;
  padding-bottom: 270px;
  padding-left: 24px;
  padding-right: 24px;

  & > a {
    width: 100%;

    display: inline-block;

    padding-top: 19px;
    padding-bottom: 19px;

    text-decoration: none;
    text-align: center;

    font-size: 18px;
    font-family: "RubicMedium";

    background-color: #a729f5;
    color: #fff;

    border-radius: 12px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  font-size: 40px;
  font-family: "RubicRegular";
  font-weight: lighter;
  color: ${(props) => props.theme.color.text};

  & > span {
    font-family: "RubicMedium";
  }
`;

export const ScoreWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;

  margin-bottom: 12px;

  text-align: center;

  background-color: ${(props) => props.theme.color.itemBg};

  border-radius: 12px;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  & > p {
    margin-bottom: 0;
    margin-left: 16px;

    font-size: 18px;
    font-family: "RubicMedium";

    color: ${(props) => props.theme.color.text};
  }
`;

export const IconWrapper = styled.div<Style>`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;

  background-color: ${(props) => props.bg};

  border-radius: 6px;
`;

export const Score = styled.p`
  margin-bottom: 16px;

  font-size: 88px;
  font-family: "RubicMedium";

  color: ${(props) => props.theme.color.text};
`;

export const Total = styled.p`
  margin: 0;

  font-size: 18px;
  font-family: "RubicRegular";

  color: ${(props) => props.theme.color.smallText};
`;
