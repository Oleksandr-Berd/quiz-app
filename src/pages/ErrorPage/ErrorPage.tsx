import * as SC from "./ErrorPageStyled";

type Props = {
  message: string;
};

const ErrorPage: React.FC<Props> = ({ message }) => {
  return (
    <SC.ErrorStyled>
      <h1>{message}</h1>
    </SC.ErrorStyled>
  );
};

export default ErrorPage;
