import { useState } from "react";
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
  const [chosenOption, setChosenOption] = useState<string | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(
    chosenTopic?.questions[0]
  );

  const gradient =
    ((chosenTopic!.questions.indexOf(currentQuestion!) + 1) /
      chosenTopic!.questions.length) *
      100 +
    "%";
  const gradientLeft =
    100 -
    ((chosenTopic!.questions.indexOf(currentQuestion!) + 1) /
      chosenTopic!.questions.length) *
      100 +
    "%";

  const chooseOption = (evt: any) => {
    setChosenOption(evt.currentTarget.getAttribute("data-title"));
  };

  const currentIdx = chosenTopic!.questions.indexOf(currentQuestion!);

  const handleSubmitAnswer = () => {
    setCurrentQuestion(chosenTopic!.questions[currentIdx + 1]);
  };

  return (
    <SC.CommonCon>
      <SC.TextWrapper>
        <SC.SmallText>
          Questions {currentIdx + 1} of {chosenTopic!.questions.length}
        </SC.SmallText>
        <SC.Question>{currentQuestion!.question}</SC.Question>
        <SC.Scale gradient={gradient} gradientLeft={gradientLeft}></SC.Scale>
      </SC.TextWrapper>
      <SC.OptionsList>
        {currentQuestion!.options.map((el, idx) => (
          <SC.OptionItem key={el} data-title={el} onClick={chooseOption}>
            <SC.LetterWrapper>
              {idx === 0
                ? "A"
                : idx === 1
                ? "B"
                : idx === 2
                ? "C"
                : idx === 3
                ? "D"
                : null}
            </SC.LetterWrapper>
            <SC.Option>{el}</SC.Option>
          </SC.OptionItem>
        ))}
      </SC.OptionsList>
      <SC.SubmitButton onClick={handleSubmitAnswer}>
        Submit Answer
      </SC.SubmitButton>
    </SC.CommonCon>
  );
};

export default QuizPage;
