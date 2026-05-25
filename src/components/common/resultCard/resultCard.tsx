type cardProps = {
    pointsLabel: string;
    title: string;
    description: string;
}

export default function ResultCard({pointsLabel, title, description}: cardProps) {
    return (
        <div className="results__card">
            <span className="results__points">{pointsLabel}</span>
            <h1 className="results__title">{title}</h1>
            <p className="results__description">{description}</p>
        </div>
    );
}