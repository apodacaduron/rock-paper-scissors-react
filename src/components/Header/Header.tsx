import { FC, useContext } from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import ScoreContext from '../../lib/ScoreContext'
import Scoreboard from '../Scoreboard/Scoreboard'
import './Header.scss'

const Header: FC = () => {
    const {score} = useContext(ScoreContext)

    return (
        <div className="header">
            <Logo />
            <Scoreboard points={score} />
        </div>
    )
}

export default Header
