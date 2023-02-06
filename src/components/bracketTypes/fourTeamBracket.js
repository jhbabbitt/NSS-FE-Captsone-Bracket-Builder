import { useEffect, useState } from "react";
import "./fourTeamBracket.css"

export const FourTeamBracket = ({ prop }) => {
    const [competitors, setCompetitors] = useState([]);

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



    return (
        <>
            <div className="entire-4-team-bracket">
                <div className="round r-of-4">
                    <div className="bracket-game">
                        <button className="player top">
                            {findBySeed(1)}
                        </button>
                        <button className="player bot">
                            {findBySeed(4)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top">
                            {findBySeed(3)}
                        </button>
                        <button className="player bot">
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
                        <button className="player top">
                            1/4placeholder
                        </button>
                        <button className="player bot">
                            2/3placeholder
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
                            champion
                        </button>
                    </div>
                </div>
            </div>
        </>
    )


}