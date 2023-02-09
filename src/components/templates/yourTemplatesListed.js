import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const YourTemplatesListed = () => {
    const [brackets, setBrackets] = useState([])
    const navigate = useNavigate()

    const localBracketUser = localStorage.getItem("builder_user")
    const bracketUserObject = JSON.parse(localBracketUser)

    const handleDelete = (bracketId) => {
        fetch(`http://localhost:8088/brackets/${bracketId}`, {
            method: "DELETE",
        })
            .then(() => {
                fetch(`http://localhost:8088/brackets?userId=${bracketUserObject.id}`)
                    .then(res => res.json())
                    .then((bracketArray) => {
                        setBrackets(bracketArray)
                    })
            })
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/brackets?userId=${bracketUserObject.id}`)
                .then(res => res.json())
                .then((bracketArray) => {
                    setBrackets(bracketArray)
                })
        }, []
    )


    return (
        <div className="bracket-list">
            <ul>
                {brackets.map(bracket => (
                    <li key={bracket.id}>
                        {bracket.name}
                        <button onClick={() => navigate(`/brackets/${bracket.id}`)}>View</button>
                        <button onClick={() => handleDelete(bracket.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => navigate(`/CreateNewBracket`)}>Create New Bracket</button>
                <button onClick={() => navigate(`/AllBrackets`)}>See All Brackets</button>
            </div>
        </div>)

}