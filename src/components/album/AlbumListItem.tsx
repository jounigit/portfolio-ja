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
  console.log('## ALBUMLIST INFO:: ', info)
  return (
    <AlbumListItemContainer>
      {/* <Title>
        <h2>{title}</h2>
      </Title> */}
      <ImageBox>
        <ImageGridListItem width={200} height={200}>
          <DataDivNoClick data={threePics} />
        </ImageGridListItem>
      </ImageBox>

      <Info>
        <h2>{title}</h2>

        <InfoText>
          {info}
        </InfoText>
        <Link to={`/album/${slug}`}>
          Linkki
        </Link>

      </Info>
    </AlbumListItemContainer>
  )
}
