import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AllTemplatesListed = () => {
    const [brackets, setBrackets] = useState([])
    const [users, setUsers] = useState([])
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
            fetch(`http://localhost:8088/brackets`)
                .then(res => res.json())
                .then((bracketArray) => {
                    setBrackets(bracketArray)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/users`)
                .then(res => res.json())
                .then((usersArray) => {
                    setUsers(usersArray)
                })
        },
        []
    )

    return (
        <div>
            <ul>
                {brackets.map(bracket => (
                    <li key={bracket.id}>
                        {bracket.name}
                        <button onClick={() => navigate(`/brackets/${bracket.id}`)}>View</button>
                        {bracketUserObject.id === bracket.userId && (
                            <button onClick={() => handleDelete(bracket.id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => navigate(`/CreateNewBracket`)}>Create New Bracket</button>
                <button onClick={() => navigate(`/YourBrackets`)}>See Your Brackets</button>
            </div>
        </div>)

}