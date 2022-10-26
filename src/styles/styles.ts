import styled from 'styled-components'
import { TABLET } from './theme/breakpoints'

export const SiteContent = styled.div`
    flex: 1 0 auto;
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
  background: var(--bg-primary);
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
