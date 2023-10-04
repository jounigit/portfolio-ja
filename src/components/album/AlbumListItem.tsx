/* eslint-disable object-curly-newline */
/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { usePictures } from '../../hooks/usePicture'
import { IAlbum, IPicture, isPictureArray } from '../../types'
import {
  AlbumListItemContainer,
  ImageBox,
  ImageGridListItem,
  Info,
  InfoText,
} from './AlbumListItem.styles'
import { getPicsByIds } from '../picture/sharePictures'
import { DataDivNoClick } from '../atoms/dataDivNoClick'

export interface AlbumListItemProps {
    album: IAlbum
}

export const AlbumListItem:
FC<AlbumListItemProps> = ({ album }) => {
  const { title, slug, info, pictures } = album
  const pictureData = usePictures()
  let threePics = new Array<IPicture>()

  const textForGalleria = (
    <h4>
      {pictures.length}
      {' '}
      kuvaa
    </h4>
  )

  const albumPicsArr = getPicsByIds(pictures, pictureData)

  if (isPictureArray(albumPicsArr)) {
    threePics = albumPicsArr.slice(0, 2)
  }

  return (
    <AlbumListItemContainer>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/galleria/${slug}`}
      >
        <ImageBox>
          <ImageGridListItem width={200} height={200}>
            <DataDivNoClick data={threePics} />
          </ImageGridListItem>
        </ImageBox>

      </Link>

      <Link
        style={{ textDecoration: 'none' }}
        to={`/galleria/${slug}`}
      >
        <Info>
          <h3>{title}</h3>
          <InfoText>
            {info || textForGalleria}
          </InfoText>
        </Info>
      </Link>

    </AlbumListItemContainer>
  )
}
