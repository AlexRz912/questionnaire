import "./buttons.css";

type ButtonsProps = {
  onAnswer: (answer: boolean, isLastQuestion: boolean, isLastQuestionAnswered: boolean) => void;
  text: string;
  value: boolean;
  classNameValue: string;
};

export default function Button({
  text,
  value,
  classNameValue,
  onAnswer,
  
}: ButtonsProps) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <a className={classNameValue}
          onClick={() => onAnswer(value, false, false)}>
        {text}
      </a>
    </div>
  );
}