/* eslint-disable react/destructuring-assignment */
import React, { FC, Fragment } from 'react'
import styled from 'styled-components/macro'
import { PictureDelete } from './PictureDelete'
import { colors } from '../../../styles/theme'
import { useModal } from '../../../hooks/useModal'
import { Modal } from '../../modal/modal'
import { IPicture } from '../../../types'
import { ActionLinks } from '../../utils/ActionLinks'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    padding: 10px 10px;
    border: 1px solid ${colors.grey3};
    border-radius: 0.2rem;
    background-color: white;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`
const LinksWrapper = styled.div`
    flex-direction: row;
    padding-bottom: 0;
`

interface Props {
    picture: IPicture
}

export const PictureListItemAdmin: FC<Props> = (props) => {
  const { isShown, toggle } = useModal()
  const { id, title, landscape } = props.picture

  // :::::::::::::::::::::::::::::::::::: //
  const { linkUpdate, linkRemove } = ActionLinks({
    id, path: 'picture', toggle,
  })

  // :::::::::::::::::::::::::::::::::::: //
  return (
    <>
      <Wrapper>
        <Image
          src={landscape}
        />

        <LinksWrapper>
          <span>
            {linkUpdate}
          </span>
          <span>
            {linkRemove}
          </span>
        </LinksWrapper>
      </Wrapper>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Kuvan poisto"
        modalContent={
          <PictureDelete id={id} title={title} toggle={toggle} />
        }
      />
    </>
  )
}
