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
      id={a.id}
      title={a.title}
      slug={a.slug}
      info={a.info}
      pictures={a.pictures}
      // width={100}
      // height={100}
    />
  ))

  return (
    <AlbumListContainer>
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
