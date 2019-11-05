import React from 'react';
import {Container} from './style'
import {css} from '@emotion/core'

class AnswerGroup extends React.Component {

  constructor(props) {
    super(props);
    this.childElements = React.Children.toArray(props.children).map((elm, index) => {
      return React.cloneElement((elm), { 
        answerSelected: this.answerSelected,
        selected: this.props.questionCompleted && index === this.props.submissionIndex ? true : false,
        showAnswer: this.props.questionCompleted,
        index: index
      })
    })
    this.state = {
      selectedIndex: -1
    }
  }

  answerSelected = (index, answer) => {
    // unselect last selected answer
    if (this.state.selectedIndex !== -1) {
      this.childElements[this.state.selectedIndex] = React.cloneElement(this.childElements[this.state.selectedIndex], {
        selected: false
      })
    }
    // update the index & new selected
    this.props.onChangeAnswer(answer, index)
    this.childElements[index] = React.cloneElement(this.childElements[index], {
      selected: true
    })
    this.setState({ selectedIndex: index });
  }

  render = () => {
    return (
      <Container css={this.props.questionCompleted ? css` pointer-events: none;` : ""}>
        { this.childElements }
      </Container>
    )
  }
}

export default AnswerGroup;
