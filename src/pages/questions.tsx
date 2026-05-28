import { useState } from "react";
import questions from "../data/questions";

import "../design-system/common/layout/layout.css";
import "../design-system/common/buttons/buttons.css";
import "../design-system/common/badge/badge.css";
import "../design-system/common/texts/texts.css";


import "../design-system/misc/misc/misc.css";
import "../design-system/misc/buttons/animations.css";
import "../design-system/misc/texts/animations.css";


import ChoiceButton from "../components/common/buttons/choiceButton";
import StatusBadge from "../components/common/badge/badge"

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
        <StatusBadge isQuestionPage={true}>
          <span className="questions__counter">
          {pad2(index + 1)} <span className="questions__counter-sep">/</span>{" "}
          {pad2(total)}
          </span>
        </StatusBadge>
        
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