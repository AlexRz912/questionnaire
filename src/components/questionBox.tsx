import "./questionBox.css";

type QuestionBoxProps = {
  question: string;
  currentCount: number;
  length: number;
};

export default function QuestionBox({
  
  question,
  currentCount,
  length,
  
}: QuestionBoxProps) {
  return (
    <div 
        className="questionBox">
        <h1>
          {currentCount}/{length}
        </h1>

        <h2>
          {question}
        </h2>
    </div>
  );
}