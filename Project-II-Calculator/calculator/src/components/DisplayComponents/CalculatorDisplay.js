import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
    return (
        <div className='calcDisplay'>
            {props.text}
        </div>
    )
}

export default CalculatorDisplay;