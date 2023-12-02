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
    margin-top: 11px;
    margin-left: 16px;

    text-decoration: none;

    font-family: "RubicMedium";
    font-size: 18px;

    color: ${(props) => props.theme.color.text};
  }
`;
