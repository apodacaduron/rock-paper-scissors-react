import { ButtonHTMLAttributes, FC } from 'react'
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";

import './CloseButton.scss'

const CloseButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button {...props}>
            <IconClose />
        </button>
    )
}

export default CloseButton
