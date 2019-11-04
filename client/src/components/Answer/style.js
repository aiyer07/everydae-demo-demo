import React from 'react'
import { css, keyframes } from '@emotion/core'


export const fillAnimation = (percentage) => keyframes`
  0%   {background: linear-gradient(to right, #d7e3fa 50%, #ffffff00 50%); background-size: 200% 100%; background-position: right bottom;}
100% {background: linear-gradient(to right, #d7e3fa 50%, #ffffff00 50%);  background-size: 200% 100%; background-position: ${100 - percentage}%;}
`

export const Container = props => (
  <div css={
    css`
      flex: 1;
    `
  }
  >
    {props.children}
  </div>
)

export const Flex = props => {
  return (
  <div
    onClick={props.onClick}
    css={{
      display: 'flex',
      color: '#000',
      fontsize: '16px',
      backgroundColor: props.selected ? '#edfdfa' : '#fff',
      border: props.selected ? '2px solid #1e6dff' : '1px solid #aaa',
      cursor: 'pointer',
      borderRadius: '26px',
      height: '51px',
      minWidth: '200px',
      width: '320px',
      textAlign: 'center',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      margin: '0 auto',
      position: 'relative',
      ":hover": {
        backgroundColor: '#edfdfa'
      }
    }}
  >
    <div css={{ display: 'flex', width: '320px', padding: '0 1rem', borderRadius: 'inherit', animation: `${fillAnimation(props.percentage)} 1s ease forwards`}}>{props.children}</div>
    
  </div>
)}
const Content = props => (
  <div
  css={css `
    display: table-cell;
    vertical-align:middle;
    width: 115px;
    height: 51px;
  `}
  >
    {props.children}
  </div>
  
)

// export const CheckMark = props => (
// )

export const Column = props => (
  <div
    css={{
      flex: 1,
      textAlign: props.left ? 'left' : (props.right ? 'right' : 'center'),
      color: props.color ? props.color : '#000',
      visibility: props.visibility ? props.visibility : 'visible',
    }}
  >
    <Content >
      {props.children}
    </Content>
    </div>
)