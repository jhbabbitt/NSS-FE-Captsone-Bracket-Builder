import { useEffect, useState } from "react";
import { BackButtons } from "./backOutButtons";
import "./eightTeamBracket.css"

export const EightTeamBracket = ({ prop }) => {
    const [competitors, setCompetitors] = useState([])
    const [quarterOneWinner, setQuarterOneWinner] = useState(null)
    const [quarterTwoWinner, setQuarterTwoWinner] = useState(null)
    const [quarterThreeWinner, setQuarterThreeWinner] = useState(null)
    const [quarterFourWinner, setQuarterFourWinner] = useState(null)
    const [semiOneWinner, setSemiOneWinner] = useState(null)
    const [semiTwoWinner, setSemiTwoWinner] = useState(null)
    const [finalWinner, setFinalWinner] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8088/competitors?bracketId=${prop}`)
            .then(res => res.json())
            .then(competitors => {
                setCompetitors(competitors);
            });
    }, []);

    const findBySeed = (seed) => {
        return competitors.find(competitor => competitor?.seed === seed)?.name;
    }

    const handleQuarterOne = (winner) => {
        setQuarterOneWinner(winner)
    }
    const handleQuarterTwo = (winner) => {
        setQuarterTwoWinner(winner)
    }
    const handleQuarterThree = (winner) => {
        setQuarterThreeWinner(winner)
    }
    const handleQuarterFour = (winner) => {
        setQuarterFourWinner(winner)
    }
    const handleSemiFinalOne = (winner) => {
        setSemiOneWinner(winner)
    }

    const handleSemiFinalTwo = (winner) => {
        setSemiTwoWinner(winner)
    }

    const handleFinal = (winner) => {
        setFinalWinner(winner)
    }
    const clearAll = () => {
        setQuarterOneWinner(null)
        setQuarterTwoWinner(null)
        setQuarterThreeWinner(null)
        setQuarterFourWinner(null)
        setSemiOneWinner(null)
        setSemiTwoWinner(null)
        setFinalWinner(null)
    };

    return (
        <>
            <div className="entire-8-team-bracket">
                <div className="round r-of-8">
                    <div className="bracket-game">
                        <button className="player top" onClick={() => (handleQuarterOne(findBySeed(1)))}>
                            {findBySeed(1)}
                        </button>
                        <button className="player bot" onClick={() => (handleQuarterOne(findBySeed(8)))}> 
                            {findBySeed(8)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top" onClick={() => (handleQuarterTwo(findBySeed(3)))}>
                            {findBySeed(3)}
                        </button>
                        <button className="player bot" onClick={() => (handleQuarterTwo(findBySeed(6)))}>
                            {findBySeed(6)}
                        </button>
                    </div>
                    <div className="bracket-game">
                        <button className="player top" onClick={() => (handleQuarterThree(findBySeed(4)))}>
                            {findBySeed(4)}
                        </button>
                        <button className="player bot" onClick={() => (handleQuarterThree(findBySeed(5)))}>
                            {findBySeed(5)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top" onClick={() => (handleQuarterFour(findBySeed(7)))}>
                            {findBySeed(7)}
                        </button>
                        <button className="player bot" onClick={() => (handleQuarterFour(findBySeed(2)))}>
                            {findBySeed(2)}
                        </button>
                    </div>
                </div>
                <div className="connectors r-of-4">
                    <div className="game-1-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line-1"></div>
                        <div className="connector-line"></div>
                        <div className="vert-line-2"></div>
                        <div className="next-line"></div>
                    </div>
                    <div className="game-2-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line-1"></div>
                        <div className="connector-line"></div>
                        <div className="vert-line-2"></div>
                        <div className="next-line"></div>
                    </div>
                    <div className="game-3-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line-1"></div>
                        <div className="connector-line"></div>
                        <div className="vert-line-2"></div>
                        <div className="next-line"></div>
                    </div>
                    <div className="game-4-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line-1"></div>
                        <div className="connector-line"></div>
                        <div className="vert-line-2"></div>
                        <div className="next-line"></div>
                    </div>
                </div>
                <div className="round r-of-4">
                    <div className="bracket-game">
                        <button className="player top"onClick={() => handleSemiFinalOne(quarterOneWinner)}>
                            {quarterOneWinner}
                        </button>
                        <button className="player bot"onClick={() => handleSemiFinalOne(quarterTwoWinner)}>
                            {quarterTwoWinner}
                        </button>
                    </div>
                    <div className="bracket-game">
                        <button className="player top"onClick={() => handleSemiFinalTwo(quarterThreeWinner)}>
                            {quarterThreeWinner}
                        </button>
                        <button className="player bot"onClick={() => handleSemiFinalTwo(quarterFourWinner)}>
                            {quarterFourWinner}
                        </button>
                    </div>
                </div>
                <div className="connectors r-of-2">
                    <div className="game-1-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line-1"></div>
                        <div className="connector-line"></div>
                        <div className="vert-line-2"></div>
                        <div className="next-line"></div>
                    </div>
                    <div className="game-2-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line-1"></div>
                        <div className="connector-line"></div>
                        <div className="vert-line-2"></div>
                        <div className="next-line"></div>
                    </div>
                </div>
                <div className="round r-of-2">
                    <div className="bracket-game">
                        <button className="player top"onClick={() => handleFinal(semiOneWinner)}>
                            {semiOneWinner}
                        </button>
                        <button className="player bot"onClick={() => handleFinal(semiTwoWinner)}>
                            {semiTwoWinner}
                        </button>
                    </div>
                </div>
                <div className="connectors champion-round">
                    <div className="top-line"></div>
                    <div className="bottom-line"></div>
                    <div className="vert-line"></div>
                    <div className="next-line"></div>
                </div>
                <div className="round champion-round">
                    <div className="bracket-game">
                        <button className="player top">
                            {finalWinner}
                        </button>
                    </div>
                </div>
            </div>
            <div className="clear-state-button">
                <button onClick={clearAll}>
                    Reset Bracket
                </button>
            </div>
            {<BackButtons />}
        </>
    )
}