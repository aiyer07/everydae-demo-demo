import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  background-color: #fff;
  border-top: 5px solid #ff4d71;
  display: block;
  margin: auto;
  min-height: 350px;
  margin-bottom: 300px;
  margin-top: 50px;
  width: 450px;
  text-align: left;
  padding: 40px;
  color: #444;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Header = props => (
  <div css={css `width: 200px;`}>
    {
      props.imgSrc && (
        <img alt="emoji" css={css `float: left; margin-right: 10px;`} src={props.imgSrc} width="24px" height="24px"/>
      )
    }
    <span css={css `font-weight: 800; font-size: 1.5rem;`}>{props.headerText}</span>
    <div css={css `
      width: 75px;
      height: 5px;
      margin: 10px 0px 10px 0px;
      border-radius: 3px;
      background-color: ${props.underlineColor};
      `}/>
  </div>
)

const SimpleParagraph = props => (
  <p
  css={css`
      font-size: 1rem;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: .4px;
    font-family: Open Sans;
    margin: 0 0 1rem;
  `}>
    {props.children}
  </p>
)

export default class HowTo extends React.Component {
  
  componentDidMount () { 
  }

  renderResultTextSubHeader = () => {
    return;
  }

  render() {
    return (
      <Container>
        <Header underlineColor="#09d3ac" headerText="TL;DR" imgSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/face-with-monocle_1f9d0.png"/>
        <SimpleParagraph>
        Sometimes the SAT will ask about combinations of variables, like the value of 5x + 5y. When you see these questions, first check whether you can add or subtract the equations given to get the equation you’re looking for.
        </SimpleParagraph>
        <Header underlineColor="#ffbc1e" headerText="How You Do It"/>
        <div class="sol-text">
          <span css={css `font-weight: 700; font-size: 1rem;`}>Stack, then add</span>
          <SimpleParagraph> To add or subtract systems of equations, first stack the equations you’re trying to combine. Since we’re            trying to get from 2<i>x</i> and 3<i>x</i> to 5<i>x</i>, we’re going to want to add. </SimpleParagraph>
          <SimpleParagraph> Adding the second equation to the first one is enough to tell us that 5<i>x</i> + 5<i>y</i> = 12 and that            <span css={css`color: #1e6dff; font-weight: bold;`}> (C) is correct.</span> </SimpleParagraph>
          <SimpleParagraph><span ccss={css`color: #ff4d71; font-weight: bold;`}>Answer choice (A) is a trap. </span> It’s what we would have gotten if            we’d instead solved for 5<i>x</i> - 5<i>y</i>. </SimpleParagraph>
          <SimpleParagraph><span css={css`color: #ff4d71; font-weight: bold;`}>Answer choice (B) is a trap. </span> It’s the value of 5<i>x</i>, not            5<i>x</i> + 5<i>y</i>. </SimpleParagraph>
          </div>
        <Header underlineColor="#1ec6ff" headerText="The Scoop" imgSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/ice-cream_1f368.png"/>
        <SimpleParagraph>
        Although we could have solved for x and y separately first, it’s going to take fewer steps to just add the two equations together. This won’t always work for every system of equations problem. But when you see questions asking for a combination of variables, check and see if simply adding or subtracting work before you dive head-first into the math!
        </SimpleParagraph>
      </Container>
    );
  }
}

HowTo.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};