import React, { FC } from 'react'
import { IAlbum } from '../../../types'
import { Title } from '../../atoms/Title'
import { Text } from '../../atoms'
import { Col, Grid, Row } from '../Admin.styles'

type Props = {
    album: IAlbum
}

export const AlbumDetailsAdmin: FC<Props> = (
  {
    album,
  },
) => {
  const {
    title, year, info, content, pictures,
  } = album

  //   console.log('_ Album pics: ', pictures)
  return (
    <Grid size={2}>
      <Row>
        <Col size={1}>
          <Title>{title}</Title>
          <Text>{year}</Text>
          <Text>{info}</Text>
          <Text>{content}</Text>
        </Col>
        <Col size={1}>{pictures}</Col>
      </Row>
    </Grid>
  )
}
