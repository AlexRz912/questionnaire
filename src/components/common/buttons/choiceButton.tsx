import { Link } from "react-router-dom";

type ChoiceProps = {
  kind: "yes" | "no";
  label: string;
  isLast: boolean;
  finalAnswers: boolean[];
  onPick: () => void;
};

export default function ChoiceButton({ kind, label, isLast, finalAnswers, onPick }: ChoiceProps) {
  const className = `choice choice--${kind}`;
  const inner = (
    <>
      <span className="choice__shadow" aria-hidden="true" />
      <span className="choice__face">{label}</span>
    </>
  );

  if (isLast) {
    const score = finalAnswers.filter(Boolean).length;
    
    return (
      <Link
        to="/results"
        state={{ answers: finalAnswers, score, total: finalAnswers.length }}
        className={className}
        onClick={onPick}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={className} onClick={onPick}>
      {inner}
    </button>
  );
}