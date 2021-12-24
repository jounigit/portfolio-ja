import React, { FC } from 'react'
import { Album, AlbumProps } from './Album'
import { AlbumListContainer } from './AlbumList.styles'

type AlbumsProps = {
    albums: AlbumProps[]
}

export const AlbumsList: FC<AlbumsProps> = ({ albums }) => (
  <AlbumListContainer>
    <>
      {albums.map((album) => (
        <Album
          key={album.id}
          title={album.title}
          imageUrl={album.imageUrl}
          content={album.content}
          id={0}
        />
      ))}
    </>
  </AlbumListContainer>

)
