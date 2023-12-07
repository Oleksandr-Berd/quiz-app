import styled from "@emotion/styled";

type Style = {
  bg: string | undefined;
};

export const CommonCon = styled.div`
  padding-top: 32px;
  padding-bottom: 270px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }

  & a {
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

    @media (min-width: 768px) {
      padding-top: 32px;
      padding-bottom: 32px;

      font-size: 28px;

      border-radius: 24px;
    }

    @media (min-width: 1440px) {
      border-radius: 24px;
      transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        background-color: #a729f5;
        filter: sepia(60%);

        transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
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

  @media (min-width: 768px) {
    margin-bottom: 64px;

    font-size: 64px;
  }

  @media (min-width: 1440px) {
    width: 450px;

    margin-right: 143px;
  }
`;

export const ScoreWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;

  margin-bottom: 12px;

  text-align: center;

  background-color: ${(props) => props.theme.color.itemBg};

  border-radius: 12px;

  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 48px;

    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    width: 564px;

    padding-left: 156px;
    padding-right: 156px;

    border-radius: 24px;
  }
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

    @media (min-width: 768px) {
      margin-left: 24px;

      font-size: 28px;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const IconWrapper = styled.div<Style>`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;

  background-color: ${(props) => props.bg};

  border-radius: 6px;

  @media (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 13px;
    padding-right: 13px;

    border-radius: 8px;
  }
`;

export const Score = styled.p`
  margin-bottom: 16px;

  font-size: 88px;
  font-family: "RubicMedium";

  color: ${(props) => props.theme.color.text};

  @media (min-width: 768px) {
    font-size: 144px;
  }
`;

export const Total = styled.p`
  margin: 0;

  font-size: 18px;
  font-family: "RubicRegular";

  color: ${(props) => props.theme.color.smallText};

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.5;
  }
`;
