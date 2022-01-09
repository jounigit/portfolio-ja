import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import {
// IAlbum,
  isNotNull,
} from '../../types'
import { usePictures } from '../picture/usePicture'
// import { IPicture } from '../../types'
import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import {
  AlbumContainer, Title,
  ImageBox,
  Text,
} from './Album.styles'
import { useAlbum } from './useAlbums'

type AlbumParams = {
  id: string;
};

export const Album: FC = () => {
  const { id } = useParams<AlbumParams>()
  const { isLoading, error, data } = useAlbum(id)
  const pictureData = usePictures()

  if (isLoading) {
    console.log('Album loading: ', data)
    return <p>Loading...</p>
  }

  if (error instanceof Error) {
    console.log('Album error: ', data)
    return (
      <p> Error is -- </p>
    )
  }

  console.log('Album after error: ', data)

  const album = data && data[0]
  console.log('Album type pics: ', album.pictures)

  const albumPictures = pictureData
    .map((p) => (album.pictures.includes(p.id) ? p : null))
    .filter((p) => p !== null)
    .filter(isNotNull)

  return (
    <AlbumContainer>
      <Title>
        <h2>
          {album.title}
        </h2>
      </Title>
      <Text>
        <p>
          {album.content}
        </p>
      </Text>
      <ImageBox>
        <PictureMediaQueries
          imageList={albumPictures}
          width={250}
          height={250}
        />
      </ImageBox>

    </AlbumContainer>
  )
}
