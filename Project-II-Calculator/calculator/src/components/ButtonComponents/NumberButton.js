import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={props.numberProp.toString()}>
            {props.numberProp.toString()}
        </div>
    )
}

export default NumberButton;