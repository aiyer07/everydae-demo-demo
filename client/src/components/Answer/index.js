import React from 'react';
import {Container, Flex, Column} from './style';
import { css } from '@emotion/core';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as X } from '../../assets/x.svg';

class Answer extends React.Component {

  constructor(props) {
    super(props);
    this.index = props.index
    this.answer = this.props.answer
  }

  renderCorrectAnswer () {
    if (this.answer.correct) {
      return (
        <Check css={css`vertical-align: middle ; width: 25px; color: #09d3ac;`}/>
      )
    } else {
      return (
        <X css={css` vertical-align: middle ; width: 25px; color: red;`}/>
      )
    }
  }

  render = () => {
    return (
      <Container>
        <Flex percentage={this.props.showAnswer ? this.answer.percentCorrect * 100 : 0} onClick={() => this.props.answerSelected(this.index, this.answer)} selected={this.props.selected}>
          <Column color='#777' left={true}>
          {String.fromCharCode(65 + this.index)}.
          </Column>
          <Column>
            {this.answer.answerText}
          </Column>
          <Column right={true} visibility={ this.props.showAnswer ? "visible" : "hidden"}>
            <span css={css`color: #777; margin-right: 8px;`}>{ this.answer.percentCorrect * 100 }% </span>
            <span>{ this.renderCorrectAnswer() }</span>
          </Column>
        </Flex>
        
      </Container>
    )
  }
}

export default Answer;
