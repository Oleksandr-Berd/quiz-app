import styled from "@emotion/styled";

type Props = {
  bg: string;
}

export const SharedLayoutStyled = styled.main<Props>`
  background-color: ${(props) => props.theme.color.backgroundColor};

  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
`;
