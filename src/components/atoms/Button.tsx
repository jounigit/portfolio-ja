import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* display: block; */
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #5a6268;
  }
`
export const GreenButton = styled(Button)`
  color: #fcfcfc;
  background-color: green;
`
export const RedButton = styled(Button)`
  color: #fcfcfc;
  background-color: tomato;
`
