import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewCompetitors = ({ numTeams }) => {
  const [competitors, setCompetitors] = useState([]);

  for (let i = 0; i < numTeams; i++) {
    setCompetitors([
      ...competitors,
      { name: "", bracketId: "", seed: i + 1 },
    ]);
  }

  const handleCompetitorChange = (index) => (event) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index].name = event.target.value;
    setCompetitors(updatedCompetitors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    competitors.forEach((competitor) => {
      return fetch("http://localhost:8088/competitors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(competitor),
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {competitors.map((competitor, index) => (
        <div key={index}>
          Seed {competitor.seed}:
          <input
            type="text"
            value={competitor.name}
            onChange={handleCompetitorChange(index)}
          />
        </div>
      ))}
      <button type="submit">Save Competitors</button>
    </form>
  );
};

