import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { FourTeamBracket } from "../bracketTypes/fourTeamBracket"
import { EightTeamBracket } from "../bracketTypes/eightTeamBracket"
import "./templates.css"

export const TemplateViewer = () => {
    const { bracketId } = useParams()
    const [bracket, setBracket] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8088/brackets/${bracketId}`)
            .then(res => res.json())
            .then(bracket => setBracket(bracket))
    }, [bracketId])

    if (bracket.bracketTypeId === 1) {
        return <>
            <div className="bracket-name">{bracket.name}</div>
            <FourTeamBracket prop={bracketId} />
        </>

    }
    if (bracket.bracketTypeId === 2) {
        return <>
            <div className="bracket-name">{bracket.name}</div>
            <EightTeamBracket prop={bracketId} />
        </>
    }

}