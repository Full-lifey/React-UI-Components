import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        <button className={props.buttonStyle} onClick={props.whenClicked}>
            {props.text}
        </button>
    )
}

NumberButton.defaultProps = {
    buttonStyle: 'numButton',
}

export default NumberButton;