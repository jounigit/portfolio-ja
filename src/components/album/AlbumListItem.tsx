import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import { usePictures } from '../picture/usePicture'
import { IPicture, isPictureArray } from '../../types'
import {
  AlbumListItemContainer,
  Title,
  ImageBox,
  Text,
} from './AlbumListItem.styles'
import { getPicsByIds } from '../picture/sharePictures'

export type AlbumListItemProps = {
    id: string,
    title: string,
    slug: string,
    content: string | undefined,
    pictures: string[]
}

export const AlbumListItem:
FC<AlbumListItemProps> = ({
  title, slug, content, pictures,
}) => {
  const pictureData = usePictures()
  let threePics = new Array<IPicture>()

  const albumPicsArr = getPicsByIds(pictures, pictureData)

  if (isPictureArray(albumPicsArr)) {
    threePics = albumPicsArr.slice(0, 2)
  }

  return (
    <AlbumListItemContainer>
      <Title>
        <h2>{title}</h2>
      </Title>
      <ImageBox>
        <PictureMediaQueries
          imageList={threePics}
          width={150}
          height={150}
        />
      </ImageBox>
      <Text>
        <p>
          {content}
        </p>
        <Link to={`/album/${slug}`}>
          Linkki
        </Link>
      </Text>
    </AlbumListItemContainer>
  )
}
