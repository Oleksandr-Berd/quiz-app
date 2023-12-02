import styled from "@emotion/styled";

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;

  background-color: ${props => props.theme.color.itemBg};

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  & > h3 {
    margin-top: 11px;
    margin-left: 16px;

    font-family: "RubicMedium";
    font-size: 18px;

    color: ${props => props.theme.color.text};
  }
`;
