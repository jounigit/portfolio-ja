import styled from 'styled-components'
import { TABLET } from './theme/breakpoints'

export const SiteContent = styled.div`
    flex: 1 0 auto;
    padding-top: 1rem; 
    margin: 1.5rem 0 3rem 0;
`

export const BaseFooter = styled.div` 
    display: flex; 
    flex-direction: column;

    @media ${TABLET} {
        flex-direction: row;
    }
`
export const BaseContainer = styled.div`
  display: flex;
  box-shadow: var(--shadow-primary);
  border-radius: 5px;
  background: var(--bg-white);
`
export const Divider = styled.hr`
    display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
`

interface SpinnerProps {
    marginTop?: number;
}
export const Spinner = styled(SiteContent)<SpinnerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`
interface HandlingProps {
    brColor?: string;
}

export const HandlingWrapper = styled(BaseContainer)<HandlingProps>`
  display: grid;
  width: 60%;
  border: 0.1rem solid ${({ brColor }) => brColor ?? 'var(--gray-4)'};
  padding: 1.5rem;
  margin: auto;
  margin-top: 2rem;
  h4 {
    color: ${({ brColor }) => brColor ?? 'var(--gray-4)'};
  }
  p { 
    color: var(--gray-4);
   }
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.4rem;
`
export const Form = styled.form`
    min-width: 400px;
    background-color: var(--gray-3);
    /* border: solid red 2px;  */
    border-radius: 5px;
    padding: 1.5rem;
`

export const InputWrapper = styled.div` 
  margin-left: auto;
  margin-right: auto;
`
export const Input = styled.input`
  display: block;
  font-size: 1rem;
  padding: 10px;
  margin: 10px;
  width: 90%;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`
export const Select = styled.select`
  display: block;
  font-size: 1rem;
  padding: 10px;
  margin: 10px;
  width: 90%;
  border: none;
  border-radius: 3px;
`

export const TextArea = styled.textarea`
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 10px;
  margin: 10px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  color: var(--gray-2);
  padding: 10px;
  margin-top: 1rem;
`
