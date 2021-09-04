import React, { FC } from 'react'
import './Scoreboard.scss'

interface IScoreboard {
    points: number;
}

const Scoreboard: FC<IScoreboard> = (props) => {
    return (
        <div className="scoreboard">
            <div className="scoreboard__title">SCORE</div>
            <div className="scoreboard__points">{ props.points }</div>
        </div>
    )
}

export default Scoreboard
