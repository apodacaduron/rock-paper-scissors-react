import { FC } from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import Scoreboard from '../Scoreboard/Scoreboard'
import './Header.scss'

const Header: FC = () => {
    return (
        <div className="header">
            <Logo />
            <Scoreboard points={13} />
        </div>
    )
}

export default Header
