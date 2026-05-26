import "../../../pages/results.css"
import type { ReactNode } from "react";

type props = {
  val?: string;
  children?: ReactNode;
  isQuestionPage: boolean;
}

export default function StatusBadge({val, children, isQuestionPage}: props) {

  if (isQuestionPage) {
    return (
      <span>
        {val ?? children}
      </span>
    )
  } else {
    return (
      <span className="results__counter">
        {val ?? children}
      </span>
    )
  }
}