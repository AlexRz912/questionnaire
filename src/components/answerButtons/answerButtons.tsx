import "./answerButtons.css"

type AnswerButtonsProps = {
  children: React.ReactNode;
};

export default function AnswerButtons({
    children,
}: AnswerButtonsProps) {
    return <div className="answer-buttons">
            {children}
        </div>;
}