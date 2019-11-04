import React from "react";
import Particles from "react-particles-js";
import {particles} from "./style"

export default () => (
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
      params={particles}
    />
  </div>
);
