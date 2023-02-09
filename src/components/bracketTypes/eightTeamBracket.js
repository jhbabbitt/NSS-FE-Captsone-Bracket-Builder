import { useEffect, useState } from "react";
import { BackButtons } from "./backOutButtons";
import { RoundOfFourConnectors } from "../../bracketLines/rOfFourConnectors";
import "./eightTeamBracket.css"
import { RoundOfTwoConnectors } from "../../bracketLines/rOfTwoConnectors";
import { ChampionConnectors } from "../../bracketLines/championConnectors";

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

    const handleWinner = (winner, setterFunction) => {
        setterFunction(winner)
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
                        <button className="player top" onClick={() => (handleWinner(findBySeed(1), setQuarterOneWinner))}>
                            {findBySeed(1)}
                        </button>
                        <button className="player bot" onClick={() => (handleWinner(findBySeed(8), setQuarterOneWinner))}> 
                            {findBySeed(8)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top" onClick={() => (handleWinner(findBySeed(3), setQuarterTwoWinner))}>
                            {findBySeed(3)}
                        </button>
                        <button className="player bot" onClick={() => (handleWinner(findBySeed(6), setQuarterTwoWinner))}>
                            {findBySeed(6)}
                        </button>
                    </div>
                    <div className="bracket-game">
                        <button className="player top" onClick={() => (handleWinner(findBySeed(4), setQuarterThreeWinner))}>
                            {findBySeed(4)}
                        </button>
                        <button className="player bot" onClick={() => (handleWinner(findBySeed(5), setQuarterThreeWinner))}>
                            {findBySeed(5)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top" onClick={() => (handleWinner(findBySeed(7), setQuarterFourWinner))}>
                            {findBySeed(7)}
                        </button>
                        <button className="player bot" onClick={() => (handleWinner(findBySeed(2), setQuarterFourWinner))}>
                            {findBySeed(2)}
                        </button>
                    </div>
                </div>
                <div className="connectors r-of-4">
                    <RoundOfFourConnectors />
                </div>
                <div className="round r-of-4">
                    <div className="bracket-game">
                        <button className="player top"onClick={() => handleWinner(quarterOneWinner, setSemiOneWinner)}>
                            {quarterOneWinner}
                        </button>
                        <button className="player bot"onClick={() => handleWinner(quarterTwoWinner, setSemiOneWinner)}>
                            {quarterTwoWinner}
                        </button>
                    </div>
                    <div className="bracket-game">
                        <button className="player top"onClick={() => handleWinner(quarterThreeWinner, setSemiTwoWinner)}>
                            {quarterThreeWinner}
                        </button>
                        <button className="player bot"onClick={() => handleWinner(quarterFourWinner, setSemiTwoWinner)}>
                            {quarterFourWinner}
                        </button>
                    </div>
                </div>
                <div className="connectors r-of-2">
                   <RoundOfTwoConnectors />
                </div>
                <div className="round r-of-2">
                    <div className="bracket-game">
                        <button className="player top"onClick={() => handleWinner(semiOneWinner, setFinalWinner)}>
                            {semiOneWinner}
                        </button>
                        <button className="player bot"onClick={() => handleWinner(semiTwoWinner, setFinalWinner)}>
                            {semiTwoWinner}
                        </button>
                    </div>
                </div>
                <div className="connectors champion-round">
                   <ChampionConnectors />
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