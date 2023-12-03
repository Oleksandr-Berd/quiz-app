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

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  & > a {
    margin-bottom: 0px;
    margin-left: 16px;

    text-decoration: none;

    font-family: "RubicMedium";
    font-size: 18px;

    color: ${(props) => props.theme.color.text};
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
`;