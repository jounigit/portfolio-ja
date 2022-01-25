import React from 'react'
// import { AlbumsList } from '../components/album/AlbumList'
import { TailSpin } from 'react-loader-spinner'
import { AlbumListHome } from '../components/album/AlbumListHome'
import { useAlbums } from '../components/album/useAlbums'
import { usePicturesQuery } from '../components/picture/usePicture'
import { Welcome } from '../components/welcome/Welcome'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'

const Home: React.FC = () => {
  const albumsQuery = useAlbums()
  const picturesQuery = usePicturesQuery()

  const isLoaded = albumsQuery.isSuccess && picturesQuery.isSuccess

  return (
    <>
      <FadeDiv timein="0.3s">
        <Welcome />
      </FadeDiv>
      { !isLoaded
      && (
        <Spinner marginTop={50}>
          <TailSpin
            color="white"
            height="80"
            width="80"
          />
        </Spinner>
      )}
      {
      isLoaded
      && (
      <>
        <FadeDiv timein="0.3s">
          <AlbumListHome category="galleria" columns={2} />
        </FadeDiv>
        <FadeDiv timein="0.3s">
          <div className="headerMiddle">
            NÄYTTELYT
          </div>
          <AlbumListHome category="nayttelyt" columns={3} />
          {/* <AlbumsList /> */}
        </FadeDiv>

      </>
      )
      }
    </>
  )
}

export default Home
