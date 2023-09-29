import React from 'react'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useAlbums } from '../../hooks/useAlbums'

export const AlbumsList = (): JSX.Element => {
  const albumsQuery = useAlbums()
  let albums

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }

  // const sorted = isArray(albums)
  // && albums.sort((a, b) => b.year - a.year)

  const mappedData = albums?.map((a) => (
    <AlbumListItem
      key={a.id}
      album={a}
    />
  ))

  return (
    <AlbumListContainer>
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
