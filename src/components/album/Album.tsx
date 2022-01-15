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
  // Text,
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

  // if (album.content)

  const innerHtmlTxt = album?.content
  && <div dangerouslySetInnerHTML={{ __html: album.content }} />

  return (
    <AlbumContainer>
      <Title>
        <h2>
          {album.title}
        </h2>
      </Title>
      {innerHtmlTxt && innerHtmlTxt}
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
