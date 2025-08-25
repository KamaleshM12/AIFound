import React from "react";

interface ResultsProps {
  results: any[];
  image: string | null;
}

const Results: React.FC<ResultsProps> = ({ results, image }) => (
  <section className="results" id="results">
    {image && <img src={image} alt="Uploaded" />}
    {results.length > 0 && (
      <>
        <h2>Detection Results</h2>
        {results.map((r, i) => (
          <div key={i} className="result-item">
            <span>{r.label}</span>
            <span>{(r.confidence * 100).toFixed(1)}%</span>
          </div>
        ))}
      </>
    )}
  </section>
);

export default Results;
