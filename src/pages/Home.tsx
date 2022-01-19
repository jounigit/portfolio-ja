import React from 'react'
import styled, { keyframes } from 'styled-components'
import { AlbumsList } from '../components/album/AlbumList'
import { useAlbums } from '../components/album/useAlbums'
import { usePicturesQuery } from '../components/picture/usePicture'
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

const Home: React.FC = () => {
  const albumsQuery = useAlbums()
  const picturesQuery = usePicturesQuery()

  const isLoaded = albumsQuery.isSuccess && picturesQuery.isSuccess

  return (
    <>
      <FadeDiv timein="0.3s">
        <Welcome />
      </FadeDiv>
      {
      isLoaded
      && (
      <FadeDiv timein="0.3s">

        <AlbumsList />
      </FadeDiv>
      )
      }
    </>
  )
}

export default Home
