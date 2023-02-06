import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NewCompetitors } from "./competitorForm"


export const NewBracketForm = () => {
    const navigate = useNavigate()

    const localBracketUser = localStorage.getItem("builder_user")
    const bracketUserObject = JSON.parse(localBracketUser)

    const [bracketName, setBracketName] = useState('');
    const [numTeams, setNumTeams] = useState(0);
    const [bracketTypes, setBracketTypes] = useState([]);
    const [bracketTypeId, setBracketTypeId] = useState(0)

    useEffect(() => {
        fetch('http://localhost:8088/bracketTypes')
            .then(response => response.json())
            .then(data => {
                setBracketTypes(data);
                setNumTeams(data[0].numOfCompetitors);
                setBracketTypeId(data[0].id);
            });
    }, []);

    const handleBracketNameChange = (event) => {
        setBracketName(event.target.value);
    };

    const handleNumTeamsChange = (event) => {
        const selectedType = bracketTypes.find(type => type.numOfCompetitors === Number(event.target.value));
        setNumTeams(selectedType.numOfCompetitors);
        setBracketTypeId(selectedType.id);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBracket = { name: bracketName, bracketTypeId, userId: bracketUserObject.id };

        return fetch('http://localhost:8088/brackets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBracket)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/NewCompetitors", { state: { numTeams } },)
            })


    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Bracket Name:
                <input type="text" value={bracketName} onChange={handleBracketNameChange} />
            </label>
            <br />
            <label>
                Number of Teams:
                <select value={numTeams} onChange={handleNumTeamsChange}>
                    {bracketTypes.map(type => (
                        <option key={type.id} value={type.numOfCompetitors}>{type.numOfCompetitors}</option>
                    ))}
                </select>
            </label>
            <br />
            <button type="submit">Input Competitors</button>
        </form>
    );
}







