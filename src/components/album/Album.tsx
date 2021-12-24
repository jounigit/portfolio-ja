import React, { FC } from 'react'
import { pictureListInThree } from '../../../data/pictureListInThree'
import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import {
  AlbumContainer, Title, ImageBox, Text,
} from './Album.styles'

export type AlbumProps = {
  id: number,
  title: string,
  imageUrl?: string,
  content: string
}

export const Album: FC<AlbumProps> = ({
  title, content,
}) => (
  <>

    <AlbumContainer>

      <Title>
        <h2>{title}</h2>
      </Title>

      <ImageBox>
        <PictureMediaQueries
          imageList={pictureListInThree}
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

  </>
)
