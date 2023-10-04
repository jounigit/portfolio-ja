/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import {
  IPicture,
  isPictureArray,
} from '../../types'
import { getPicsByIds } from '../picture/sharePictures'
import { usePictures } from '../../hooks/usePicture'
import { AlbumDetails } from './AlbumDetails'
import { useAlbumsData } from '../../hooks/useAlbums'
import { htmlText } from '../utils/htmlText'

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

  const albumPicsArr = getPicsByIds(album.pictures, pictureData)

  if (isPictureArray(albumPicsArr)) albumPics = albumPicsArr

  const isGalleria = album?.category
  && album.category.id === '61ddd9ca7b278bacc2c31aed'

  return (
    <>
      { isGalleria
      && (
      <AlbumDetails
        title={album.title}
        pictures={albumPics}
        content={htmlText(album.content)}
        full
      />
      )}
      { !isGalleria
      && (
        <AlbumDetails
          title={album.title}
          pictures={albumPics}
          content={htmlText(album.content)}
        />
      )}
    </>
  )
}
