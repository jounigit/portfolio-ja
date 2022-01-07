import React from 'react'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useAlbums } from './useAlbums'

export const AlbumsList = (): JSX.Element => {
  const albumsQuery = useAlbums()
  let albums

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }

  // console.log('# AlbumList page: ', albums)

  const mappedData = albums?.map((a) => (
    <AlbumListItem
      key={a.id}
      id={a.id}
      title={a.title}
      slug={a.slug}
      content={a.content}
      pictures={a.pictures}
    />
  ))

  return (
    <AlbumListContainer>
      <h3>Albumit</h3>
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
