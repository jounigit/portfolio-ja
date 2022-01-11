import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import {
  IPicture,
  // IAlbum,
  // isNotNull,
  isPictureArray,
} from '../../types'
import { getPicsByIds } from '../picture/sharePictures'
import { usePictures } from '../picture/usePicture'
// import { IPicture } from '../../types'
import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import {
  AlbumContainer, Title,
  ImageBox,
  Text,
} from './Album.styles'
import { useAlbumsData } from './useAlbums'

type AlbumParams = {
  slug: string;
};

export const Album: FC = () => {
  const { slug } = useParams<AlbumParams>()
  const albumsData = useAlbumsData()
  const pictureData = usePictures()
  let albumPics = new Array<IPicture>()

  const album = albumsData.find((a) => a.slug === slug)

  if (album === undefined) {
    return <div>Album is undefined.</div>
  }

  const picsIds = album.pictures

  const albumPicsArr = getPicsByIds(picsIds, pictureData)

  if (isPictureArray(albumPicsArr)) albumPics = albumPicsArr

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
          imageList={albumPics}
          width={250}
          height={250}
        />
      </ImageBox>

    </AlbumContainer>
  )
}

// const albumPicsProm = picsIds.map(
//   (id) => (pictureData.find((p) => p.id === id)),
// )
