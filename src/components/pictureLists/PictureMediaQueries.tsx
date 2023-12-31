import React, { FC, useState } from 'react'
import { ImageGrid, IImageGridProps } from './pictureMediaQuery.style'
import { Modal } from '../modal/modal'
import { ImageModal } from '../image-modal/image-modal'
import { DataDiv } from '../atoms/DataDiv'
import { useModal } from '../../hooks/useModal'
import { IPicture } from '../../types'

interface IPictureMediaProps extends IImageGridProps {
  imageList: IPicture[]
}

export const PictureMediaQueries: FC<
IPictureMediaProps> = ({ imageList, width, height }) => {
  const { isShown, toggle } = useModal()
  const [img, setImg] = useState<IPicture>()

  const handleClick = (imgSrc: IPicture): void => {
    setImg(imgSrc)
    toggle()
  }

  return (
    <>

      <ImageGrid width={width} height={height}>

        <DataDiv
          data={imageList}
          onDivClick={(item) => handleClick(item)}
        />

      </ImageGrid>

      <Modal
        isShown={isShown}
        hide={toggle}
        headerText={img?.title}
        modalContent={
          <ImageModal imgUrl={img?.image} message={img?.content} />
        }
      />
    </>
  )
}
