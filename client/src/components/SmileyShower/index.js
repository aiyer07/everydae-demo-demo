import React from "react";
import Particles from "react-particles-js";
import PropTypes from "prop-types";
import {particles} from "./style"

export default class SmileyShower extends React.Component {

  constructor (props) {
    super(props)
    this.particleParams = particles(this.props)
  }

  render = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Particles
          params={this.particleParams}
        />
      </div>
    );
  }
}

SmileyShower.propTypes = {
  happy: PropTypes.bool.isRequired
};