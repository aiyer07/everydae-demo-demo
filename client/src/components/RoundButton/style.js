import styled from '@emotion/styled'

export const RoundButtonStyle = styled.button`
  color: #fff;
  background-color: #1e6dff; 
  border: 1px solid #1e6dff;
  cursor: pointer;
  border-radius: 26px;
  height: 51px;
  min-width: ${props => props.width ? props.width : '200px'};
  padding: 0 1rem;
  font-style: normal;
  font-stretch: normal;
  font-size: 0.9em;
  font-weight: 600;
  font-style: bold;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  :active{
    background-color: #222bf6;
    color: '#fff';
    border: none;
  }
  :focus{
    background-color: #1e6dff;
    color: #fff;
    border: 2px solid #1e6dff;
    border-radius: 26px;
    outline: none;
  }
  :hover{
    background-color: #fff;
    color: #1e6dff;
    border: 1px solid #1e6dff;
  }
`