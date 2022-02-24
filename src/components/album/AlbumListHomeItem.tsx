import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { usePictures } from '../../hooks/usePicture'
import {
  AlbumListHomeItemContainer,
  BackgroundImage,
  TextWrapper,
} from './AlbumHomePage.styles'

import bgImage from '../../assets/default_bg.jpg'

interface AlbumListItemProps {
    title: string,
    slug: string,
    info: string | undefined,
    pictures: string[]
}

export const AlbumListHomeItem:
FC<AlbumListItemProps> = ({
  title, slug, info, pictures,
}) => {
  const pictureData = usePictures()

  const firstPic = pictureData.find((p) => p.id === pictures[0])

  const showPic = firstPic?.thumb || bgImage

  return (
    <AlbumListHomeItemContainer>

      <BackgroundImage image={showPic}>
        <Link
          style={{ width: '100%', textDecoration: 'none' }}
          to={`/galleria/${slug}`}
        >
          <TextWrapper>
            <h2>{title}</h2>

            {info}

          </TextWrapper>
        </Link>
      </BackgroundImage>

    </AlbumListHomeItemContainer>
  )
}
