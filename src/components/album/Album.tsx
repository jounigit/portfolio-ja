/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import {
  IPicture,
  isPictureArray,
} from '../../types'
import { getPicsByIds } from '../picture/sharePictures'
import { usePictures } from '../picture/usePicture'
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

  if (album.category) console.log('## Album category:: ', album.category)
  const isGalleria = album?.category
  && album.category === '61ddd9ca7b278bacc2c31aed'

  const innerHtmlTxt = album?.content
  && <div dangerouslySetInnerHTML={{ __html: album.content }} />

  console.log('## Album is galleria:: ', isGalleria)

  return (
    <AlbumContainer>
      <Title>
        <h2>
          {album.title}
        </h2>
      </Title>
      { isGalleria && (
      <ImageBox full>
        <PictureMediaQueries
          imageList={albumPics}
          width={250}
          height={250}
        />
      </ImageBox>
      )}
      { !isGalleria && (
      <ImageBox>
        <PictureMediaQueries
          imageList={albumPics}
          width={250}
          height={250}
        />
      </ImageBox>
      )}

      <Text>
        {innerHtmlTxt && innerHtmlTxt}
      </Text>

    </AlbumContainer>
  )
}
