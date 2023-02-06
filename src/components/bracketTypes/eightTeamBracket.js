import { useEffect, useState } from "react";
import "./eightTeamBracket.css"

export const EightTeamBracket = ({ prop }) => {
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
            <div className="entire-8-team-bracket">
                <div className="round r-of-8">
                    <div className="bracket-game">
                        <button className="player top">
                            {findBySeed(1)}
                        </button>
                        <button className="player bot">
                            {findBySeed(8)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top">
                            {findBySeed(3)}
                        </button>
                        <button className="player bot">
                            {findBySeed(6)}
                        </button>
                    </div>
                    <div className="bracket-game">
                        <button className="player top">
                            {findBySeed(4)}
                        </button>
                        <button className="player bot">
                            {findBySeed(5)}
                        </button>
                    </div>
                    <div className="bracket-game cont">
                        <button className="player top">
                            {findBySeed(7)}
                        </button>
                        <button className="player bot">
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
                        <button className="player top">
                            1/8placeholder
                        </button>
                        <button className="player bot">
                            3/6placeholder
                        </button>
                    </div>
                    <div className="bracket-game">
                        <button className="player top">
                            4/5placeholder
                        </button>
                        <button className="player bot">
                            2/7placeholder
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
                    <button className="player top">
                            1/8/3/6placeholder
                        </button>
                        <button className="player bot">
                            2/7/4/5placeholder
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