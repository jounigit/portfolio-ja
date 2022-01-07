import React from 'react'
import styled, { keyframes } from 'styled-components'
import { AlbumsList } from '../components/album/AlbumList'
import { Welcome } from '../components/welcome/Welcome'
// import { CategoryList } from '../components/category/CategoryList'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
interface Props {
  timein: string;
}

const FadeDiv = styled.div<Props>`
  animation: ${fadeIn} ${(p) => p.timein};
  opacity: 1;
`

const Home: React.FC = () => (
  <>
    <FadeDiv timein="0.3s">
      <Welcome />
      <AlbumsList />
      {/* <CategoryList /> */}
    </FadeDiv>
  </>
)

export default Home
