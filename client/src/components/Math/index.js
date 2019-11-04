import { MathQuestionStyle } from './style'
import React from 'react';
function MathQuestion(props) {
  return (
    <MathQuestionStyle>
      {props.children}
    </MathQuestionStyle>
  );
}

export default MathQuestion;