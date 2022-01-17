/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import { usePictures } from '../picture/usePicture'
import { IPicture, isPictureArray } from '../../types'
import {
  AlbumListItemContainer,
  // Title,
  ImageBox,
  // Text,
  ImageGridListItem,
  Info,
  InfoText,
} from './AlbumListItem.styles'
import { getPicsByIds } from '../picture/sharePictures'
import { DataDivNoClick } from '../atoms/dataDivNoClick'
// import {
//   IImageGridProps,
//   ImageGrid,
// } from '../pictureLists/pictureMediaQuery.style'

export interface AlbumListItemProps {
    id: string,
    title: string,
    slug: string,
    info: string | undefined,
    pictures: string[]
}

export const AlbumListItem:
FC<AlbumListItemProps> = ({
  title, slug, info, pictures,
}) => {
  const pictureData = usePictures()
  let threePics = new Array<IPicture>()

  const albumPicsArr = getPicsByIds(pictures, pictureData)

  if (isPictureArray(albumPicsArr)) {
    threePics = albumPicsArr.slice(0, 2)
  }

  return (
    <AlbumListItemContainer>
      <ImageBox>
        <ImageGridListItem width={200} height={200}>
          <DataDivNoClick data={threePics} />
        </ImageGridListItem>
      </ImageBox>

      <Link
        style={{ textDecoration: 'none' }}
        to={`/album/${slug}`}
      >

        <Info>
          <h3>{title}</h3>
          <InfoText>
            {info}
          </InfoText>
        </Info>

      </Link>
    </AlbumListItemContainer>
  )
}
