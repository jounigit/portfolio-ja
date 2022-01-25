import React from 'react'
import { useParams } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'
import Spacer from 'react-spacer'
import { AlbumListCategory } from '../components/album/AlbumListCategory'
import { useAlbums } from '../components/album/useAlbums'
import { usePicturesQuery } from '../components/picture/usePicture'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'

const AlbumsCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{categorySlug: string}>()
  const albumsQuery = useAlbums()
  const picturesQuery = usePicturesQuery()

  const category = categorySlug === 'nayttelyt' ? 'NÄYTTELYT' : 'TEOKSET'

  const isLoaded = albumsQuery.isSuccess && picturesQuery.isSuccess

  return (
    <>
      <Spacer height={80} />
      <div className="headerMiddle">
        { category }
      </div>

      { !isLoaded
      && (
        <Spinner marginTop={120}>
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
      <FadeDiv timein="0.3s">
        <AlbumListCategory />
      </FadeDiv>
      )
      }
    </>
  )
}

export default AlbumsCategoryPage
