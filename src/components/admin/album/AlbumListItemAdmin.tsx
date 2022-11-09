/* eslint-disable no-useless-return */
import React, { FC } from 'react'
import { useDeleteAlbum } from '../../../hooks/useAlbums'
// import styled from 'styled-components'
import { usePictures } from '../../../hooks/usePicture'
import { Text } from '../../atoms'
import { GreenButton, RedButton } from '../../atoms/Button'
import { Title } from '../../atoms/Title'
import {
  Col, Grid, Image, Row,
} from '../Admin.styles'

interface ItemProps {
    id: string,
    title: string,
    info: string | undefined,
    pictures: string[]
}

export const AlbumListItemAdmin:
FC<ItemProps> = ({
  id, title, info, pictures,
}) => {
  const pictureData = usePictures()

  const firstPic = pictureData.find((p) => p.id === pictures[0])

  const { mutate } = useDeleteAlbum()

  const remove = (): unknown => {
    // eslint-disable-next-line no-alert
    const ok = window.confirm(`remove album '${title}' '${id}'?`)
    if (ok === false) {
      return
    }

    mutate(id)
  }

  // eslint-disable-next-line jsx-a11y/alt-text
  const showPic = <Image src={firstPic?.landscape} /> || <p>no pics yet</p>
  // console.log(id)
  return (
    <Grid size={5}>
      <Row>
        <Col size={1}>{showPic}</Col>
        <Col size={2}><Title>{title}</Title></Col>
        <Col size={2}><Text>{info}</Text></Col>
        <Col
          size={1}
          style={{
            flex: 2, flexDirection: 'row', justifyContent: 'space-evenly',
          }}
        >
          <GreenButton as="a" href="#">
            Päivitä
          </GreenButton>
          <RedButton
            onClick={() => remove()}
          >
            Poista
          </RedButton>
        </Col>
      </Row>
    </Grid>
  )
}
