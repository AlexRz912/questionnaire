type Props = {
  value: number;
  total: number;
};

export default function FractionDisplay({ value, total }: Props) {
  return (
    <div className="results__score-wrap">
      <span className="results__score">{value}</span>
      <span className="results__score-sep">/</span>
      <span className="results__score-total">{total}</span>
    </div>
  );
}