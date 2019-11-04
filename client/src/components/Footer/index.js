import { FooterStyle } from './style'
import React from 'react';
function Footer(props) {
  return (
    <FooterStyle>
      {props.children}
    </FooterStyle>
  );
}

export default Footer;