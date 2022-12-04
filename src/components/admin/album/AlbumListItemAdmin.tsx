/* eslint-disable no-useless-return */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDeleteAlbum } from '../../../hooks/useAlbums'
// import styled from 'styled-components'
import { usePictures } from '../../../hooks/usePicture'
import { IAlbum } from '../../../types'
// import { ICategory } from '../../../types'
// import { Text } from '../../atoms'
import { BlueButton, GreenButton, RedButton } from '../../atoms/Button'
import { Title } from '../../atoms/Title'
import {
  Col, Grid, Image, Row,
} from '../Admin.styles'
import { SelectAlbumCategory } from './SelectAlbumCategory'

interface ItemProps {
    album: IAlbum
}

export const AlbumListItemAdmin:
FC<ItemProps> = ({ album }) => {
  const pictureData = usePictures()
  const {
    id, title, pictures,
  } = album

  const firstPic = pictures && pictureData.find((p) => p.id === pictures[0])

  const { mutate } = useDeleteAlbum()

  const remove = (): unknown => {
    // eslint-disable-next-line no-alert
    const ok = window.confirm(`remove album '${title}' '${id}'?`)
    if (ok === false) {
      return
    }

    mutate(id)
  }

  const showPic = <Image src={firstPic?.landscape} alt="kuva" />

  const link = (
    <Link to={`/admin/album/album-admin/${id}`}>
      <BlueButton size={0.5}>
        Katso
      </BlueButton>
    </Link>
  )

  const linkUpdate = (
    <Link to={`/admin/album/album-update/${id}`}>
      <GreenButton size={0.5}>
        Päivitä
      </GreenButton>
    </Link>
  )

  return (
    <Grid size={5}>
      <Row>
        <Col size={1}>{showPic}</Col>
        <Col size={2}><Title>{title}</Title></Col>
        <Col size={1}>
          <SelectAlbumCategory album={album} />
        </Col>
        <Col
          size={1}
          // style={{
          //   flex: 2, flexDirection: 'row', justifyContent: 'space-evenly',
          // }}
        >
          {link}
          {linkUpdate}
          <RedButton
            size={0.5}
            onClick={() => remove()}
          >
            Poista
          </RedButton>
        </Col>
      </Row>
    </Grid>
  )
}
