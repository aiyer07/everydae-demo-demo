import React from "react";
import SmileyShower from "../SmileyShower"
import PropTypes from "prop-types";
import styled from "@emotion/styled"

const ResultHeaderStyle = styled.h1`
  z-index: 1000;
`
const ResultSubHeaderStyle = styled.div`
  z-index: 1000;
`

const Container = styled.div`
  position: absolute;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 90%; 
  width:100%;
`

export default class ResultSplash extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props.success)
  }
  
  componentDidMount () { 
    if (this.props.show){
      setTimeout(() => {
        this.props.onClose()
      }, 2000); 
    }
  }

  renderResultTextHeader = () => {
    let header = ""
    if (this.props.success) {
      header = "You're right"
    } else {
      header = "You can't win 'em all"
    }
    return (
      <ResultHeaderStyle>
        {header}
      </ResultHeaderStyle>
    )
  }

  renderResultTextSubHeader = () => {
    let subHeader = ""
    if (this.props.success) {
      subHeader = "Like a boss"
    } else {
      subHeader = "But let's win the next one."
    }
    return (
      <ResultSubHeaderStyle>
        {subHeader}
      </ResultSubHeaderStyle>
    )
  }

  render() {
    return (
      <Container>
        { this.renderResultTextHeader() }
        { this.renderResultTextSubHeader() }
        <SmileyShower happy={this.props.success}></SmileyShower>
        </Container>
    );
  }
}
ResultSplash.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};