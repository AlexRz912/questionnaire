import "../../../pages/results.css"
import type { ReactNode } from "react";

type props = {
  val?: string;
  children?: ReactNode;
}

export default function StatusBadge({val, children}: props) {
  return (
    <span className="results__counter">
      {val ?? children}
    </span>
  )
}