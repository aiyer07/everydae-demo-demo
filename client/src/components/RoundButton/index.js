import React from 'react';
import {RoundButtonStyle} from './style'
function RoundButton(props) {
  return (
    <div>
    <RoundButtonStyle onClick={props.onClick} 
    width={props.width}
    height={props.height}
    activeColor={props.activeColor}
    focusColor={props.focusColor}
    color={props.color}
    textColor={props.textColor}
    borderColor={props.borderColor}
    enableShadow={props.enableShadow}>
      {props.children}
    </RoundButtonStyle>
    </div>
  );
}

export default RoundButton;
