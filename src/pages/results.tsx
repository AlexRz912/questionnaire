import { useLocation, Link } from 'react-router-dom';
import results from "../data/results";
import StatusBadge from "../components/common/badge/badge"
import ResultCard from '../components/common/resultCard/resultCard';

import "../design-system/common/layout/layout.css"
import "../design-system/common/buttons/buttons.css";

import "../design-system/common/badge/badge.css";
import "../design-system/common/card/card.css";
import "../design-system/common/texts/texts.css";

import "../design-system/misc/buttons/animations.css";
import "../design-system/misc/score/score.css"

//import { LinkButtonRes } from '../components/common/buttons/linkButtons';
import ScoreDisplay from "../components/scoreDisplay/scoreDisplay"

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
                <StatusBadge val="RESULTATS" isQuestionPage={false}>
                </StatusBadge>
            </header>
            
            <ScoreDisplay value={state.score} total={state.total} />
            <ResultCard pointsLabel={pointsLabel.trim()} title={title} description={result.description}/>
            <Link to="/" className="results__cta">
                <span className="results__cta-shadow" aria-hidden="true" />
                <span className="results__cta-face">Refaire le test</span>
            </Link>
        </main>
    );
}
