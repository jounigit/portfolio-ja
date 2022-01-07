import React, { FC } from 'react'
import { IPicture } from '../../types'
// import { pictureListInThree } from '../../../data/pictureListInThree'
import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import {
  AlbumContainer, Title,
  ImageBox,
  Text,
} from './Album.styles'

export type AlbumProps = {
  id: number,
  title: string,
  content: string,
  pictures: IPicture[]
}

export const Album: FC<AlbumProps> = ({
  title, content, pictures,
}) => (
  <>

    <AlbumContainer>

      <Title>
        <h2>{title}</h2>
      </Title>

      <ImageBox>
        <PictureMediaQueries
          imageList={pictures}
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
