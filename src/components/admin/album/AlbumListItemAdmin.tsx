import React, { FC, Fragment, useEffect } from 'react'
import styled from 'styled-components/macro'
import toast from 'react-hot-toast'
import { IAlbum } from '../../../types'
import {
  Col, Grid, Image, Row,
} from '../Admin.styles'
// import { SelectAlbumCategory } from './SelectAlbumCategory'
import { ActionLinks } from '../../utils/ActionLinks'
import { colors } from '../../../styles/theme'
import { ImageGridListItem } from '../../album/AlbumListItem.styles'
// import { Modal } from '../../modal/modal'
// import { useModal } from '../../../hooks/useModal'
// import { AlbumDelete } from './AlbumDelete'
import { usePictures } from '../../../hooks/usePicture'
import { SmallButton } from '../../atoms/Button'
import {
  IAlbumCatProps,
  useDeleteAlbumCategory,
  useUpdateAlbumCategory,
} from '../../../hooks/useAlbums'
import { SelectAlbumCategoryForm } from './SelectAlbumCategoryForm'

const ImageItem = styled(ImageGridListItem)`
    grid-template-columns: 1fr;
    margin: 0.5rem 1rem 0.5rem 0;
`
const Links = styled.div`

`

interface ItemProps {
    album: IAlbum
}

export const AlbumListItemAdmin: FC<ItemProps> = ({ album }) => {
  const { mutate: RemoveCat } = useDeleteAlbumCategory()
  const {
    status: UpdateCatStatus, mutate: UpdateCat,
  } = useUpdateAlbumCategory()
  // const { isShown, toggle } = useModal()
  const {
    id, title, pictures: picIds, category,
  } = album
  const pictures = usePictures()

  const firstPic = pictures.find((p) => p.id === picIds[0])
  const showPic = <Image src={firstPic?.landscape} alt="kuva" />
  const catID = category ? category.id : ''

  useEffect(() => {
    if (UpdateCatStatus === 'success') {
      console.log('UseEffect Remove cat!!!!!')
      toast.success('Album category updated successfully.')
    }
  }, [UpdateCatStatus])

  // :::::::::::::: album category handlers :::::::::::::::::::
  const removeCat = (): void => {
    console.log('Remove cat!!!!!')
    const ids: IAlbumCatProps = {
      id,
      catID,
    }
    RemoveCat(ids)
  }

  const updateAlbumCat = (data: IAlbumCatProps): void => {
    console.log('Update cat!!!!!')
    const ids = data
    UpdateCat(ids)
  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::
  const removeButton = (
    <SmallButton
      onClick={removeCat}
      color="green"
    >
      poista nykyinen
    </SmallButton>
  )

  const selectAlbumCategoryForm = (
    <SelectAlbumCategoryForm
      updateAlbumCat={updateAlbumCat}
      album={album}
    />
  )

  // :::::::::::::::::::::::::::::::::::: //
  const { link, linkUpdate, linkRemove } = ActionLinks({
    id, path: 'album',
  })

  return (
    <>
      <Grid mb={6}>
        <Row bgColor={colors.grey1} p={0.5}>

          <Col w={2}>
            <ImageItem width={150} height={150}>
              {showPic}
            </ImageItem>
          </Col>

          <Col w={2}>
            <h3>{title}</h3>
          </Col>
          <Col w={2}>
            { selectAlbumCategoryForm }
            { category && removeButton }
          </Col>

          <Col w={1}>
            <Links>
              {link}
            </Links>
            <Links>
              {linkUpdate}
            </Links>
            <Links>
              {linkRemove}
            </Links>
          </Col>
        </Row>
      </Grid>
      {/* <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Albumin poisto"
        modalContent={
          <AlbumDelete id={id} title={title} />
        }
      /> */}
    </>
  )
}
