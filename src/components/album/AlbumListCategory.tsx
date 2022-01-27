import React from 'react'
import { useParams } from 'react-router-dom'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useAlbumsByCategory } from '../../hooks/useAlbums'
import { filterAlbums } from './filterAlbums'

export const AlbumListCategory = (): JSX.Element => {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const { isLoading, albumsByCategory } = useAlbumsByCategory(categorySlug)

  if (isLoading) return <h3>Loading ...</h3>

  if (albumsByCategory === undefined) return <div>No albums found.</div>

  const filtered = filterAlbums(albumsByCategory)

  const mappedData = filtered?.map((a) => (
    <AlbumListItem
      key={a.id}
      id={a.id}
      title={a.title}
      slug={a.slug}
      info={a.info}
      pictures={a.pictures}
    />
  ))

  return (
    <AlbumListContainer>
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
