
import React from 'react';
import { Particles, RoundInput, RoundButton } from "../components";
import {HeaderRow, ContentRow, CardContainer} from '../components/Card/style'
import { navigate } from "@reach/router"
import { css } from '@emotion/core'
import { motion } from "framer-motion";
let firstName = ''

function handleClick(e) {
  if (firstName) {
    navigate('question')
  }
}

function updateInputValue(evt) {
  firstName = evt.target.value
}

function Intro(props) {
  return (
    <motion.div
      key="2"
      initial={{ opacity: 0,}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
    >
      <CardContainer>
      <img alt="" src="https://everydae-images.s3-us-west-2.amazonaws.com/waving-hand-sign.png" height="40px" width="40px"></img>
        <HeaderRow title="Hey there."/>
        <HeaderRow title="What's your name?"/>
        <ContentRow content={props.content}/>
        <RoundInput placeholder="Enter your first name here" onChange={evt => updateInputValue(evt)}/>
        <div css={css`margin-top:24px;`} >
          <RoundButton onClick={(e) => handleClick(e)}>SUBMIT</RoundButton>
        </div>
      </CardContainer> 
      <Particles/>
    </motion.div>
  );
}

export default Intro;