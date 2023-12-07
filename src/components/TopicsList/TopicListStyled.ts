import styled from "@emotion/styled";


export const TopicList = styled.ul`
  padding-left: 0;

  margin-bottom: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;

  background-color: ${(props) => props.theme.color.itemBg};

  border-radius: 12px;

  @media (min-width: 1440px) {
    width: 564px;

    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
  }

  &:not(:last-child) {
    margin-bottom: 12px;

    @media (min-width: 768px) {
      margin-bottom: 24px;

      &:hover{
        cursor: pointer;
      }
    }
  }

  & > a {
    margin-bottom: 0px;
    margin-left: 16px;

    text-decoration: none;

    font-family: "RubicMedium";
    font-size: 18px;

    color: ${(props) => props.theme.color.text};

    @media (min-width: 768px) {
      margin-left: 32px;

      font-size: 28px;
    }
  }
`;

export const IconWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;

  background-color: ${(props) =>
    props.title === "HTML"
      ? "#FFF1E9"
      : props.title === "CSS"
      ? "#E0FDEF"
      : props.title === "JavaScript"
      ? "#EBF0FF"
      : "#F6E7FF"};

  border-radius: 6px;

  @media (min-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (min-width: 1440px) {
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 13px;
    padding-right: 13px;
  }
`;