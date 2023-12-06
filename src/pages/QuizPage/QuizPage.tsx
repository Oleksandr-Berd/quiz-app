import { useState } from "react";
import * as SC from "./QuizPageStyled";
import error from "../../assets/images/icon-error.svg";
import Result from "../../components/Result/Result";

type T = {
  question: string;
  options: [];
  answer: string;
};

type Props = {
  chosenTopic: {
    questions: Array<T>;
    title: string;
    icon: string;
  } | null;
};

const QuizPage: React.FC<Props> = ({ chosenTopic }) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [chosenOption, setChosenOption] = useState<string | null>(null);
  const [correct, setCorrect] = useState<number>(0);
  const [wrong, setWrong] = useState<number>(0)
  const [noOption, setNoOption] = useState<boolean | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(
    chosenTopic?.questions[0]
  );
  const [next, setNext] = useState<boolean>(false)

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
    setNoOption(false);
    setChosenOption(evt.currentTarget.getAttribute("data-title"));
  };

  const currentIdx = chosenTopic!.questions.indexOf(currentQuestion!);

  const handleSubmitAnswer = () => {
    if (!chosenOption) {
      setNoOption(true);
    } else if (chosenOption === currentQuestion!.answer) {
      setCorrect((prev) => prev + 1);
      setIsCorrect(true)
      setNext(true)
    } else {
      setWrong((prev) => prev + 1);
       setNext(true);
    }
  };

  const handleNextQuestion = () => {
    setChosenOption(null);
    setNext(false)
    setWrong(0)
    setIsCorrect(false)
    setCurrentQuestion(chosenTopic!.questions[currentIdx + 1]);
  };

console.log(wrong);


  return (
    <SC.CommonCon>
      {!currentQuestion ? (
        <Result
          score={correct}
          total={chosenTopic!.questions.length}
          title={chosenTopic!.title}
          icon={chosenTopic!.icon}
        />
      ) : (
        <>
          <SC.TextWrapper>
            <SC.SmallText>
              Questions {currentIdx + 1} of {chosenTopic!.questions.length}
            </SC.SmallText>
            <SC.Question>{currentQuestion!.question}</SC.Question>
            <SC.Scale
              gradient={gradient}
              gradientLeft={gradientLeft}
            ></SC.Scale>
          </SC.TextWrapper>
          <SC.OptionsList>
            {currentQuestion!.options.map((el, idx) => (
              <SC.OptionItem
                key={el}
                data-title={el}
                onClick={chooseOption}
                stressedColor={
                  el === chosenOption && !wrong && !isCorrect
                    ? "stressed"
                    : el === chosenOption && wrong !== 0
                    ? "wrong"
                    : el === chosenOption && isCorrect
                    ? "correct"
                    : "none"
                }
              >
                <SC.LetterWrapper
                  stressedColor={
                    el === chosenOption && !wrong && !isCorrect
                      ? "stressed"
                      : el === chosenOption && wrong !== 0
                      ? "wrong"
                      : el === chosenOption && isCorrect
                      ? "correct"
                      : "none"
                  }
                >
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
          {!next ? (
            <SC.SubmitButton onClick={handleSubmitAnswer}>
              Submit Answer
            </SC.SubmitButton>
          ) : (
            <SC.SubmitButton onClick={handleNextQuestion}>
              Next Question
            </SC.SubmitButton>
          )}

          <SC.ErrorWrapper visibility={!noOption ? "hidden" : "none"}>
            <img src={error} alt="error" />
            <p>Please select an answer</p>
          </SC.ErrorWrapper>
        </>
      )}
    </SC.CommonCon>
  );
};

export default QuizPage;
