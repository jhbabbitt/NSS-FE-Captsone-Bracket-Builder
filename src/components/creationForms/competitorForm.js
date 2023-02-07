import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const NewCompetitors = () => {
    const { bracketId } = useParams()
    const [bracket, setBracket] = useState({})
    const [competitorName, setCompetitorName] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/brackets/${bracketId}?_expand=bracketType`)
            .then(res => res.json())
            .then(bracket => setBracket(bracket))
    }, [bracketId])

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const competitors = competitorName.map((name, index) => ({
            name,
            bracketId,
            seed: index + 1
        }));
    
        const postRequests = competitors.map((competitor) => {
            return fetch("http://localhost:8088/competitors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(competitor)
            });
        });
    
        Promise.all(postRequests)
            .then(() => {
                navigate(`/brackets/${bracketId}`);
            });
    };
    


    const handleCompetitorNameChange = (index) => (event) => {
        const newCompetitorName = [...competitorName];
        newCompetitorName[index] = event.target.value;
        setCompetitorName(newCompetitorName);
    };

    const inputFields = Array.from({ length: bracket.bracketType?.numOfCompetitors }, (_, index) => (
        <label key={index}>
            Seed {index + 1}
            <input
                type="text"
                value={competitorName[index] || ""}
                onChange={handleCompetitorNameChange(index)}
            />
        </label>
    ));

    return (
        <form onSubmit={handleSubmit}>
            {inputFields}
            <button type="submit">View Bracket</button>
        </form>
    )

};

