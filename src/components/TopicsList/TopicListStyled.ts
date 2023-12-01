import styled from "@emotion/styled";

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;

  background-color: #3b4d66;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  & > h3 {
    font-family: "RubicMedium";
    font-size: 18px;

    color: #fff;
  }
`;
