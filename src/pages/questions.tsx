import { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../data/questions";
import "./questions.css";
import "../design-system/buttons/animations.css";

const pad2 = (n: number) => n.toString().padStart(2, "0");

export default function Questions() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const total = questions.length;
  const current = questions[index];
  const isLast = index === total - 1;
  const progress = ((index + 1) / total) * 100;

  const record = (yes: boolean) => {
    const updated = [...answers, yes];
    setAnswers(updated);
    localStorage.setItem("quiz_answers", JSON.stringify(updated));
    if (!isLast) setIndex(index + 1);
  };

  return (
    <main className="questions">
      <header className="questions__header">
        <span className="questions__counter">
          {pad2(index + 1)} <span className="questions__counter-sep">/</span>{" "}
          {pad2(total)}
        </span>
        <div className="questions__bar" aria-hidden="true">
          <div
            className="questions__bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <h1 key={index} className="questions__text">
        {current.question}
      </h1>

      <div className="questions__choices">
        <ChoiceButton
          kind="no"
          label="Non"
          isLast={isLast}
          finalAnswers={[...answers, false]}
          onPick={() => record(false)}
        />
        <ChoiceButton
          kind="yes"
          label="Oui"
          isLast={isLast}
          finalAnswers={[...answers, true]}
          onPick={() => record(true)}
        />
      </div>
    </main>
  );
}

type ChoiceProps = {
  kind: "yes" | "no";
  label: string;
  isLast: boolean;
  finalAnswers: boolean[];
  onPick: () => void;
};

function ChoiceButton({ kind, label, isLast, finalAnswers, onPick }: ChoiceProps) {
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