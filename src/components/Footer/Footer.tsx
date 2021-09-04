import React, { FC } from 'react'
import './Footer.scss'

interface IFooter {
    onClick: () => void;
}

const Footer: FC<IFooter> = (props) => {
    return (
        <footer>
            <button onClick={props.onClick}>RULES</button>
        </footer>
    )
}

export default Footer
