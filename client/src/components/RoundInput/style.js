import styled from '@emotion/styled'

export const Input = styled.input`
  display: block;
  width: 400px;
  box-sizing: border-box;
  margin: 0px 0px 0px 120px;
  height: 50px;
  padding: 12px 20px;
  font-family: Open Sans, sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: .5px;
  color: #222;
  border-radius: 40px;
  border: .5px solid #dadada;
  outline: none;
  text-transform: capitalize;
  :focus{
    color: black;
    border: .5px solid #000000;
  }
`