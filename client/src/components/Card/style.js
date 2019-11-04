import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const CardContainer = styled.div`
  background-color: #fff;
  z-index: 1000;
  border-radius: 4px;
  margin: 10% auto;
  height: 350px;
  width: 650px;
  position: relative;
  text-align: middle;
  padding: 70px 0px 34px 0px;
  color: #444;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const rowStyle = css`
  font-size: 2.25rem;
  font-weight: 600;
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  line-height: 30px;
  letter-spacing: .5px;
  word-wrap: normal;
`;
export const HeaderRow = (props) => (
  <h1 css={rowStyle}>{props.title}</h1>
);

export const ContentRow = styled.div`
`;