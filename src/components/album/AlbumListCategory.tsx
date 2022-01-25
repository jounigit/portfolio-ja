import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useAlbumsByCategory } from './useAlbums'
import { hasArrOfObjWithProperty, isArray } from '../../types'

type Params = {
    categorySlug: string;
  };

const AlbumsCategoryContainer = styled(AlbumListContainer)`
    margin-top: 130px;
`

export const AlbumListCategory = (): JSX.Element => {
  const { categorySlug } = useParams<Params>()
  const { isLoading, albumsByCategory } = useAlbumsByCategory(categorySlug)

  if (isLoading) return <h3>Loading ...</h3>

  let filtered = albumsByCategory

  if (isArray(filtered) && hasArrOfObjWithProperty(filtered)) {
    filtered = filtered.sort((a, b) => b.year - a.year)
  }

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
    <AlbumsCategoryContainer>
      { mappedData && mappedData }
    </AlbumsCategoryContainer>
  )
}
