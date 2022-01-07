import React, { FC } from 'react'
import {
  Message,
  // Wrapper,
  Image,
} from './image-modal.style'

interface IImageModal {
  message: string | undefined;
  imgUrl: string | undefined;
}

export const ImageModal: FC<IImageModal> = ({ imgUrl, message }) => (
  <>
    <Message>{message}</Message>
    <Image>
      <img src={imgUrl} alt="" />
    </Image>
  </>
)
