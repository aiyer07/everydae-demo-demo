import React from 'react';
import { css } from '@emotion/core'
import {Footer, ResultSplash, HowTo, RoundButton, AnswerGroup, Answer, MathQuestion} from '../components'
import { motion } from "framer-motion";
import * as Scroll from 'react-scroll';

class Question extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentAnswerindex: -1,
      correctAnswerIndex: 2,
      success: this.correctAnswerIndex === this.currentAnswerindex,
      showModal: false,
      questionCompleted: false
    }
  }

  submitAnswer = () => {
    if (this.state.currentAnswerindex === -1) return;
    this.setState({
      success: this.state.correctAnswerIndex === this.state.currentAnswerindex,
      showModal: true
    });
  }

  completeQuestion = (e) => {
    this.setState({
      questionCompleted: true,
      showModal: false
    });
    Scroll.scroller.scrollTo('how-to', {
      duration: 1000,
      delay: 1000,
      smooth: true,
      offset: -40, // Scrolls to element + 50 pixels down the page
    })
  }

  showModal = e => {
    this.setState({
      showModal: true
    });
  };

  renderAnswers () {
    return;
  }

  render () {
    if (this.state.showModal) {
      return (
        <motion.div
        key="1"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
          <ResultSplash success={this.state.success} onClose={this.completeQuestion} show={this.state.showModal}/>
        </motion.div>
      )
    }
    return (
      <motion.div
        key="2"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        
      >
          <MathQuestion>
            <img src="https://everydae-images.s3-us-west-2.amazonaws.com/nocalculator%403x.png" width="26px" height="26px" alt="no-calculator"></img>
            <p>2<i>x</i> + 3<i>y</i> = 5 <br></br> 3<i>x</i> + 2<i>y</i> = 7</p>
          </MathQuestion>
          <div css={css` display: block; font-size: 1rem; line-height: 26px; letter-spacing: .6px;`}><p>In the system of equations above, <br></br> what is the value of 5<i>x</i> + 5<i>y</i> ?</p></div>
          <AnswerGroup submissionIndex={this.state.currentAnswerindex} questionCompleted={this.state.questionCompleted} onChangeAnswer={(index) => this.setState({ currentAnswerindex: index })}>
            <Answer answer={10} correct={false} percentage={0.48}/>
            <Answer answer={11} correct={false} percentage={0.15}/>
            <Answer answer={12} correct={true} percentage={0.22}/>
            <Answer answer={13} correct={false} percentage={0.15}/>
          </AnswerGroup>
          {
            this.state.questionCompleted && (
              <Scroll.Element name="how-to">
                <HowTo></HowTo>
              </Scroll.Element>
            )
          }
          <Footer>
            <RoundButton onClick={this.submitAnswer}>SUBMIT</RoundButton>
          </Footer>
      </motion.div>
    );
  }
}

export default Question;