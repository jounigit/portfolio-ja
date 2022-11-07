import React from 'react'
import { useAlbums } from '../../../hooks/useAlbums'
import { AlbumListItemAdmin } from './AlbumListItemAdmin'

export const AlbumListAdmin = (): JSX.Element => {
  const albumsQuery = useAlbums()
  let albums

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }

  const mappedData = albums?.map((a) => (
    <AlbumListItemAdmin
      key={a.id}
      id={a.id}
      title={a.title}
      info={a.info}
    //   pictures={a.pictures}
    />
  ))

  return (
    <>
      { mappedData && mappedData }
    </>
  )
}
