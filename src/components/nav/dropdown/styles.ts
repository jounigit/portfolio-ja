import styled from 'styled-components'
import colors from '../../../styles/theme/colors'

export const Wrapper = styled.div`
  position: relative;
`

export const ActivatorButton = styled.button`
  align-items: center;
  background-color: inherit;
  border: none;
  border-radius: 3px;
  /* border-color: #ccc; */
  color: ${colors.white};
  display: flex;
  font-size: 1.5rem;
  max-width: 160px;
  padding: 1em;

  &:after {
    content: "";
    /* border-bottom: 1px solid #000;
    border-right: 1px solid #000; */
    height: 0.5em;
    margin-left: 0.75em;
    width: 0.5em;
    transform: rotate(45deg);
  }
`

export const DropdownList = styled.ul<{ active: boolean }>`
  background-color: #ececec;
  color: black;
  display: ${(props) => (props.active ? 'block' : 'none')};
  transform: ${(props) => (props ? 'translateY(0)' : 'translateY(-100%)')};
  margin: 0;
  min-width: 180px;
  padding: 0;
  position: absolute;
    transition: transform 0.3s ease-in-out;
  li {
    list-style: none;
    margin: 0;
    a,
    a:link {
      display: block;
      padding: 0.5em;
      &:hover {
        background-color: lightblue;
      }
    }
  }
`
