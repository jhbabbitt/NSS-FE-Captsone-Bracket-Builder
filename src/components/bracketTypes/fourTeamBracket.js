import { useEffect, useState } from "react";
import { BackButtons } from "./backOutButtons";
import "./fourTeamBracket.css"

export const FourTeamBracket = ({ prop }) => {
    const [competitors, setCompetitors] = useState([])
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

    const handleWinner = (winner, setterFunction) => {
        setterFunction(winner)
    }

    const clearAll = () => {
        setSemiOneWinner(null);
        setSemiTwoWinner(null);
        setFinalWinner(null);
      };
      

    return (
        <>
            <div className="entire-4-team-bracket">
                <div className="round r-of-4">
                    <div className="bracket-game">
                        <button className="player top" onClick={() => handleWinner(findBySeed(1), setSemiOneWinner)}>
                            {findBySeed(1)}
                        </button>
                        <button className="player bot" onClick={() => handleWinner(findBySeed(4), setSemiOneWinner)}>
                            {findBySeed(4)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top" onClick={() => handleWinner(findBySeed(3), setSemiTwoWinner)}>
                            {findBySeed(3)}
                        </button>
                        <button className="player bot" onClick={() => handleWinner(findBySeed(2), setSemiTwoWinner)}>
                            {findBySeed(2)}
                        </button>

                    </div>
                </div>
                <div className="connectors r-of-2">
                    <div className="game-1-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line"></div>
                        <div className="next-line"></div>
                    </div>
                    <div className="game-2-lines">
                        <div className="top-line"></div>
                        <div className="bottom-line"></div>
                        <div className="vert-line"></div>
                        <div className="next-line"></div>
                    </div>
                </div>
                <div className="round r-of-2">
                    <div className="bracket-game">
                        <button className="player top" onClick={() => handleWinner(semiOneWinner, setFinalWinner)}>
                            {semiOneWinner}
                        </button>
                        <button className="player bot" onClick={() => handleWinner(semiTwoWinner, setFinalWinner)}>
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