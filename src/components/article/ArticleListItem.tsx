import React from 'react'
import styled from 'styled-components'
import { IArticleListItem } from '../../types'

const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 3.5em;
justify-content: space-evenly;
font-size: 0.4em;
`
const Item1 = styled.span`
    width: 16em;
    font-size: 2em;
    font-weight: 500;
    padding: 0.5rem;
`
const Item2 = styled.span`
    font-size: 1.8em;
    font-weight: 300;
    padding: 0.5rem;
`
const ItemLast = styled.span`
    justify-content: end;
    font-size: 1.4em;
    font-weight: 500;
    padding: 0.5rem;
    text-decoration: none;

    a {
        text-decoration: none;
        color: #5e0505df;
    }
`

export const ArticleListItem = (
  {
    title, media, journalist, file,
  }: IArticleListItem,
): JSX.Element => (
  <Container>
    <Item1>{title}</Item1>
    <Item2>{media}</Item2>
    <Item2>{journalist}</Item2>
    <ItemLast>
      {/* <Link to={file} target="_blank" rel="noopener noreferrer">
        lue
      </Link> */}
      <a target="_blank" href={file} rel="noreferrer">
        lue artikkeli
      </a>
    </ItemLast>
  </Container>
)

// style={{ text-decoration: none }}
