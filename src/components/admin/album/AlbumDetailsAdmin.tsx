import React, { FC } from 'react'
import { IAlbum, IPicture } from '../../../types'
import { Title } from '../../atoms/Title'
import { Text } from '../../atoms'
import { AlbumContainer, ImageBox } from '../../album/AlbumDetails.styles'
import { PictureMediaQueries } from '../../pictureLists/PictureMediaQueries'
import { htmlText } from '../../utils/htmlText'

type Props = {
    album: IAlbum
    pictures: IPicture[]
}

export const AlbumDetailsAdmin: FC<Props> = ({ album, pictures }) => {
  const { title, year, content } = album

  const images = (
    <ImageBox full>
      <PictureMediaQueries
        imageList={pictures}
        width={150}
        height={150}
      />
    </ImageBox>
  )

  return (
    <AlbumContainer>
      <Title>
        <h2>{title}</h2>
      </Title>
      { images }
      <h4>{year}</h4>
      <Text>
        {htmlText(content)}
      </Text>
    </AlbumContainer>
  )
}
