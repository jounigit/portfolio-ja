import React, { FC } from 'react'
import { IPicture } from '../../types'
import { PictureMediaQueries } from '../pictureLists/PictureMediaQueries'
import {
  AlbumContainer, ImageBox, Text, Title,
} from './AlbumDetails.styles'

interface Props {
    title: string;
    pictures: IPicture[];
    content: JSX.Element | '';
    // eslint-disable-next-line react/require-default-props
    full?: boolean;
}

export const AlbumDetails: FC<Props> = ({
  title, pictures, content, full = false,
}) => (
  <AlbumContainer>
    <Title>
      <h2>{title}</h2>
    </Title>
    <ImageBox full={full}>
      <PictureMediaQueries
        imageList={pictures}
        width={250}
        height={250}
      />
    </ImageBox>
    <Text>
      {content}
    </Text>
  </AlbumContainer>
)
