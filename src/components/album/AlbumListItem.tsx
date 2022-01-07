import React, { FC } from 'react'
import {
  AlbumContainer, Title,
  ImageBox,
  Text,
} from './Album.styles'
import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import { usePictures } from '../picture/usePicture'
import { isNotNull } from '../../types'

export type AlbumListItemProps = {
    id: string,
    title: string,
    slug: string,
    content: string | undefined,
    pictures: string[]
}

export const AlbumListItem: FC<AlbumListItemProps> = (
  { title, content, pictures },
) => {
  const pictureData = usePictures()

  const albumPictures = pictureData
    .map((p) => (pictures.includes(p.id) ? p : null))
    .filter((p) => p !== null)
    .filter(isNotNull)

  const threePics = albumPictures.slice(0, 2)

  return (
    <AlbumContainer>
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
      </Text>
    </AlbumContainer>
  )
}
