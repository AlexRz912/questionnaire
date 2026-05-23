import { useLocation, Link } from 'react-router-dom';
import results from "../data/results";
import "./results.css";
import "../design-system/buttons/animations.css";

type ResultState = {
    answers: boolean[];
    score: number;
    total: number;
};

export default function Results() {
    const { state } = useLocation() as { state: ResultState };

    let index = Math.ceil(state.score / 2 - 1);
    if (state.score === 10 || state.score === 0) {
        index++;
    }

    const result = results[index];

    const [pointsLabel, ...titleParts] = result.result.split("—");
    const title = titleParts.join("—").trim();

    return (
        <main className="results">
            <header className="results__header">
                <span className="results__counter">RÉSULTATS</span>
            </header>

            <div className="results__score-wrap">
                <span className="results__score">{state.score}</span>
                <span className="results__score-sep">/</span>
                <span className="results__score-total">{state.total}</span>
            </div>

            <div className="results__card">
                <span className="results__points">{pointsLabel.trim()}</span>
                <h1 className="results__title">{title}</h1>
                <p className="results__description">{result.description}</p>
            </div>

            <Link to="/" className="results__cta">
                <span className="results__cta-shadow" aria-hidden="true" />
                <span className="results__cta-face">Refaire le test</span>
            </Link>
        </main>
    );
}
