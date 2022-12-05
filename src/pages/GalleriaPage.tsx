import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import Spacer from 'react-spacer'
import { Helmet } from 'react-helmet-async'
import { AlbumListCategory } from '../components/album/AlbumListCategory'
import { useAlbumsByCategory } from '../hooks/useAlbums'
// import { usePicturesQuery } from '../hooks/usePicture'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'

const GalleriaPage: React.FC = () => {
  const { isLoading, albumsByCategory } = useAlbumsByCategory('galleria')

  const metaname = 'art works'

  // eslint-disable-next-line max-len
  const metacontent = 'art works, fine art, sculptures, drawings by Jouni Airaksinen'

  if (isLoading) {
    return (
      <Spinner marginTop={120}>
        <TailSpin
          color="white"
          height="80"
          width="80"
        />
      </Spinner>
    )
  }

  console.log('## Albums: ', albumsByCategory && albumsByCategory)
  if (albumsByCategory === undefined) return <div>No albums found.</div>

  return (
    <>
      <Helmet>
        <title>
          Jouni Airaksinen - galleria
        </title>
        <meta
          name={metaname}
          content={metacontent}
        />
      </Helmet>
      <Spacer height={80} />
      <div className="headerMiddle">
        GALLERIA
      </div>

      {
      !isLoading
      && (
      <FadeDiv timein="0.3s">
        <AlbumListCategory albumsByCategory={albumsByCategory} />
      </FadeDiv>
      )
      }
    </>
  )
}

export default GalleriaPage
