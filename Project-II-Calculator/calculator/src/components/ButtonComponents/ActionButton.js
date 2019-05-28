import React from 'react';
import './Button.scss';

const ActionButton = props => <button className={props.buttonStyle} onClick={props.whenClicked}>{props.text}</button>;

ActionButton.defaultProps = {
    buttonStyle: 'operator',
}

export default ActionButton;