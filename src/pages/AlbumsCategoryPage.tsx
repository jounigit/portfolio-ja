import React from 'react'
import { AlbumListCategory } from '../components/album/AlbumListCategory'
import { useAlbums } from '../components/album/useAlbums'
import { usePicturesQuery } from '../components/picture/usePicture'
import { FadeDiv } from './FadeIn.styles'

const AlbumsCategoryPage: React.FC = () => {
  const albumsQuery = useAlbums()
  const picturesQuery = usePicturesQuery()

  const isLoaded = albumsQuery.isSuccess && picturesQuery.isSuccess

  return (
    <>
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
