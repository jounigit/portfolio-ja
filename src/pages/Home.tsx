import React from 'react'
// import { AlbumsList } from '../components/album/AlbumList'
import { TailSpin } from 'react-loader-spinner'
import { AlbumListHome } from '../components/album/AlbumListHome'
import { useAlbums } from '../hooks/useAlbums'
import { usePicturesQuery } from '../hooks/usePicture'
import { Welcome } from '../components/welcome/Welcome'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'
// import { authHeader } from '../services/apiService'

const Home: React.FC = () => {
  const albumsQuery = useAlbums()
  const picturesQuery = usePicturesQuery()

  const isLoaded = albumsQuery.isSuccess && picturesQuery.isSuccess
  // console.log('-- AuthHeaders: ', authHeader())
  const userInfo = localStorage.getItem('token')
  let token = null

  if (userInfo) {
    token = userInfo
    console.log('-- Home token: ', token)
  }

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
