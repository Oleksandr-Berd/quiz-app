import * as SC from "./QuizPageStyled";

type T = {
  question: string;
  options: [];
};

type Props = {
  chosenTopic: {
    questions: Array<T>;
  } | null;
};

const QuizPage: React.FC<Props> = ({ chosenTopic }) => {
  if (!chosenTopic) {
    return <div></div>;
  }

  const { questions } = chosenTopic;

  let currentQuestion = questions[0];

  const gradient =
    ((questions.indexOf(currentQuestion) + 1) / questions.length) * 100 + "%";
  const gradientLeft =
    100 -
    ((questions.indexOf(currentQuestion) + 1) / questions.length) * 100 +
    "%";

  return (
    <SC.CommonCon>
      <SC.TextWrapper>
        <SC.SmallText>Questions 1 of {questions.length}</SC.SmallText>
        <SC.Question>{currentQuestion.question}</SC.Question>
        <SC.Scale gradient={gradient} gradientLeft={gradientLeft}></SC.Scale>
      </SC.TextWrapper>
      <SC.OptionsList>
        {currentQuestion.options.map((el, idx) => (
          <SC.OptionItem key={el}>
            <SC.LetterWrapper>
              {idx === 0 ? "A" : idx === 1 ? "B" : idx === 2 ? "C" : idx === 3 ? "D" : null}
            </SC.LetterWrapper>
            <SC.Option>{el}</SC.Option>
          </SC.OptionItem>
        ))}
      </SC.OptionsList>
    </SC.CommonCon>
  );
};

export default QuizPage;
