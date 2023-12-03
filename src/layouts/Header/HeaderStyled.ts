import styled from "@emotion/styled";

type Style = {
  flex: "space-between" | "flex-end";
  bg: string;
};

export const HeaderStyled = styled.header<Partial<Style>>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.flex === "space-between" ? "space-between" : "flex-end"};
  align-items: center;

  padding-top: 28px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const SwitchCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img:first-of-type {
    margin-right: 8px;
  }
`;

export const TopicCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.div<Partial<Style>>`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;

  background-color: ${(props) => props.bg};

  border-radius: 6px;
`;

export const TopicTitle = styled.p`
  margin-top: 11px;
  margin-left: 16px;

  font-family: "RubicMedium";
  font-size: 18px;

  color: ${(props) => props.theme.color.text};
`;
