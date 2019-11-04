import React from "react";
import { Router, Location } from "@reach/router";
import { AnimatePresence } from "framer-motion";

const FramerRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div  >
        <AnimatePresence exitBeforeEnter>
          <Router key={location.key} location={location}>
            {children}
          </Router>
        </AnimatePresence>
      </div>
    )}
  </Location>
);

export default FramerRouter;